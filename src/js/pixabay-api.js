import { renderGallery } from "./render-functions.js";

const form = document.getElementById("search-form");
const input = document.getElementById("search-input");
const gallery = document.getElementById("gallery");
const loader = document.getElementById("loader");

const API_KEY = "52398944-8832a4a5cb581cf5dc4de5156"; //  заміни на свій API ключ
const BASE_URL = "https://pixabay.com/api/";

form.addEventListener("submit", async e => {
  e.preventDefault();
  const query = input.value.trim();
  if (!query) return;

  gallery.innerHTML = "";
  loader.classList.remove("hidden");

  try {
    const data = await fetchImages(query);
    if (data.hits.length === 0) {
      gallery.innerHTML = "<p>No images found. Try another keyword.</p>";
    } else {
      renderGallery(data.hits, gallery);
    }
  } catch (err) {
    console.error("Fetch error:", err);
    gallery.innerHTML = "<p>Something went wrong. Try again later.</p>";
  } finally {
    loader.classList.add("hidden");
  }
});

async function fetchImages(query) {
  const url = `${BASE_URL}?key=${API_KEY}&q=${encodeURIComponent(
    query
  )}&image_type=photo&orientation=horizontal&safesearch=true&per_page=12`;
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return await response.json();
}
