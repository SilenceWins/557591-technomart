var modal_feedback=document.querySelector(".modal-feedback");
var modal=document.querySelectorAll(".modal");
var close=modal[].querySelector(".modal-close");
var feedback_btn=document.querySelector(".btn-feedback");

feedback_btn.addEventListener("click", function(evt) {
  evt.preventDefault();
  if (!modal_feedback.classList.contains("modal-show")) {
    modal_feedback.classList.add("modal-show");
  }
})

modal_feedback.addEventListener("keydown", function(evt) {
  if (evt.keyCode === 27) {
    if (modal_feedback.classList.contains("modal-show")) {
      modal_feedback.classList.remove("modal-show");
    }
  }
})

close.addEventListener("click", function(evt) {
  evt.preventDefault();
  if (modal_feedback.classList.contains("modal-show")) {
    modal_feedback.classList.remove("modal-show");
  }
})
