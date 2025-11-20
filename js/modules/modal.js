export function initModal(openBtnSelector, modalSelector, closeBtnSelector) {
    const modal = document.querySelector(modalSelector);
    const openBtn = document.querySelector(openBtnSelector);
    const closeBtn = document.querySelector(closeBtnSelector);


    openBtn.addEventListener('click', () => {
        modal.classList.add('active');
    });


    closeBtn.addEventListener('click', () => {
        modal.classList.remove('active');
    });


    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('active');
        }
    });
    //console.log(document.querySelector('#btn-add-worker'));
    //console.log(document.querySelector('#popup-worker'));
    //console.log(document.querySelector('.btn-close'));

}