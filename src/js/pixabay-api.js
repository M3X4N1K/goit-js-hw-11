import axios from "axios";

const API_KEY = "52398944-8832a4a5cb581cf5dc4de5156"; // 🔑 встав свій API ключ
const BASE_URL = "https://pixabay.com/api/";

export async function getImagesByQuery(query) {
    const params = {
        key: API_KEY,
        q: query,
        image_type: "photo",
        orientation: "horizontal",
        safesearch: true,
        per_page: 15
    };

    try {
        const response = await axios.get(BASE_URL, { params });
        return response.data;
    } catch (error) {
        console.error('Error fetching images:', error);
        throw error;
    }
}