// js/modules/form.js
import { DOM } from './dom.js';
import { addWorkerToList } from './employees.js';

export function initExperienceForm() {
    if (DOM.firstExperienceItem && DOM.btnAddExperience) {
        DOM.firstExperienceItem.style.display = 'none';

        DOM.btnAddExperience.addEventListener('click', () => {
            DOM.firstExperienceItem.style.display = 'block';
            DOM.btnAddExperience.style.display = 'none';
        });
    }
}

export function initWorkerForm() {
    DOM.formWorker.addEventListener('submit', (e) => {
        e.preventDefault();

        const worker = {
            fullName: DOM.formWorker.querySelector('input[type="text"]').value,
            role: DOM.formWorker.querySelector('select').value,
            photo: DOM.formWorker.querySelector('input[type="url"]').value,
            email: DOM.formWorker.querySelector('input[type="email"]').value,
            phone: DOM.formWorker.querySelector('input[type="tel"]').value,
            experiences: []
        };

        DOM.experienceArea.querySelectorAll('.experience-item').forEach(exp => {
            const company = exp.querySelector('input[placeholder="Company name"]').value;
            const position = exp.querySelector('input[placeholder="Job title"]').value;
            const startDate = exp.querySelector('.start-date').value;
            const endDate = exp.querySelector('.end-date').value;

            if (company || position || startDate || endDate) {
                worker.experiences.push({ company, position, startDate, endDate });
            }
        });

        addWorkerToList(worker);


        DOM.formWorker.reset();
        DOM.experienceArea.querySelectorAll('.experience-item').forEach(exp => exp.style.display = 'none');
        DOM.btnAddExperience.style.display = 'block';
        DOM.popupWorker.classList.remove('active');
    });
}