export const DOM = {

    // Popups
    popupWorker: document.getElementById('popup-worker'),
    profileModal: document.getElementById('profileModal'),
    btnClosePopup: document.querySelector('#popup-worker .btn-close'),

    // Worker Form
    formWorker: document.getElementById('form-worker'),
    workerName: document.getElementById('workerName'),
    workerRole: document.getElementById('workerRole'),
    workerPhoto: document.getElementById('workerPhoto'),
    workerEmail: document.getElementById('workerEmail'),
    workerPhone: document.getElementById('workerPhone'),

    // Experience
    btnAddExperience: document.getElementById('btnAddExperience'),
    experienceArea: document.getElementById('experienceArea'),
    firstExperienceItem: document.getElementById('firstExperienceItem'),

    // Workers List
    btnAddWorker: document.getElementById('btn-add-worker'),
    listWorkers: document.getElementById('list-workers'),
    searchInput: document.getElementById('searchInput'),
    filterButtons: document.querySelectorAll('.filter-btn'),

    // Zones
    zones: document.querySelectorAll('.zone'),
    btnAddZone: document.querySelectorAll('.btn-add-zone'),

    // Selection Modal
    selectionModal: document.getElementById('worker-selection-modal'),
    selectionList: document.getElementById('worker-selection-list'),
    selectionTitle: document.getElementById('selection-modal-title'),
    noWorkersMessage: document.getElementById('no-workers-message'),
    btnCloseSelection: document.querySelector('#worker-selection-modal .btn-close-selection'),

};