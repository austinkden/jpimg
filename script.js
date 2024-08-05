document.addEventListener("DOMContentLoaded", async function() {
    const proxyUrl = 'https://api.allorigins.win/get?url=';
    const targetUrl = 'https://www.jetphotos.com/photo/11415601';
    const encodedUrl = encodeURIComponent(targetUrl);
    const fetchUrl = `${proxyUrl}${encodedUrl}`;

    try {
        const response = await fetch(fetchUrl);
        const data = await response.json();
        const parser = new DOMParser();
        const doc = parser.parseFromString(data.contents, 'text/html');
        
        const photoUrl = doc.querySelector('meta[property="og:image"]').getAttribute('content');
        document.getElementById("jetphoto").src = photoUrl;
    } catch (error) {
        console.error('Error fetching the photo URL:', error);
    }
});
