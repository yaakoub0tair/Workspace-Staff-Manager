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