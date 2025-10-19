const signupForm = document.getElementById("signup-form");
const loginForm = document.getElementById("login-form");
const toLogin = document.getElementById("to-login");
const toSignup = document.getElementById("to-signup");
const formTitle = document.getElementById("form-title");

toLogin.addEventListener("click", (e) => {
  e.preventDefault();
  signupForm.classList.remove("active");
  loginForm.classList.add("active");
  formTitle.textContent = "Welcome Back";
});

toSignup.addEventListener("click", (e) => {
  e.preventDefault();
  loginForm.classList.remove("active");
  signupForm.classList.add("active");
  formTitle.textContent = "Get Started Now";
});
