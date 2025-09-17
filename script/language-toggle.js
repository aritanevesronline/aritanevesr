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
    const togglePT = document.querySelectorAll('.toggle-pt');
    const toggleENG = document.querySelectorAll('.toggle-eng');
    const formPT = document.querySelectorAll('.form-pt');
    const formENG = document.querySelectorAll('.form-eng');

    pt.forEach(el => el.style.display = 'block');
    eng.forEach(el => el.style.display = 'none');

    togglePT.forEach(el => el.style.display = 'flex');
    toggleENG.forEach(el => el.style.display = 'none');
    formPT.forEach(el => el.style.display = 'flex');
    formENG.forEach(el => el.style.display = 'none');

    localStorage.setItem('language', 'pt');
}

function turnENG() {
    const pt = document.querySelectorAll('.pt');
    const eng = document.querySelectorAll('.eng');
    const togglePT = document.querySelectorAll('.toggle-pt');
    const toggleENG = document.querySelectorAll('.toggle-eng');
    const formPT = document.querySelectorAll('.form-pt');
    const formENG = document.querySelectorAll('.form-eng');

    pt.forEach(el => el.style.display = 'none');
    eng.forEach(el => el.style.display = 'block');

    togglePT.forEach(el => el.style.display = 'none');
    toggleENG.forEach(el => el.style.display = 'flex');
    formPT.forEach(el => el.style.display = 'none');
    formENG.forEach(el => el.style.display = 'flex');

    localStorage.setItem('language', 'eng');
}
