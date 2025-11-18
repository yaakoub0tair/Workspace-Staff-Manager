function updateZones() {
    const zoneIds = ["conference", "reception", "servers", "security", "staff", "archives"];

    zoneIds.forEach(z => {
        const container = document.getElementById(z);
        container.innerHTML = "";

        employees.forEach(emp => {
            if (emp.location === z) {
                const div = document.createElement("div");
                div.classList.add("worker");
                div.innerHTML = `
                    ${emp.name}
                    <br><span class="role">${emp.role}</span>
                `;
                container.appendChild(div);
            }
        });
    });

    displayUnassigned();
}