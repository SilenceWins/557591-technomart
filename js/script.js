var modal=document.querySelectorAll(".modal");
var modal_buttons = document.querySelectorAll("[data-modal]");

for (var k=0; k < modal_buttons.length; k++)
  modal_buttons[k].addEventListener("click", function(evt) {
    evt.preventDefault();
    document.querySelector("." + this.dataset.modal).classList.add("modal-show");
    if (document.querySelector("." + this.dataset.modal).classList.contains("modal-feedback")) {
      document.querySelector("[id=feedback-name]").focus();
      document.querySelector(".feedback").addEventListener("submit", function(evt) {
        if (!document.querySelector("[id=feedback-name]").value || !document.querySelector("[id=feedback-email]").value || !document.querySelector("[id=feedback-textarea]").value) {
          evt.preventDefault();
          document.querySelector(".modal-feedback").classList.remove("modal-error");
          document.querySelector(".modal-feedback").offsetWidth = document.querySelector(".modal-feedback").offsetWidth;
          document.querySelector(".modal-feedback").classList.add("modal-error");
        }
      })
    }
})

for (var i=0; i < modal.length; i++) {
  window.addEventListener("keydown", function(evt) {
    if (evt.keyCode === 27) {
      for (var j=0; j < modal.length; j++) {
        if (modal[j].classList.contains("modal-show")) {
        modal[j].classList.remove("modal-show");
        modal[j].classList.remove("modal-error");
        }
      }
    }
  })
  modal[i].querySelector(".modal-close").addEventListener("click", function(evt) {
    evt.preventDefault();
    if (this.parentNode.classList.contains("modal-show")) {
      this.parentNode.classList.remove("modal-show");
      this.parentNode.classList.remove("modal-error");
    }
  })
  if (document.querySelector(".btn.return")) {
    document.querySelector(".btn.return").addEventListener("click", function (evt) {
      evt.preventDefault();
      if (document.querySelector(".modal-cart").classList.contains("modal-show")) {
        document.querySelector(".modal-cart").classList.remove("modal-show");
      }
    })
  }
}
