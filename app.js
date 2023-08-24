const sign_up_form = document.getElementById("sign-up-form");
const password_field = document.getElementById("password");
const confirm_password_field = document.getElementById("confirm-password");
const password_validation_message = document.getElementById(
  "password-validation-message"
);

sign_up_form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (password_field.value !== confirm_password_field.value)
    password_validation_message.classList.add("show");
  else {
    password_validation_message.classList.remove("show");
    console.log(e.target);
    document.location.reload();
  }
});
