import { showProfileModal } from '../main.js';

export function addWorkerToList(worker) {
    const staffListContainer = document.getElementById('list-workers');
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

    staffListContainer.appendChild(staffCard);
}