//PAGE TRANSITIONS

document.addEventListener('DOMContentLoaded', function(event) {
    document.querySelector('body').style.opacity = 1
})

//HIDE

function showWorkTab() {
    const workTab = document.querySelector('.work-tab');
    workTab.style.display = 'block';
}

function hideWorkTab() {
    const workTab = document.querySelector('.work-tab');
    workTab.style.display = 'none';
}



function showResumeTab() {
    const workTab = document.querySelector('.resume-tab');
    workTab.style.display = 'block';
}

function hideResumeTab() {
    const workTab = document.querySelector('.resume-tab');
    workTab.style.display = 'none';
}



function showLinksTab() {
    const workTab = document.querySelector('.links-tab');
    workTab.style.display = 'block';
}

function hideLinksTab() {
    const workTab = document.querySelector('.links-tab');
    workTab.style.display = 'none';
}



function showSkillsTab() {
    const workTab = document.querySelector('.skills-tab');
    workTab.style.display = 'block';
}

function hideSkillsTab() {
    const workTab = document.querySelector('.skills-tab');
    workTab.style.display = 'none';
}



function showEmailTab() {
    const workTab = document.querySelector('.email-tab');
    workTab.style.display = 'block';
}

function hideEmailTab() {
    const workTab = document.querySelector('.email-tab');
    workTab.style.display = 'none';
}



function showProjectsTab() {
    const workTab = document.querySelector('.projects-tab');
    workTab.style.display = 'block';
}

function hideProjectsTab() {
    const workTab = document.querySelector('.projects-tab');
    workTab.style.display = 'none';
}


function showBehanceTab() {
    const workTab = document.querySelector('.behance-tab');
    workTab.style.display = 'block';
}

function hideBehanceTab() {
    const workTab = document.querySelector('.behance-tab');
    workTab.style.display = 'none';
}



function showYoutube() {
    const workTab = document.querySelector('.youtube-tab');
    workTab.style.display = 'block';
}

function hideYoutube() {
    const workTab = document.querySelector('.youtube-tab');
    workTab.style.display = 'none';
}



function showNote() {
    const workTab = document.querySelector('.note-tab');
    workTab.style.display = 'block';
}

function hideNote() {
    const workTab = document.querySelector('.note-tab');
    workTab.style.display = 'none';
}



function showThreeD() {
    const workTab = document.querySelector('.threed-tab');
    workTab.style.display = 'block';
}

function hideThreeD() {
    const workTab = document.querySelector('.threed-tab');
    workTab.style.display = 'none';
}



function showNote2() {
    const workTab = document.querySelector('.note-tab2');
    workTab.style.display = 'block';
}

function hideNote2() {
    const workTab = document.querySelector('.note-tab2');
    workTab.style.display = 'none';
}


function showForum() {
    const workTab = document.querySelector('.forum-tab');
    workTab.style.display = 'block';
}

function hideForum() {
    const workTab = document.querySelector('.forum-tab');
    workTab.style.display = 'none';
}



function showNote5() {
    const workTab = document.querySelector('.note-tab5');
    workTab.style.display = 'block';
}

function hideNote5() {
    const workTab = document.querySelector('.note-tab5');
    workTab.style.display = 'none';
}




function showJR() {
    const workTab = document.querySelector('.jr-tab');
    workTab.style.display = 'block';
}

function hideJR() {
    const workTab = document.querySelector('.jr-tab');
    workTab.style.display = 'none';
}



function showNote3() {
    const workTab = document.querySelector('.note-tab3');
    workTab.style.display = 'block';
}

function hideNote3() {
    const workTab = document.querySelector('.note-tab3');
    workTab.style.display = 'none';
}



function showGames() {
    const workTab = document.querySelector('.games-tab');
    workTab.style.display = 'block';
}

function hideGames() {
    const workTab = document.querySelector('.games-tab');
    workTab.style.display = 'none';
}



function showNote4() {
    const workTab = document.querySelector('.note-tab4');
    workTab.style.display = 'block';
}

function hideNote4() {
    const workTab = document.querySelector('.note-tab4');
    workTab.style.display = 'none';
}

//FORMS

function checkForm1() {
    let form = document.getElementById("contactForm1");
    if (form.checkValidity()) {
        const workTab = document.querySelector('.confirmation1');
        workTab.style.display = 'block';
    } else {
        alert("⚠️ Por favor, preencha todos os campos antes de enviar.");
    }
}

function hideConfirmation1() {
    const workTab = document.querySelector('.confirmation1');
    workTab.style.display = 'none';
}

function checkForm2() {
    let form = document.getElementById("contactForm2");
    if (form.checkValidity()) {
        const workTab = document.querySelector('.confirmation2');
        workTab.style.display = 'block';
    } else {
        alert("⚠️ Por favor, preencha todos os campos antes de enviar.");
    }
}

function hideConfirmation2() {
    const workTab = document.querySelector('.confirmation2');
    workTab.style.display = 'none';
}

//LANGUAGE

function changePT() {
    const formPt = document.querySelector('.contact-form1');
    formPt.style.display = 'flex';
    const ptElements = document.querySelectorAll('.pt');
    ptElements.forEach(el => {
        el.style.display = 'block';
    });
}

function hideENG() {
    const formEng = document.querySelector('.contact-form2');
    formEng.style.display = 'none';
    const engElements = document.querySelectorAll('.eng');
    engElements.forEach(el => {
        el.style.display = 'none';
    });
}

function changeENG() {
    const formPt = document.querySelector('.contact-form2');
    formPt.style.display = 'flex';
    const engElements = document.querySelectorAll('.eng');
    engElements.forEach(el => {
        el.style.display = 'block';
    });
}

function hidePT() {
    const formPt = document.querySelector('.contact-form1');
    formPt.style.display = 'none';
    const ptElements = document.querySelectorAll('.pt');
    ptElements.forEach(el => {
        el.style.display = 'none';
    });
}
