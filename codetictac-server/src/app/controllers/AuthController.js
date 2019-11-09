import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import User from "../models/User";

class AuthController {
    async register(req, res) {
        const {
            name,
            email,
            organization,
            password,
            wakatime_token
        } = req.body;
        const data = {};
        if (!name || !email || !password || !wakatime_token)
            return res.status(400).json({
                error: "Name, email, token and password are required."
            });

        data.name = name;
        data.email = email;
        data.password = password;
        data.wakatime_token = wakatime_token;
        if (organization) data.organization = organization;
        try {
            const userFromDb = await User.findOne({ email });
            if (userFromDb)
                return res.status(409).json({
                    error: "E-mail is already in use."
                });

            const user = await User.create({ ...data });

            user.password = undefined;

            return res.status(201).json({
                user,
                token: jwt.sign({ id: user._id }, process.env.APP_SECRET, {
                    expiresIn: 86400
                })
            });
        } catch (err) {
            return res
                .status(400)
                .json({ error: `Registration failed: ${err}` }); 
                
        }
    }

    async login(req, res) {
        const { email, password } = req.body;

        const user = await User.findOne({ email }).select("+password");

        if (!user) return res.status(401).json({ error: "User not found" });

        if (!(await bcrypt.compare(password, user.password)))
            return res.status(401).json({ error: "Invalid password" });

        user.password = undefined;

        return res.json({
            user,
            token: jwt.sign({ id: user._id }, process.env.APP_SECRET, {
                expiresIn: 86400
            })
        });
    }
}

export default new AuthController();
