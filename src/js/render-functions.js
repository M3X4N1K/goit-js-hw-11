import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

// DOM elements
const gallery = document.querySelector('.gallery');
const loader = document.querySelector('.loader');

// Create SimpleLightbox instance
let lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
    nav: true,
    close: true,
});

export function createGallery(images) {
    const markup = images
        .map(({ webformatURL, largeImageURL, tags, likes, views, comments, downloads }) => `
            <li class="gallery-item">
                <a href="${largeImageURL}">
                    <img src="${webformatURL}" alt="${tags}" loading="lazy" />
                </a>
                <div class="info">
                    <div class="info-row">
                        <div class="info-item">
                            <b>Likes</b>
                            ${likes.toLocaleString()}
                        </div>
                        <div class="info-item">
                            <b>Views</b>
                            ${views.toLocaleString()}
                        </div>
                    </div>
                    <div class="info-row">
                        <div class="info-item">
                            <b>Comments</b>
                            ${comments.toLocaleString()}
                        </div>
                        <div class="info-item">
                            <b>Downloads</b>
                            ${downloads.toLocaleString()}
                        </div>
                    </div>
                </div>
            </li>
        `)
        .join('');

    gallery.innerHTML = markup;
    lightbox.refresh();
}

export function clearGallery() {
    gallery.innerHTML = '';
}

export function showLoader() {
    loader.classList.remove('hidden');
}

export function hideLoader() {
    loader.classList.add('hidden');
}