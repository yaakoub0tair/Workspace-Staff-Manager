function checkAccess(role, zone) {
    const rules = {
        reception: ["Réceptionniste", "Manager"],
        servers: ["Technicien", "Manager"],
        security: ["Agent sécurité", "Manager"],
        archives: ["Manager"],
        conference: ["Manager", "Employé", "Technicien", "Staff"],
        staff: ["Manager", "Employé", "Nettoyage", "Staff"]
    };

    if (rules[zone] && rules[zone].includes(role)) {
        return true;
    }
    return false;
}