function getRandomPhotoURL() {
    const randomNumber = Math.floor(Math.random() * 1000000);
    return `https://jetphotos.com/${111000000 + randomNumber}`;
}

window.onload = function() {
    document.getElementById('photo1').src = getRandomPhotoURL();
    document.getElementById('photo2').src = getRandomPhotoURL();
}
