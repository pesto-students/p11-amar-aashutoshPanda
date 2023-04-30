function showAlert(alertId) {
  const bootstrapAlert = document.getElementById("#" + alertId);
  const alert = new bootstrap.Collapse(bootstrapAlert);
  //   alert.collapse("show");
  alert.show();
}

const modalYesBtn = document.querySelector("#contact-modal .btn-primary");
modalYesBtn.addEventListener("click", function () {
  console.log("called");
  const sendBtn = document.querySelector("#send-message-btn");
  sendBtn.style.display = "none";
  showAlert("conf-alert");
});
