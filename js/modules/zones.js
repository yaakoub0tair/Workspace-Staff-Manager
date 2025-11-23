import { DOM } from './dom.js';
import { addWorkerToList } from './employees.js';

const zoneConfig = {
    'zone-conference': { capacity: 10, required: false },
    'zone-reception': { capacity: 2, required: true },
    'zone-servers': { capacity: 4, required: true },
    'zone-security': { capacity: 6, required: true },
    'zone-staffroom': { capacity: 8, required: false },
    'zone-vault': { capacity: 2, required: true }
};

function isWorkerEligible(worker, zoneId) {
    const role = (worker.role || '').toLowerCase().trim();
    if (role === 'manager') return true;
    if (role === 'cleaning' || role === 'cleaning staff') {
        return zoneId !== 'zone-vault';
    }
    switch (zoneId) {
        case 'zone-reception':
            return role === 'receptionist';
        case 'zone-servers':
            return role === 'it';
        case 'zone-security':
            return role === 'security';
    }

    const restricted = ['zone-reception', 'zone-servers', 'zone-security'].includes(zoneId);
    if (restricted) return false;

    return true;
}

function updateZoneState(zoneElement) {
    const config = zoneConfig[zoneElement.id];
    const staffContainer = zoneElement.querySelector('.zone-staff');
    const capacityInfo = zoneElement.querySelector('.zone-info');

    const currentCount = staffContainer.children.length;
    capacityInfo.textContent = capacityInfo.textContent.replace(/(\d+)\//, `${currentCount}/`);

    if (config.required) {
        zoneElement.classList.toggle('zone-empty', currentCount === 0);
    }
}

function handleRemoveWorker(event) {
    const workerCard = event.currentTarget.closest('.employee-card');
    const zoneElement = workerCard.closest('.zone');
    const workerData = JSON.parse(workerCard.dataset.employee);

    workerCard.remove();
    addWorkerToList(workerData);
    updateZoneState(zoneElement);
}

function addWorkerToZone(workerData, zoneElement) {
    const staffContainer = zoneElement.querySelector('.zone-staff');

    const employeeCard = document.createElement('div');
    employeeCard.className = 'employee-card';
    employeeCard.dataset.employee = JSON.stringify(workerData);

    const initial = workerData.fullName.charAt(0).toUpperCase();
    const avatarHtml = workerData.photo ?
        `<div class="employee-avatar" style="background-image: url('${workerData.photo}')"></div>` :
        `<div class="employee-avatar">${initial}</div>`;

    employeeCard.innerHTML = `
        <div class="employee-info">
            ${avatarHtml}
            <div class="employee-details">
                <h4>${workerData.fullName}</h4>
                <p>${workerData.role}</p>
            </div>
        </div>
        <button class="remove-btn">×</button>
    `;

    employeeCard.querySelector('.remove-btn')
        .addEventListener('click', handleRemoveWorker);

    staffContainer.appendChild(employeeCard);
    updateZoneState(zoneElement);
}

function openWorkerSelectionModal(eligibleWorkers, zoneElement) {
    DOM.selectionTitle.textContent =
        `Add Worker to ${zoneElement.querySelector('.zone-name').textContent}`;

    DOM.selectionList.innerHTML = '';

    const noEligible = eligibleWorkers.length === 0;

    DOM.noWorkersMessage.classList.toggle('hidden', !noEligible);
    DOM.selectionList.classList.toggle('hidden', noEligible);

    if (!noEligible) {
        eligibleWorkers.forEach(workerCard => {
            const workerData = JSON.parse(workerCard.dataset.employee);

            const listItem = document.createElement('li');
            const initial = workerData.fullName.charAt(0).toUpperCase();

            const avatarHtml = workerData.photo ?
                `<div class="employee-avatar" style="background-image: url('${workerData.photo}')"></div>` :
                `<div class="employee-avatar">${initial}</div>`;

            listItem.innerHTML = `
                ${avatarHtml}
                <div>
                    <h4>${workerData.fullName}</h4>
                    <p>${workerData.role}</p>
                </div>
            `;

            listItem.addEventListener('click', () => {
                addWorkerToZone(workerData, zoneElement);
                workerCard.remove();
                DOM.selectionModal.classList.add('hidden');
            });

            DOM.selectionList.appendChild(listItem);
        });
    }

    DOM.selectionModal.classList.remove('hidden');
}

function handleAddWorker(event) {
    const zoneElement = event.currentTarget.closest('.zone');
    const config = zoneConfig[zoneElement.id];
    const currentCount = zoneElement.querySelector('.zone-staff').children.length;

    if (currentCount >= config.capacity)
        return alert(`Capacity full for this zone.`);

    const unassignedWorkers = Array.from(
        DOM.listWorkers.querySelectorAll('.staff-card')
    );

    const eligibleWorkers = unassignedWorkers.filter(card =>
        isWorkerEligible(JSON.parse(card.dataset.employee), zoneElement.id)
    );

    openWorkerSelectionModal(eligibleWorkers, zoneElement);
}

export function initializeZones() {

    DOM.zones.forEach(zone => {
        zone.querySelector('.btn-add-zone')
            .addEventListener('click', handleAddWorker);

        updateZoneState(zone);
    });

    if (DOM.selectionModal) {

        DOM.btnCloseSelection.addEventListener('click', () => {
            DOM.selectionModal.classList.add('hidden');
        });

        DOM.selectionModal.addEventListener('click', (event) => {
            if (event.target === DOM.selectionModal) {
                DOM.selectionModal.classList.add('hidden');
            }
        });
    }
}