function toggleVideo() {
    const trailer = document.querySelector('.trailer');
    const video = document.querySelector('.video');
    video.pause();
    trailer.classList.toggle('.active');
}