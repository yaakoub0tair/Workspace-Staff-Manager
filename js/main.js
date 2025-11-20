// js/main.js
import { initModal } from './modules/modal.js';
import { initExperienceForm, initWorkerForm } from './modules/form.js';

document.addEventListener('DOMContentLoaded', () => {
    initModal();
    initExperienceForm();
    initWorkerForm();
});