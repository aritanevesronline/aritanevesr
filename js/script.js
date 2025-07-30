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
            circle.style.background = `conic-gradient(var(--medium-purple) 0% ${rounded}%, var(--dark-theme) ${rounded}% 100%)`;
            percentageText.textContent = `${rounded}%`;

            if (current < target) {
                requestAnimationFrame(update);
            }
        };

        update();
    });
});


/* CONTENT TABS */

document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.title-box');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            // Assuming .content-wrapper is the next sibling of the button
            const content = button.nextElementSibling;

            if (content && content.classList.contains('content-wrapper')) {
                content.classList.toggle('open');
            }
        });
    });
});