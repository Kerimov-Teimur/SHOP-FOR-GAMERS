(() => {
    const refs = {
        openModalOrderBtn: document.querySelector("[data-modal-open-order]"),
        closeModalOrderBtn: document.querySelector("[data-modal-close-order]"),
        modalOrder: document.querySelector("[data-modal-order]"),
        openModalCartBtn: document.querySelector("[data-modal-open-cart]"),
        closeModalCartBtn: document.querySelector("[data-modal-close-cart]"),
        modalCart: document.querySelector("[data-modal-cart]"),
    };

    refs.openModalOrderBtn.addEventListener("click", toggleModalOrder);
    refs.closeModalOrderBtn.addEventListener("click", toggleModalOrder);
    refs.openModalCartBtn.addEventListener("click", toggleModalCart);
    refs.closeModalCartBtn.addEventListener("click", toggleModalCart);
  
    function toggleModalOrder() {
      refs.modalOrder.classList.toggle("is-hidden");
    }
    function toggleModalCart() {
      refs.modalCart.classList.toggle("is-hidden");
    }
})();
