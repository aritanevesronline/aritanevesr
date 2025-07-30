document.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('language');
    if (savedLang === 'eng') {
        turnENG();
    } else {
        turnPT();
    }
});

/* LANGUAGE */

function turnPT() {
    const pt = document.querySelectorAll('.pt');
    const eng = document.querySelectorAll('.eng');
    const togglePT = document.querySelector('.toggle-pt');
    const toggleENG = document.querySelector('.toggle-eng');
    const formPT = document.querySelector('.pt-form');
    const formENG = document.querySelector('.eng-form');

    pt.forEach(el => el.style.display = 'block');
    eng.forEach(el => el.style.display = 'none');

    togglePT.style.display = 'flex';
    toggleENG.style.display = 'none';
    formPT.style.display = 'flex';
    formENG.style.display = 'none';

    localStorage.setItem('language', 'pt');
}

function turnENG() {
    const pt = document.querySelectorAll('.pt');
    const eng = document.querySelectorAll('.eng');
    const togglePT = document.querySelector('.toggle-pt');
    const toggleENG = document.querySelector('.toggle-eng');
    const formPT = document.querySelector('.pt-form');
    const formENG = document.querySelector('.eng-form');

    pt.forEach(el => el.style.display = 'none');
    eng.forEach(el => el.style.display = 'block');
    togglePT.style.display = 'none';
    toggleENG.style.display = 'flex';
    formPT.style.display = 'none';
    formENG.style.display = 'flex';

    localStorage.setItem('language', 'eng');
}