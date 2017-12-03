var modal=document.querySelectorAll(".modal");
var modal_buttons = document.querySelectorAll("[id*=modal]");

for (var i=0; i < modal.length; i++) {
  modal_buttons[i].addEventListener("click", function(evt) {
    evt.preventDefault();
    document.querySelector("." + this.id).classList.add("modal-show");
  })
  window.addEventListener("keydown", function(evt) {
    if (evt.keyCode === 27) {
      for (var j=0; j < modal.length; j++) {
        if (modal[j].classList.contains("modal-show")) {
        modal[j].classList.remove("modal-show");
        }
      }
    }
  })
  modal[i].querySelector(".modal-close").addEventListener("click", function(evt) {
    evt.preventDefault();
    if (this.parentNode.classList.contains("modal-show")) {
      this.parentNode.classList.remove("modal-show");
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
