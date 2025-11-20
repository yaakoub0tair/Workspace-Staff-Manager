// js/main.js
import { initExperienceForm } from './modules/form.js';

import { initModal } from './modules/modal.js';

// Initialisation de la modal
initModal('#btn-add-worker', '#popup-worker', '.btn-close');


initExperienceForm();