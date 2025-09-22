document.addEventListener('DOMContentLoaded', () => {
    const sliders = document.querySelectorAll('.inner-slider');

    sliders.forEach(slider => {
        let isDown = false;
        let startX = 0;
        let scrollLeft = 0;
        let isDragging = false;

        slider.querySelectorAll('img').forEach(img => {
            img.setAttribute('draggable', 'false');
            img.addEventListener('dragstart', e => e.preventDefault());
        });

        slider.addEventListener('mousedown', (e) => {
            isDown = true;
            isDragging = false;
            startX = e.clientX;
            scrollLeft = slider.scrollLeft;
            slider.classList.add('active');
            e.preventDefault();
        });

        slider.addEventListener('mousemove', (e) => {
            if (!isDown) return;
            const x = e.clientX;
            const walk = (x - startX) * 1.2;
            if (Math.abs(walk) > 2) isDragging = true;
            slider.scrollLeft = scrollLeft - walk;
            e.preventDefault();
        });

        const stopDrag = () => {
            isDown = false;
            slider.classList.remove('active');
            setTimeout(() => isDragging = false, 50);
        };

        slider.addEventListener('mouseup', stopDrag);
        slider.addEventListener('mouseleave', stopDrag);

        slider.addEventListener('touchstart', (e) => {
            if (e.touches.length !== 1) return;
            isDown = true;
            isDragging = false;
            startX = e.touches[0].clientX;
            scrollLeft = slider.scrollLeft;
        }, { passive: true });

        slider.addEventListener('touchmove', (e) => {
            if (!isDown || e.touches.length !== 1) return;
            const x = e.touches[0].clientX;
            const walk = (x - startX) * 1.2;
            if (Math.abs(walk) > 2) isDragging = true;
            slider.scrollLeft = scrollLeft - walk;
            e.preventDefault(); // impede scroll vertical indesejado durante arraste horizontal
        }, { passive: false });

        slider.addEventListener('touchend', () => {
            stopDrag();
        });

        slider.querySelectorAll('a').forEach(a => {
            a.addEventListener('click', (e) => {
                if (isDragging) e.preventDefault();
            });
        });
    });
});