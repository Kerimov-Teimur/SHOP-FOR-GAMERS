(() => {
    const refs = {
        openModalOrderBtn: document.querySelector("[data-modal-open-order]"),
        closeModalOrderBtn: document.querySelector("[data-modal-close-order]"),
        modalOrder: document.querySelector("[data-modal-order]"),
        openModalCartBtn: document.querySelector("[data-modal-open-cart]"),
        closeModalCartBtn: document.querySelector("[data-modal-close-cart]"),
        modalCart: document.querySelector("[data-modal-cart]"),
        openModalContactsBtn: document.querySelector("[data-modal-open-contacts]"),
        closeModalContactsBtn: document.querySelector("[data-modal-close-contacts]"),
        modalContacts: document.querySelector("[data-modal-contacts]"),
    };

    refs.openModalOrderBtn.addEventListener("click", toggleModalOrder);
    refs.closeModalOrderBtn.addEventListener("click", toggleModalOrder);
    refs.openModalCartBtn.addEventListener("click", toggleModalCart);
    refs.closeModalCartBtn.addEventListener("click", toggleModalCart);
    refs.openModalContactsBtn.addEventListener("click", toggleModalContacts);
    refs.closeModalContactsBtn.addEventListener("click", toggleModalContacts);
  
    function toggleModalOrder() {
      refs.modalOrder.classList.toggle("is-hidden");
    }
    function toggleModalCart() {
      refs.modalCart.classList.toggle("is-hidden");
    }
    function toggleModalContacts() {
      refs.modalContacts.classList.toggle("is-hidden");
    }
})();
