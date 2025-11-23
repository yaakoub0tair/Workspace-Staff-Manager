import { DOM } from './dom.js';
import { addWorkerToList } from './employees.js';
import { validateFullName, validateEmail, validatePhone, validateURL, validateExperienceDates } from './validation.js';
import { getExperienceItemHTML } from './htmlTemplates.js';

export function initExperienceForm() {
    let experienceCount = 0;

    if (!DOM.btnAddExperience) return;

    DOM.btnAddExperience.addEventListener('click', function() {
        experienceCount++;

        const tempDiv = document.createElement('div');
        tempDiv.innerHTML = getExperienceItemHTML(experienceCount);
        const newExperience = tempDiv.firstElementChild;

        DOM.btnAddExperience.parentElement.insertBefore(newExperience, DOM.btnAddExperience);

        const removeBtn = newExperience.querySelector('.remove-experience-btn');
        removeBtn.addEventListener('click', function() {
            newExperience.remove();
        });
    });
}

export function initWorkerForm() {
    if (!DOM.formWorker) return console.error("ERREUR : Le formulaire #form-worker est introuvable.");

    DOM.formWorker.addEventListener('submit', function(e) {
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
            fullName: fullName,
            role: role,
            photo: photo,
            email: email,
            phone: phone,
            experiences: []
        };

        const experienceItems = DOM.experienceArea.querySelectorAll('.experience-item');

        experienceItems.forEach(function(expItem) {
            const companyInput = expItem.querySelector('.exp-company');
            const positionInput = expItem.querySelector('.exp-position');
            const startDateInput = expItem.querySelector('.exp-start-date');
            const endDateInput = expItem.querySelector('.exp-end-date');

            const company = companyInput && companyInput.value.trim();
            const position = positionInput && positionInput.value.trim();
            const startDate = startDateInput && startDateInput.value;
            const endDate = endDateInput && endDateInput.value;

            if (startDate && endDate && !validateExperienceDates(startDate, endDate)) {
                alert('Experience at ' + (company || 'company') + ': Start date must be before end date!');
                throw new Error('Invalid dates');
            }

            if (company) {
                worker.experiences.push({
                    company: company,
                    position: position || '',
                    startDate: startDate || '',
                    endDate: endDate || ''
                });
            }
        });

        console.log("Données envoyées à addWorkerToList :", worker);
        addWorkerToList(worker);

        DOM.formWorker.reset();
        experienceItems.forEach(function(exp) {
            exp.remove();
        });

        if (DOM.popupWorker) DOM.popupWorker.classList.remove('active');
    });
}