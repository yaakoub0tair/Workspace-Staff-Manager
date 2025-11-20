import { DOM } from './dom.js';

export function initModal() {

    DOM.btnAddWorker.addEventListener('click', () => {
        DOM.popupWorker.classList.add('active');
    });


    DOM.btnClosePopup.addEventListener('click', () => {
        DOM.popupWorker.classList.remove('active');
    });


    DOM.popupWorker.addEventListener('click', (e) => {
        if (e.target === DOM.popupWorker) {
            DOM.popupWorker.classList.remove('active');
        }
    });
}