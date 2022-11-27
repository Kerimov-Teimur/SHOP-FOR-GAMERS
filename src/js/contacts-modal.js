(() => {
    const refs = {
        openModalContactsBtn: document.querySelector("[data-modal-open-contacts]"),
        closeModalContactsBtn: document.querySelector("[data-modal-close-contacts]"),
        modalContacts: document.querySelector("[data-modal-contacts]"),
    };

    refs.openModalContactsBtn.addEventListener("click", toggleModalContacts);
    refs.closeModalContactsBtn.addEventListener("click", toggleModalContacts);

    function toggleModalContacts() {
      refs.modalContacts.classList.toggle("is-hidden");
    }
})();
