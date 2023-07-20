function showForms() {
  const loginContainer = document.querySelector(".login-container");
  const signUpContainer = document.querySelector(".signup-container");

  loginContainer.innerHTML = logIngTemplate();
  signUpContainer.innerHTML = signUpTemplate();

  changeForms();

  // const signUpForm = document.querySelector(".signup-form");
  // signUpForm.addEventListener("submit", handleSignUpSubmit);

  const logIngForm = document.querySelector(".login-form");
  logIngForm.addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission for now

    // Add the desired URL for redirection
    const redirectUrl = "/src/tasknow-app/index.html";
    
    // Redirect to the specified URL
    window.location.href = redirectUrl;
  });

}

function logIngTemplate() {
  return `<form class="login-form">
            <h1>Login</h1>
            <label for="email">Email</label>
            <input type="email" name="email" id="email" required class="input">

            <label for="password">Password</label>
            <input type="password" name="password" id="password" required class="input">

            <input type="submit" name="submit" value="SIGN IN" class="submit-button" id="signIn">
            <p>Don't have an account? <span id="signUpButton">Sign Up</span></p>
         </form>`;
}

function signUpTemplate() {
  return `<form class="login-form">
            <h1>Sign Up</h1>
            <label for="name">First Name</label>
            <input type="text" name="name" id="name" required class="input">

            <label for="lastName">Last Name</label>
            <input type="text" name="lastName" id="lastName" required class="input">

            <label for="email">Email</label>
            <input type="email" name="email" id="signUpEmail" required class="input">

            <label for="password">Password</label>
            <input type="password" name="password" id="SignUppassword" required class="input">

            <input type="submit" name="submit" value="SIGN UP" class="submit-button" id="logIn">
            <p>Do you have an account? <span id="signInButton">Sign In</span></p>
         </form>`;
}



// function logIngTemplate() {
//   return `<form class="login-form">
//             <h1>Login</h1>
//             <label for="email">Email</label>
//             <input type="email" name="email" id="email" required class="input">

//             <label for="password">Password</label>
//             <input type="password" name="password" id="password" required class="input">
            
//             <a class="submit-button" id="signIn" href="/src/tasknow-app/index.html">SIGN IN</a>
//             <p>Don't have an account? <span id="signUpButton">Sign Up</span></p>
//          </form>`;
// }

// function signUpTemplate() {
//   return `<form class="login-form">
//             <h1>Sign Up</h1>
//             <label for="name">First Name</label>
//             <input type="text" name="name" id="name" required class="input">

//             <label for="lastName">Last Name</label>
//             <input type="text" name="lastName" id="lastName" required class="input">

//             <label for="email">Email</label>
//             <input type="email" name="email" id="signUpEmail" required class="input">

//             <label for="password">Password</label>
//             <input type="password" name="password" id="SignUppassword" required class="input">
            
//             <a class="submit-button" id="logIn href="/src/tasknow-app/index.html">SIGN UP</a>
//             <p>Do you have an account? <span id="signInButton">Sign In</span></p>
//          </form>`;
// }

function changeForms() {
    const signUpButton = document.querySelector("#signUpButton");
    const signInButton = document.querySelector("#signInButton");

    const loginContainer = document.querySelector(".login-container");
    const signUpCOntainer = document.querySelector(".signup-container");

    signUpButton.addEventListener("click", function() {
        signUpCOntainer.classList.add("fade-in-out")

        loginContainer.style.display = "none";
        signUpCOntainer.style.display = "block";
    });

    signInButton.addEventListener("click", function() {
        loginContainer.classList.add("fade-in-out")

        loginContainer.style.display = "block";
        signUpCOntainer.style.display = "none";
    });
}

function isValidPassword(password) {
  // Expresión regular para verificar contraseña (al menos 6 caracteres, números, letras y caracteres especiales)
  const passwordRegex = /^(?=.*\d)(?=.*[a-zA-Z])(?=.*[\W_]).{6,}$/;
  return passwordRegex.test(password);
}

function handleSignUpSubmit(event) {
  event.preventDefault();

  const firstName = document.getElementById("name").value;
  const lastName = document.getElementById("lastName").value;
  const email = document.getElementById("signUpEmail").value;
  const password = document.getElementById("signUpPassword").value;

  // Verify password before submitting the form
  if (!isValidPassword(password)) {
    const passwordError = document.getElementById("passwordError");
    passwordError.style.display = "block";
    return; // Stop form submission if the password does not meet the requirements
  }

  // Instead of submitting the form, show a successful registration message
  showRegistrationSuccess();
}

function showRegistrationSuccess() {
  const signUpForm = document.querySelector(".signup-form");

  // const loginContainer = document.querySelector(".login-container");
      const successMessage = document.createElement("p");
      successMessage.textContent = "User has been registered successfully!";
      successMessage.style.color = "green";
      successMessage.style.backgroundColor = "blue";

      signUpForm.appendChild(successMessage);

      setTimeout(function() {
        successMessage.style.display = "none";
        signUpForm.style.display = "block";
      }, 5000);

      signUpForm.style.display = "none";
}

showForms();