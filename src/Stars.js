const starsContainer = document.getElementById('starsContainer');

for (let i = 0; i < 5; i++) {
    const span = document.createElement('span');
    span.className = 'star';
    span.innerHTML = '<i class="ri-star-line"></i>';
    starsContainer.appendChild(span);
}

const starElements = document.querySelectorAll('.star');

window.addEventListener('DOMContentLoaded', () => {
    const savedIndex = parseInt(localStorage.getItem('index')) || 0;

    starElements.forEach((s, j) => {
        const icon = s.querySelector('i');

        if (j <= savedIndex) {
            icon.className = 'ri-star-fill';
        } else {
            icon.className = 'ri-star-line';
        }
    });
});


starElements.forEach((star, i) => {

    star.addEventListener('click', () => {
        localStorage.setItem('index', i);

        starElements.forEach((s, j) => {
            const icon = s.querySelector('i');

            if (j <= i) {
                icon.className = 'ri-star-fill';
            } else {
                icon.className = 'ri-star-line';
            }
        });
    });
});

export default starElements