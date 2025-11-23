// modal.js
import { DOM } from './dom.js';

export function initModal() {
    if (!DOM.btnAddWorker || !DOM.popupWorker) {
        console.error("Erreur : Un ou plusieurs éléments du popup 'Add Worker' sont introuvables.");
        return;
    }


    DOM.btnAddWorker.addEventListener('click', () => {
        DOM.popupWorker.classList.add('active');
    });


    if (DOM.btnClosePopup) {
        DOM.btnClosePopup.addEventListener('click', () => {
            DOM.popupWorker.classList.remove('active');
        });
    }


    DOM.popupWorker.addEventListener('click', (event) => {
        if (event.target === DOM.popupWorker) {
            DOM.popupWorker.classList.remove('active');
        }
    });

    if (DOM.profileModal) {
        DOM.profileModal.addEventListener('click', (event) => {
            if (event.target === DOM.profileModal) {
                DOM.profileModal.classList.add('hidden');
            }
        });
    }
}