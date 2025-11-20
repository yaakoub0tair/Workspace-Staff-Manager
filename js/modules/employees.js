// js/modules/employees.js
import { DOM } from './dom.js';

export function addWorkerToList(worker) {
    const li = document.createElement('li');
    li.classList.add('worker-item');

    li.innerHTML = `
        <strong>${worker.fullName}</strong> - ${worker.role} <br>
        Email: ${worker.email} | Phone: ${worker.phone}
        ${worker.experiences.length ? `<ul>${worker.experiences.map(exp => `<li>${exp.position} at ${exp.company} (${exp.startDate} - ${exp.endDate})</li>`).join('')}</ul>` : ''}
    `;

    DOM.listWorkers.appendChild(li);
}