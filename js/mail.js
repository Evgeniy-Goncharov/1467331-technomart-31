const mailButton = document.querySelector('.mail-button');

const modalMail = document.querySelector('.modal-mail');

const closeModalMail = modalMail.querySelector('.close-modal');

const mailForm = modalMail.querySelector('.modal-mail-form');
const mailUserName = modalMail.querySelector('#mail-user-name');
const mailUserEmail = modalMail.querySelector('#mail-user-email');
const userMailContent = modalMail.querySelector('#user-mail-content');

let isStorageSupport = true;
let storageUserName = "";
let storageEmail = "";

try {
  storageUserName = localStorage.getItem("username");
  storageEmail = localStorage.getItem("email");
} catch (err) {
  isStorageSupport = false;
}

mailButton.addEventListener("click", function (evt) {
    evt.preventDefault();
    modalMail.classList.remove('hidden');
    if (storageUserName && storageEmail) {
        mailUserName.value = storageUserName;
        mailUserEmail.value = storageEmail;
        userMailContent.focus();
    }
    else {
        mailUserName.focus();
    }
});

closeModalMail.addEventListener("click", function(evt) {
    evt.preventDefault();
    modalMail.classList.add('hidden');
    modalMail.classList.remove('modal-error');
});

mailForm.addEventListener("submit", function(evt) {
    if(!mailUserName.value || !mailUserEmail.value || !userMailContent.value) {
        evt.preventDefault();
        modalMail.classList.remove('modal-error');
        modalMail.offsetWidth = modalMail.offsetWidth;
        modalMail.classList.add('modal-error');
    } else {
        if (isStorageSupport) {
            localStorage.setItem("username", mailUserName.value);
            localStorage.setItem("email", mailUserEmail.value);
        }
    }
});

window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      if (!modalMail.classList.contains("hidden")) {
        evt.preventDefault();
        modalMail.classList.add("hidden");
        modalMail.classList.remove('modal-error');
      }
    }
  });