function changeImage(imageSrc) {
    document.getElementById('largeImage').src = imageSrc;
}

function darkenImage() {
    const largeImage = document.getElementById('largeImage');
    if (largeImage.style.filter === 'brightness(50%)') {
        largeImage.style.filter = 'brightness(100%)';
    } else {
        largeImage.style.filter = 'brightness(50%)';
    }
}