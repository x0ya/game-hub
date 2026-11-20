import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: 'd959c49aac444a258f57af7114e93dae',
    }
})