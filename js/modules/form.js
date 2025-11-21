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
    if (!DOM.formWorker) return console.error("ERREUR : Le formulaire #form-worker est introuvable.");

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
            if (company) {
                worker.experiences.push({
                    company: company,
                    position: exp.querySelector('input[placeholder="Job title"]').value,
                    startDate: exp.querySelector('.start-date').value,
                    endDate: exp.querySelector('.end-date').value
                });
            }
        });

        console.log("Données envoyées à addWorkerToList :", worker);
        addWorkerToList(worker);

        DOM.formWorker.reset();
        DOM.experienceArea.querySelectorAll('.experience-item').forEach(exp => exp.style.display = 'none');
        if (DOM.btnAddExperience) DOM.btnAddExperience.style.display = 'block';
        if (DOM.popupWorker) DOM.popupWorker.classList.remove('active');
    });
}