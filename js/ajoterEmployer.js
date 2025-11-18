function attachAssignButtons() {
    const buttons = document.querySelectorAll('.assign-btn');

    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            const id = btn.getAttribute('data-id');


            const zone = prompt("Enter zone ID (conference, reception, servers, security, staff, archives):");

            assignToZone(id, zone);
        });
    });
}

function assignToZone(id, zoneId) {
    const emp = employees.find(e => e.id == id);

    if (!emp) return;


    if (!checkAccess(emp.role, zoneId)) {
        alert("Ce rôle n'a pas accès à cette zone !");
        return;
    }


    const zoneElement = document.getElementById(zoneId);
    if (zoneElement.children.length >= 4) {
        alert("Zone pleine !");
        return;
    }

    emp.location = zoneId;
    updateZones();
}