function showMenu() {
    const on = document.querySelector('.on-button');
    const off = document.querySelector('.off-button');
    const menu = document.querySelector('.mobile-menu');
    const sections = document.querySelectorAll(
        '.banner, .skills-tab, .about, .projects, .form, .ending'
    );

    on.style.display = 'none';
    off.style.display = 'flex';
    sections.forEach(sec => sec.style.display = 'none');
    menu.style.display = 'flex';
}

function hideMenu() {
    const on = document.querySelector('.on-button');
    const off = document.querySelector('.off-button');
    const menu = document.querySelector('.mobile-menu');
    const sections = document.querySelectorAll(
        '.banner, .skills-tab, .about, .projects, .form, .ending'
    );

    menu.style.display = 'none';
    on.style.display = 'flex';
    off.style.display = 'none';
    sections.forEach(sec => sec.style.display = 'flex');
}

function navigateTo(event, target) {
    event.preventDefault();
    hideMenu();
    document.querySelector(target).scrollIntoView({
        behavior: "smooth"
    });
}

function handleResize() {
    const menu = document.querySelector('.mobile-menu');
    const on = document.querySelector('.on-button');
    const off = document.querySelector('.off-button');
    const sections = document.querySelectorAll(
        '.banner, .skills-tab, .about, .projects, .form, .ending'
    );

    if (window.innerWidth >= 1080) {
        if (menu) menu.style.display = 'none';
        on.style.display = 'flex';
        off.style.display = 'none';
        sections.forEach(sec => sec.style.display = 'flex');
    }
}

handleResize();
window.addEventListener('resize', handleResize);
