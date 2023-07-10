function showForms() {
  const loginContainer = document.querySelector(".login-container");
    const signUpCOntainer = document.querySelector(".signup-container")

  loginContainer.innerHTML = logIngTemplate();
  signUpCOntainer.innerHTML = signUpTemplate();

  changeForms();
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

showForms();