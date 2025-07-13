import axios from 'axios';

const V4_ACCESS_TOKEN = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiYzlhZDRhOThlOTYxOWU4YTVjMDNkYWQ2MzVkODg0YiIsIm5iZiI6MTc1MjQxMDUwMy45NTM5OTk4LCJzdWIiOiI2ODczYTk4N2UwZDM2NTkwODAxMDVmMmYiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.lXjcHYvT4mt60jR99qlKLm6G8FIEEUBgdQEdqF1lRPo'; // <--- PASTE YOUR FULL V4 TOKEN HERE
const BASE_URL = 'https://api.themoviedb.org/3';

const tmdbApi = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    // Attach the Authorization header with the Bearer token
    'Authorization': `Bearer ${V4_ACCESS_TOKEN}`
  },
});

export default tmdbApi;