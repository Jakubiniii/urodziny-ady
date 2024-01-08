let isImageReversed = false;

function toggleImage() {
    const image = document.getElementById('toggleImage');

    if (isImageReversed) {
        // If the image is reversed, change it back to the original
        image.src = 'images/timetofly.png';
    } else {
        // If the image is not reversed, change it to the reversed version
        image.src = 'images/27.png'; // Replace with the path to your reversed image
    }

    // Toggle the state
    isImageReversed = !isImageReversed;
}
