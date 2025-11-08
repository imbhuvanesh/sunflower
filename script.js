// --- LIGHTBOX/MODAL LOGIC ---

const photoContainers = document.querySelectorAll('.photo-container');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const closeBtn = document.querySelector('.close-btn');

// Show Lightbox on click
photoContainers.forEach(container => {
    container.addEventListener('click', function() {
        const imgSrc = this.getAttribute('data-src');
        lightboxImg.src = imgSrc;
        lightbox.style.display = 'flex'; 
    });
});

// Hide Lightbox (X button, overlay click, ESC key)
closeBtn.addEventListener('click', () => lightbox.style.display = 'none');

lightbox.addEventListener('click', (event) => {
    if (event.target === lightbox) {
        lightbox.style.display = 'none';
    }
});

document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
        lightbox.style.display = 'none';
    }
});


// --- SOUND TOGGLE LOGIC ---

const videoBg = document.getElementById('video-bg');
const soundToggleBtn = document.getElementById('sound-toggle');

// Event listener for the sound button
soundToggleBtn.addEventListener('click', function() {
    if (videoBg.muted) {
        // Unmute the video
        videoBg.muted = false;
        soundToggleBtn.textContent = '🔊'; // Change icon to unmuted
    } else {
        // Mute the video
        videoBg.muted = true;
        soundToggleBtn.textContent = '🔇'; // Change icon to muted
    }
});

// Set the initial button icon based on the video's default state (muted)
document.addEventListener('DOMContentLoaded', () => {
    if (videoBg.muted) {
        soundToggleBtn.textContent = '🔇';
    } else {
        soundToggleBtn.textContent = '🔊';
    }
});