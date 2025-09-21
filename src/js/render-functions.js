import axios from "axios";
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import "izitoast/dist/css/iziToast.min.css";

// ==== Pixabay API функція ====
const API_KEY = "YOUR_PIXABAY_KEY"; // заміни на свій ключ
const BASE_URL = "https://pixabay.com/api/";

export function getImagesByQuery(query) {
  return axios
    .get(BASE_URL, {
      params: {
        key: API_KEY,
        q: query,
        image_type: "photo",
        orientation: "horizontal",
        safesearch: true,
      },
    })
    .then(res => res.data);
}

// ==== Рендер функції ====
const gallery = document.getElementById("gallery");
const loader = document.getElementById("loader");

const lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});

export function createGallery(images) {
  const markup = images
    .map(
      img => `
      <li class="gallery-item">
        <a href="${img.largeImageURL}">
          <img src="${img.webformatURL}" alt="${img.tags}" loading="lazy" />
        </a>
        <div class="info">
          <p><b>Likes:</b> ${img.likes}</p>
          <p><b>Views:</b> ${img.views}</p>
          <p><b>Comments:</b> ${img.comments}</p>
          <p><b>Downloads:</b> ${img.downloads}</p>
        </div>
      </li>`
    )
    .join("");

  gallery.insertAdjacentHTML("beforeend", markup);
  lightbox.refresh();
}

export function clearGallery() {
  gallery.innerHTML = "";
  lightbox.refresh();
}

export function showLoader() {
  if (loader) loader.classList.remove("hidden");
}

export function hideLoader() {
  if (loader) loader.classList.add("hidden");
}
