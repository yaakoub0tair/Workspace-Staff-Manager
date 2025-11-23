import { DOM } from './dom.js';
import { getEmployeeCardHTML, getProfileModalHTML } from './htmlTemplates.js';

export function addWorkerToList(worker) {
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = getEmployeeCardHTML(worker);
    const staffCard = tempDiv.firstElementChild;

    staffCard.addEventListener('click', (event) => {
        if (event.target.classList.contains('edit-btn')) return;
        const workerData = JSON.parse(staffCard.dataset.employee);
        showProfileModal(workerData);
    });

    DOM.listWorkers.appendChild(staffCard);
}

export function showProfileModal(worker) {
    if (!DOM.profileModal) {
        console.error("L'élément modal du profil (#profileModal) est introuvable.");
        return;
    }

    const modalContent = DOM.profileModal.querySelector('.modal-content');
    modalContent.innerHTML = getProfileModalHTML(worker);
    DOM.profileModal.classList.remove('hidden');

    const closeBtn = modalContent.querySelector('.btn-close-profile');
    if (closeBtn) {
        closeBtn.addEventListener('click', () => {
            DOM.profileModal.classList.add('hidden');
        });
    }
}