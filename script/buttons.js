function hideAll() {
    document.querySelector('.figma-slider').style.display = 'none';
    document.querySelector('.web-slider').style.display = 'none';
    document.querySelector('.canvas-slider').style.display = 'none';
    document.querySelector('.node-slider').style.display = 'none';
    document.querySelector('.old-slider').style.display = 'none';
}

function showSlider(containerSelector, name) {
    const sliders = ['figma', 'web', 'canvas', 'node', 'old'];

    sliders.forEach(slider => {
        const el = document.querySelector(`.${slider}-slider`);
        if (el) el.style.display = (slider === name) ? 'flex' : 'none';
    });

    const container = document.querySelector(containerSelector);
    if (!container) return;

    sliders.forEach(slider => {
        const btn = container.querySelector(`.${slider}`);
        if (btn) {
            if (slider === name) {
                btn.classList.add('selected');
                btn.classList.remove('not-selected');
            } else {
                btn.classList.add('not-selected');
                btn.classList.remove('selected');
            }
        }
    });
}

