const users = [
  { email: "user1@example.com", password: "pass123" },
  { email: "user2@example.com", password: "hello456" },
  { email: "user3@example.com", password: "welcome789" },
  { email: "user4@example.com", password: "test000" },
];

// Select elements
let email = document.querySelector(".input-email");
let password = document.querySelector(".input-password");
let loginform = document.querySelector(".login-form");
let error = document.querySelector(".error-mess");

// Form submit
loginform.addEventListener("submit", function (event) {
  event.preventDefault();

  const emailinput = email.value.trim();
  const passwordinput = password.value.trim();

  // Validation
  if (emailinput === "" || passwordinput === "") {
    showMessage("Please fill all details", "red");
    return;
  }

  // Find matching user
  const validUser = users.find((user) => {
    return user.email === emailinput && user.password === passwordinput;
  });

  // Login result
  if (validUser) {
    showMessage("User Logged In Successfully ✅", "green");

    // Reset form
    loginform.reset();
  } else {
    showMessage("Invalid Credentials ❌", "red");
  }
});

// Show message function
function showMessage(text, color) {
  error.style.display = "block";
  error.textContent = text;
  error.style.color = color;
}
