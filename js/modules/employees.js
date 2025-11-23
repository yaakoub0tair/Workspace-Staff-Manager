import { DOM } from './dom.js';

export function addWorkerToList(worker) {
    const staffCard = document.createElement('div');
    staffCard.className = 'staff-card';
    staffCard.dataset.employee = JSON.stringify(worker);

    const initial = worker.fullName.charAt(0).toUpperCase();
    const avatarHtml = worker.photo ?
        `<div class="staff-avatar" style="background-image: url('${worker.photo}')"></div>` :
        `<div class="staff-avatar">${initial}</div>`;

    staffCard.innerHTML = `<div class="staff-info">${avatarHtml}<div class="staff-details"><h3>${worker.fullName}</h3><p>${worker.role}</p></div></div><button class="edit-btn">Edit</button>`;

    staffCard.addEventListener('click', (event) => {
        if (event.target.classList.contains('edit-btn')) return;
        const workerData = JSON.parse(staffCard.dataset.employee);
        showProfileModal(workerData);
    });

    DOM.listWorkers.appendChild(staffCard);

}
export function showProfileModal(worker) {
    if (!DOM.profileModal) return console.error("L'élément modal du profil (#profileModal) est introuvable.");

    const modalContent = DOM.profileModal.querySelector('.modal-content');
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

    modalContent.innerHTML = `<div class="profile-header">${profileAvatarHtml}<div class="profile-main-info"><h2>${worker.fullName}</h2>
    <p>${worker.role}</p></div><button class="btn-close-profile">×</button>
    </div><div class="profile-body"><h3>Contact Information</h3>
    <div class="profile-contact"><p><strong>Email:</strong> ${worker.email}</p><p><strong>Phone:</strong> ${worker.phone}</p></div>
    <h3>Professional Experiences</h3><div class="profile-experiences">${experiencesHtml}</div></div>`;

    DOM.profileModal.classList.remove('hidden');
    const closeBtn = DOM.profileModal.querySelector('.btn-close-profile');
    if (closeBtn) {
        closeBtn.addEventListener('click', () => DOM.profileModal.classList.add('hidden'));
    }
}