import axios from "axios";

const tokenApi = axios.create({
    baseURL: process.env.WAKATIME_URL_TOKEN
});

export default tokenApi;
