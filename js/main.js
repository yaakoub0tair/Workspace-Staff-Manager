import { initWorkerForm, initExperienceForm } from './modules/form.js';
import { initializeZones } from './modules/zones.js';
import { initModal } from './modules/modal.js';

document.addEventListener('DOMContentLoaded', () => {

    initModal();


    initWorkerForm();
    initExperienceForm();


    initializeZones();
});