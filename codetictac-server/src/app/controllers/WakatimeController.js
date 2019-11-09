import { stringify, parse } from "query-string";
import tokenApi from "../services/token.api";
import wakatimeApi from "../services/wakatime.api";

class WakatimeController {
    async store(req, res) {
        const { code } = req.body;

        const body = {
            redirect_uri: process.env.WAKATIME_REDIRECT_URL,
            grant_type: "authorization_code",
            client_id: process.env.WAKATIME_CLIENT_ID,
            client_secret: process.env.WAKATIME_APP_SECRET,
            code
        };
        try {
            // Getting token from wakatime

            const tokenRes = await tokenApi.post("token", stringify(body), {
                headers: {
                    Accept: "application/x-www-form-urlencoded"
                }
            });
            const { access_token: token } = parse(tokenRes.data);

            // Getting user data from wakatime
            const emailRes = await wakatimeApi.get("users/current", {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            const { data } = emailRes.data;
            return res.send({
                token,
                name: data.display_name,
                email: data.email
            });
        } catch (err) {
            return res.status(400).send({ error: err });
        }
    }
}

export default new WakatimeController();
