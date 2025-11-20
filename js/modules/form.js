export function initExperienceForm() {
    const btnAddExp = document.querySelector('.btn-add-experience');
    const experienceArea = document.querySelector('.experience-item');

    if (btnAddExp && experienceArea) {
        btnAddExp.addEventListener('click', () => {
            experienceArea.style.display = 'block';
            btnAddExp.style.display = 'none';
        });
    }
}