function showMenu() {
    const on = document.querySelector('.on-button');
    const off = document.querySelector('.off-menu');
    const Profile = document.querySelector('.profile-mobile')
    const Menu = document.querySelector('.mobile-menu')

    on.style.display = 'none';
    off.style.display = 'flex';
    Profile.style.display = 'none';
    Menu.style.display = 'flex';
}

function hideMenu() {
    const on = document.querySelector('.on-button');
    const off = document.querySelector('.off-menu');
    const Profile = document.querySelector('.profile-mobile')
    const Menu = document.querySelector('.mobile-menu')

    on.style.display = 'flex';
    off.style.display = 'none';
    Profile.style.display = 'flex';
    Menu.style.display = 'none';
}