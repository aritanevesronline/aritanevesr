function showSlider(contextOrName, name) {
    const sliders = ['figma', 'web', 'canvas', 'node', 'old'];

    let context;
    if (!name) {
        name = contextOrName;
        context = document;
    } else {
        context = document.querySelector(contextOrName);
    }

    sliders.forEach(slider => {
        const el = document.querySelector(`.${slider}-slider`);
        if (el) el.style.display = (slider === name) ? 'flex' : 'none';
    });

    sliders.forEach(slider => {
        let buttons;
        if (context === document) {
            buttons = document.querySelectorAll(`button.${slider}`);
        } else {
            buttons = context.querySelectorAll(`button.${slider}`);
        }

        buttons.forEach(btn => {
            if (slider === name) {
                btn.classList.add('selected');
                btn.classList.remove('not-selected');
            } else {
                btn.classList.add('not-selected');
                btn.classList.remove('selected');
            }
        });
    });

    const select = document.querySelector("#sliderSelector");
    if (select) select.value = name;
}
