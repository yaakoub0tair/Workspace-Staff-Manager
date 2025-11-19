const addWorkerBtn = document.getElementById('add-worker-btn');
const modal = document.getElementById('worker-modal');
const closeModal = document.querySelector('.modal .close');

addWorkerBtn.addEventListener('click', () => {
    modal.classList.remove('hidden');
});

closeModal.addEventListener('click', () => {
    modal.classList.add('hidden');
});

window.addEventListener('click', (e) => {
    if (e.target === modal) modal.classList.add('hidden');
});

// Users storage
let employees = [];

// Form submit
const workerForm = document.getElementById('worker-form');
const unassignedList = document.getElementById('unassigned-list');

workerForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = new FormData(workerForm);

    const worker = {
        id: Date.now(),
        name: formData.get('name'),
        role: formData.get('role'),
        photo: formData.get('photo') || 'default.jpg',
        email: formData.get('email'),
        phone: formData.get('phone'),
        experiences: [],
        location: 'unassigned'
    };

    employees.push(worker);
    displayUnassigned();

    modal.classList.add('hidden');
    workerForm.reset();
});

function displayUnassigned() {
    unassignedList.innerHTML = "";

    employees.forEach(emp => {
        if (emp.location === "unassigned") {
            const li = document.createElement("li");
            li.classList.add("worker");
            li.innerHTML = `
                ${emp.name} <br>
                <span class="role">${emp.role}</span>
                <button class="assign-btn" data-id="${emp.id}">+</button>
            `;
            unassignedList.appendChild(li);
        }
    });

    attachAssignButtons();
}

function attachAssignButtons() {
    const buttons = document.querySelectorAll('.assign-btn');

    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            const id = btn.getAttribute('data-id');

            // فتح قائمة اختيار Zone
            const zone = prompt("Enter zone ID (conference, reception, servers, security, staff, archives):");

            assignToZone(id, zone);
        });
    });
}

function assignToZone(id, zoneId) {
    const emp = employees.find(e => e.id == id);

    if (!emp) return;

    // Zone restrictions
    if (!checkAccess(emp.role, zoneId)) {
        alert("Ce rôle n'a pas accès à cette zone !");
        return;
    }

    // Max capacity per zone
    const zoneElement = document.getElementById(zoneId);
    if (zoneElement.children.length >= 4) {
        alert("Zone pleine !");
        return;
    }

    emp.location = zoneId;
    updateZones();
}