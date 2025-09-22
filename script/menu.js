function showMenu() {
    const menu = document.querySelector('.mobile-menu');
    const sections = document.querySelectorAll(
        '.banner, .skills-tab, .about, .projects, .form, .ending'
    );

    if (menu) menu.style.display = 'flex';
    sections.forEach(sec => sec.style.display = 'none');
}

function hideMenu() {
    const menu = document.querySelector('.mobile-menu');
    const sections = document.querySelectorAll(
        '.banner, .skills-tab, .about, .projects, .form, .ending'
    );
    if (menu) menu.style.display = 'none';

    if (window.innerWidth < 1081) {
        sections.forEach(sec => sec.style.display = 'flex');
    }
}

function navigateTo(event, target) {
    event.preventDefault();
    hideMenu();
    document.querySelector(target)?.scrollIntoView({ behavior: 'smooth' });
}

function handleResize() {
    const menu = document.querySelector('.mobile-menu');
    const sections = document.querySelectorAll(
        '.banner, .skills-tab, .about, .projects, .form, .ending'
    );

    if (window.innerWidth >= 1081) {
        if (menu) menu.style.display = 'none';
        sections.forEach(sec => sec.style.display = 'flex');
    }
}

handleResize();
window.addEventListener('resize', handleResize);
