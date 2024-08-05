document.addEventListener("DOMContentLoaded", async function() {
    const baseUrl = 'https://www.jetphotos.com/photo/';

    // Function to generate a random 6-digit number
    function generateRandomId() {
        let id = '11';
        for (let i = 0; i < 6; i++) {
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
            const doc = parser.parseFromString(data.contents, 'text/html');
            const photoUrl = doc.querySelector('meta[property="og:image"]').getAttribute('content');
            return photoUrl;
        } catch (error) {
            console.error('Error fetching the photo URL:', error);
            return null;
        }
    }

    // Generate two unique random photo IDs
    const photoId1 = generateRandomId();
    let photoId2;
    do {
        photoId2 = generateRandomId();
    } while (photoId1 === photoId2);

    // Fetch and set the image URLs
    const photoUrl1 = await fetchPhotoUrl(photoId1);
    const photoUrl2 = await fetchPhotoUrl(photoId2);

    if (photoUrl1) {
        document.getElementById("jetphoto1").src = photoUrl1;
    }
    if (photoUrl2) {
        document.getElementById("jetphoto2").src = photoUrl2;
    }
});
