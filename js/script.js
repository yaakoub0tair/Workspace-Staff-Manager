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