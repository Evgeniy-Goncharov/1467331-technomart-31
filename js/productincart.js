const inCartButtons = document.querySelectorAll('.in-cart');
const modalInCart = document.querySelector('.modal-in-cart');
const buttonCheckout = modalInCart.querySelector('.modal-in-cart-checkout');
const buttonBuyContinue = modalInCart.querySelector('.modal-buy-continue');
const closeModal = modalInCart.querySelector('.close-modal');

for (let inCartButton of inCartButtons) {
    inCartButton.addEventListener('click', function (evt) {
        evt.preventDefault();
        modalInCart.classList.remove('hidden');
    })
};

closeModal.addEventListener('click', function (evt) {
    evt.preventDefault();
    modalInCart.classList.add('hidden');
});

window.addEventListener('keydown', function (evt) {
    if (evt.keyCode === 27) {
        if (!modalInCart.classList.contains('hidden')) {
            modalInCart.classList.add('hidden');
        }
    }
});

buttonCheckout.addEventListener('click', function (evt) {
    evt.preventDefault();
    modalInCart.classList.add('hidden');
});

buttonBuyContinue.addEventListener('click', function (evt) {
    evt.preventDefault();
    modalInCart.classList.add('hidden');
});