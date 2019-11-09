import axios from "axios";

const wakatimeApi = axios.create({
    baseURL: process.env.WAKATIME_API_URL
});

export default wakatimeApi;
