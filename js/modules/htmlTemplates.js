function getAvatarHTML(name, photo, className = 'staff-avatar') {
    const initial = name.charAt(0).toUpperCase();

    if (photo) {
        return `<div class="${className}" style="background-image: url('${photo}')"></div>`;
    }

    return `<div class="${className}">${initial}</div>`;
}

export function getEmployeeCardHTML(worker) {
    return `
        <div class="staff-card" data-employee='${JSON.stringify(worker)}' data-employee-id="${worker.id || ''}">
            <div class="staff-info">
                ${getAvatarHTML(worker.fullName, worker.photo, 'staff-avatar')}
                <div class="staff-details">
                    <h3>${worker.fullName}</h3>
                    <p>${worker.role}</p>
                </div>
            </div>
            <button class="edit-btn">Edit</button>
        </div>
    `;
}

export function getZoneEmployeeCardHTML(worker) {
    return `
        <div class="employee-card" data-employee='${JSON.stringify(worker)}'>
            <div class="employee-info">
                ${getAvatarHTML(worker.fullName, worker.photo, 'employee-avatar')}
                <div class="employee-details">
                    <h4>${worker.fullName}</h4>
                    <p>${worker.role}</p>
                </div>
            </div>
            <button class="remove-btn">×</button>
        </div>
    `;
}

function getExperiencesHTML(experiences) {
    if (!experiences || experiences.length === 0) {
        return '<p>No professional experiences listed.</p>';
    }

    const validExperiences = experiences.filter(exp => exp.company);

    if (validExperiences.length === 0) {
        return '<p>No professional experiences listed.</p>';
    }

    return validExperiences.map(exp => `
        <div class="profile-experience-item">
            <strong>${exp.position || 'N/A'}</strong> at ${exp.company}<br>
            <small>${exp.startDate || ''} - ${exp.endDate || 'Present'}</small>
        </div>
    `).join('');
}

export function getProfileModalHTML(worker) {
    return `
        <div class="profile-header">
            ${getAvatarHTML(worker.fullName, worker.photo, 'profile-avatar')}
            <div class="profile-main-info">
                <h2>${worker.fullName}</h2>
                <p>${worker.role}</p>
            </div>
            <button class="btn-close-profile">×</button>
        </div>
        <div class="profile-body">
            <h3>Contact Information</h3>
            <div class="profile-contact">
                <p><strong>Email:</strong> ${worker.email}</p>
                <p><strong>Phone:</strong> ${worker.phone}</p>
            </div>
            <h3>Professional Experiences</h3>
            <div class="profile-experiences">
                ${getExperiencesHTML(worker.experiences)}
            </div>
        </div>
    `;
}

export function getSelectionItemHTML(worker) {
    return `
        ${getAvatarHTML(worker.fullName, worker.photo, 'employee-avatar')}
        <div>
            <h4>${worker.fullName}</h4>
            <p>${worker.role}</p>
        </div>
    `;
}