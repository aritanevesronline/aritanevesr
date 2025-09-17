function hideAll() {
    document.querySelector('.figma-slider').style.display = 'none';
    document.querySelector('.web-slider').style.display = 'none';
    document.querySelector('.canvas-slider').style.display = 'none';
    document.querySelector('.node-slider').style.display = 'none';
    document.querySelector('.old-slider').style.display = 'none';
}

function showSlider(name) {
    const sliders = ['figma', 'web', 'canvas', 'node', 'old'];

    sliders.forEach(slider => {
        const el = document.querySelector(`.${slider}-slider`);
        if (el) el.style.display = (slider === name) ? 'flex' : 'none';
    });

    sliders.forEach(slider => {
        const btn = document.querySelector(`.${slider}.selected, .${slider}.not-selected`) || document.querySelector(`.${slider}`);
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
