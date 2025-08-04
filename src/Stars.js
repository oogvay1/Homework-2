export default function renderStars(starsContainer) {
    starsContainer.innerHTML = '';

    const savedIndex = parseInt(localStorage.getItem('index')) || 0;
    const stars = [];

    for (let i = 0; i < 5; i++) {
        const span = document.createElement('span');
        span.className = 'star';
        span.innerHTML = '<i class="ri-star-line"></i>';

        if (i <= savedIndex) {
            span.querySelector('i').className = 'ri-star-fill';
        }

        span.addEventListener('click', () => {
            localStorage.setItem('index', i);
            stars.forEach((s, j) => {
                const icon = s.querySelector('i');
                icon.className = j <= i ? 'ri-star-fill' : 'ri-star-line';
            });
        });

        stars.push(span);
        starsContainer.appendChild(span);
    }
}
