const mapButton = document.querySelector('.map-button');
const modalMap = document.querySelector('.modal-map');
const closeModalMap = modalMap.querySelector('.close-modal');

mapButton.addEventListener('click', function (evt) {
    evt.preventDefault();
    modalMap.classList.remove('hidden');
});

closeModalMap.addEventListener('click', function (evt) {
    evt.preventDefault();
    modalMap.classList.add('hidden');
});

window.addEventListener('keydown', function (evt) {
    if (evt.keyCode === 27) {
        if (!modalMap.classList.contains('hidden')) {
            modalMap.classList.add('hidden');
        }
    }
});