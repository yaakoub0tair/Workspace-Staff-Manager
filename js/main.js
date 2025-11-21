import { initWorkerForm, initExperienceForm } from './modules/form.js';
import { initializeZones } from './modules/zones.js';

export function showProfileModal(worker) {
    const modal = document.getElementById('profileModal');
    if (!modal) return console.error("L'élément modal du profil (#profileModal) est introuvable.");

    const modalContent = modal.querySelector('.modal-content');
    let experiencesHtml = '<p>No professional experiences listed.</p>';

    if (worker.experiences && worker.experiences.length > 0 && worker.experiences.some(exp => exp.company)) {
        experiencesHtml = worker.experiences.filter(exp => exp.company).map(exp =>
            `<div class="profile-experience-item"><strong>${exp.position||'N/A'}</strong> at ${exp.company}<br><small>${exp.startDate||''} - ${exp.endDate||'Present'}</small></div>`
        ).join('');
    }

    const initial = worker.fullName.charAt(0).toUpperCase();
    const profileAvatarHtml = worker.photo ?
        `<div class="profile-avatar" style="background-image: url('${worker.photo}')"></div>` :
        `<div class="profile-avatar">${initial}</div>`;

    modalContent.innerHTML = `<div class="profile-header">${profileAvatarHtml}<div class="profile-main-info"><h2>${worker.fullName}</h2><p>${worker.role}</p></div><button class="btn-close-profile">×</button></div><div class="profile-body"><h3>Contact Information</h3><div class="profile-contact"><p><strong>Email:</strong> ${worker.email}</p><p><strong>Phone:</strong> ${worker.phone}</p></div><h3>Professional Experiences</h3><div class="profile-experiences">${experiencesHtml}</div></div>`;

    modal.classList.remove('hidden');
    const closeBtn = modal.querySelector('.btn-close-profile');
    if (closeBtn) {
        closeBtn.addEventListener('click', () => modal.classList.add('hidden'));
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const btnAddWorker = document.getElementById('btn-add-worker');
    const popupWorker = document.getElementById('popup-worker');
    const profileModal = document.getElementById('profileModal');

    if (btnAddWorker && popupWorker) {
        const btnClosePopup = popupWorker.querySelector('.btn-close');
        btnAddWorker.addEventListener('click', () => popupWorker.classList.add('active'));
        if (btnClosePopup) {
            btnClosePopup.addEventListener('click', () => popupWorker.classList.remove('active'));
        }
        popupWorker.addEventListener('click', (event) => {
            if (event.target === popupWorker) popupWorker.classList.remove('active');
        });
    } else {
        console.error("Erreur : Un ou plusieurs éléments du popup 'Add Worker' sont introuvables.");
    }

    if (profileModal) {
        profileModal.addEventListener('click', (event) => {
            if (event.target === profileModal) profileModal.classList.add('hidden');
        });
    }

    initWorkerForm();
    initExperienceForm();
    initializeZones();
});