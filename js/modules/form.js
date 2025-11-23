import { DOM } from './dom.js';
import { addWorkerToList } from './employees.js';
import { validateFullName, validateEmail, validatePhone, validateURL } from './validation.js';


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
        const fullName = DOM.workerName.value.trim();
        const email = DOM.workerEmail.value.trim();
        const phone = DOM.workerPhone.value.trim();
        const photo = DOM.workerPhoto.value.trim();
        const role = DOM.workerRole.value.trim();


        if (!validateFullName(fullName)) return alert('Invalid full name.');
        if (!validateEmail(email)) return alert('Invalid email.');
        if (!validatePhone(phone)) return alert('Invalid phone number.');
        if (photo && !validateURL(photo)) return alert('Invalid photo URL.');


        const worker = {
            fullName,
            role,
            photo,
            email,
            phone,
            experiences: []
        };


        DOM.experienceArea.querySelectorAll('.experience-item').forEach(exp => {
            const companyInput = exp.querySelector('#company');
            const positionInput = exp.querySelector('#position');

            if (companyInput && companyInput.value) {
                worker.experiences.push({
                    company: companyInput.value,
                    position: positionInput ? positionInput.value : '',
                    startDate: exp.querySelector('.start-date').value,
                    endDate: exp.querySelector('.end-date').value
                });
            }
        });

        console.log("Données envoyées à addWorkerToList :", worker);
        addWorkerToList(worker);


        DOM.formWorker.reset();
        DOM.experienceArea.querySelectorAll('.experience-item')
            .forEach(exp => exp.style.display = 'none');

        if (DOM.btnAddExperience) DOM.btnAddExperience.style.display = 'block';
        if (DOM.popupWorker) DOM.popupWorker.classList.remove('active');
    });
}