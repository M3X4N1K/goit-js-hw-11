import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import { getImagesByQuery } from "./pixabay-api.js";
import { createGallery, clearGallery, showLoader, hideLoader } from "./render-functions.js";

// Configure iziToast default settings
iziToast.settings({
    timeout: 4000,
    resetOnHover: true,
    transitionIn: 'flipInX',
    transitionOut: 'flipOutX',
    position: 'topRight'
});

// Get form element
const form = document.querySelector('.form');
const searchInput = form.querySelector('input[name="search-text"]');

// Form submission handler
form.addEventListener('submit', async (event) => {
    event.preventDefault();

    const query = searchInput.value.trim();

    // Validate input
    if (!query) {
        iziToast.warning({
            title: 'Warning',
            message: 'Please enter a search query!',
            icon: 'ico-warning'
        });
        return;
    }

    // Clear previous results and show loader
    clearGallery();
    showLoader();

    try {
        // Make API request
        const data = await getImagesByQuery(query);

        // Check if any images were found
        if (!data.hits || data.hits.length === 0) {
            iziToast.info({
                title: 'No Results',
                message: 'Sorry, there are no images matching your search query. Please try again!',
                icon: 'ico-info'
            });
            return;
        }

        // Display images
        createGallery(data.hits);
        
        // Success notification
        iziToast.success({
            title: 'Success',
            message: `Found ${data.hits.length} images!`,
            icon: 'ico-success'
        });

    } catch (error) {
        console.error('Search error:', error);
        
        // Error notification
        iziToast.error({
            title: 'Error',
            message: 'Something went wrong. Please try again later.',
            icon: 'ico-error'
        });
    } finally {
        // Hide loader
        hideLoader();
    }
});