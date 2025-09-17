//LOAD BARS

window.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.progress-circle').forEach(circle => {
        const target = +circle.getAttribute('data-progress');
        let current = 0;

        const percentageText = circle.querySelector('.percentage');

        const step = 0.2;
        const update = () => {
            current += step;
            if (current > target) current = target;

            const rounded = Math.round(current);
            circle.style.background = `conic-gradient(var(--medium-purple) 0% ${rounded}%, var(--light-purple) ${rounded}% 100%)`;
            percentageText.textContent = `${rounded}%`;

            if (current < target) {
                requestAnimationFrame(update);
            }
        };

        update();
    });
});
