document.addEventListener("DOMContentLoaded", async function() {
    const baseUrl = 'https://www.jetphotos.com/photo/';

    // Function to generate a random 5-digit number
    function generateRandomId() {
        let id = '111';
        for (let i = 0; i < 5; i++) {
            id += Math.floor(Math.random() * 10).toString();
        }
        return id;
    }

    // Function to fetch the image URL from a JetPhotos page
    async function fetchPhotoUrl(photoId) {
        const proxyUrl = 'https://api.allorigins.win/get?url=';
        const fetchUrl = `${proxyUrl}${encodeURIComponent(baseUrl + photoId)}`;
        try {
            const response = await fetch(fetchUrl);
            const data = await response.json();
            const parser = new DOMParser();
      
