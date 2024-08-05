document.addEventListener("DOMContentLoaded", async function() {
    // Predefined URL of the image (simulate fetching from JetPhotos)
    const photoUrl = "https://cdn.jetphotos.com/full/6/72334_1682327202.jpg";
    
    // Set the src attribute of the image element
    document.getElementById("jetphoto").src = photoUrl;
});
