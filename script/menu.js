function showMenu() {
    const on = document.querySelector('.on-button');
    const off = document.querySelector('.off-button');
    const banner = document.querySelector('.banner')
    const skills = document.querySelector('.skills-tab')
    const about = document.querySelector('.about')
    const projects = document.querySelector('.projects')
    const form = document.querySelector('.form')
    const ending = document.querySelector('.ending')
    const Menu = document.querySelector('.mobile-menu')

    on.style.display = 'none';
    off.style.display = 'block';
    banner.style.display = 'none';
    skills.style.display = 'none';
    about.style.display = 'none';
    projects.style.display = 'none';
    form.style.display = 'none';
    ending.style.display = 'none';
    Menu.style.display = 'flex';
}

function hideMenu() {
    const on = document.querySelector('.on-button');
    const off = document.querySelector('.off-button');
    const banner = document.querySelector('.banner')
    const skills = document.querySelector('.skills-tab')
    const about = document.querySelector('.about')
    const projects = document.querySelector('.projects')
    const form = document.querySelector('.form')
    const ending = document.querySelector('.ending')
    const Menu = document.querySelector('.mobile-menu')

    on.style.display = 'flex';
    off.style.display = 'none';
    banner.style.display = 'flex';
    skills.style.display = 'flex';
    about.style.display = 'flex';
    projects.style.display = 'flex';
    form.style.display = 'flex';
    ending.style.display = 'none';
    Menu.style.display = 'none';
}

function navigateTo(event, target) {
    event.preventDefault(); // stop default jump

    hideMenu();

    document.querySelector(target).scrollIntoView({
        behavior: "smooth"
    });
}
