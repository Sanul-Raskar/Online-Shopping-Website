var rect = document.getElementById("rect");
var username = document.getElementById("username");
var password = document.getElementById("password");

function handle1() {
  rect.setAttribute("class", "rect2");
}

function handle2() {
  rect.setAttribute("class", "rect1");
}

function handle3() {
  rect.setAttribute("class", "rect3");
}

setTimeout(() => {
  username.focus();
}, 1500);

function loginpage_submit() {
  document.getElementById('signupcontainer').classList.remove('signup_form_right_slide');
  document.getElementById('signup_left_panel_img').classList.remove('submit_on_login_rightslide');
  document.getElementById('signup_left_panel_h3').classList.remove('submit_on_login_rightslide');
  document.getElementById('signup_left_panel_button').classList.remove('submit_on_login_rightslide');
  document.getElementById('login_img').classList.remove('cart_on_login_leftslide');
  document.getElementById('login_left_panel').classList.toggle('login_left_rightSlide');
  document.getElementById('login_right_panel').classList.toggle('login_right_leftSlide');

  setTimeout(function hideLogin() {
    var hidelogin = document.getElementById('container');
    hidelogin.style.display = "none";
  }, 1000);

  var showSignup = document.getElementById('container1');
  showSignup.style.display = "block";
  setTimeout(function() {}, 1600);
  document.getElementById("signupcontainer").className += " signup_form_left_slide";
  document.getElementById("signup_left_panel_img").className += " login_on_signup_leftslide";
  document.getElementById("signup_left_panel_h3").className += " login_on_signup_leftslide";
  document.getElementById("signup_left_panel_button").className += " login_on_signup_leftslide";
}

function submitpage_login() {

  setTimeout(function hideSubmit() {
    var hidesubmit = document.getElementById('container1');
    hidesubmit.style.display = "none";
    var hidelogin = document.getElementById('container');
    hidelogin.style.display = "block";
  }, 100);

  document.getElementById('signupcontainer').classList.remove('signup_form_left_slide');
  document.getElementById('signup_left_panel_img').classList.remove('login_on_signup_leftslide');
  document.getElementById('signup_left_panel_h3').classList.remove('login_on_signup_leftslide');
  document.getElementById('signup_left_panel_button').classList.remove('login_on_signup_leftslide');
  document.getElementById('login_right_panel').classList.remove('login_right_leftSlide');
  document.getElementById('signupcontainer').classList.add('signup_form_right_slide');
  document.getElementById('signup_left_panel_img').classList.add('submit_on_login_rightslide');
  document.getElementById('signup_left_panel_h3').classList.add('submit_on_login_rightslide');
  document.getElementById('signup_left_panel_button').classList.add('submit_on_login_rightslide');
  document.getElementById('login_left_panel').classList.remove('login_left_rightSlide');
  document.getElementById('login_img').classList.add('cart_on_login_leftslide');

}

// swal({
//   title: "Success",
//   text: "Your account has been created successfully!",
//   icon: "success",
// });

// Sign up validation
var strength = {
  0: "Worst ☹",
  1: "Bad ☹",
  2: "Weak ☹",
  3: "Good ☺",
  4: "Strong ☻"
}
var password = document.getElementById("password");
var password1 = document.getElementById("password1");
var meter = document.getElementById("password-strength-meter");
var text = document.getElementById("password-strength-text");
var email = document.getElementById("email");
var firstname = document.getElementById("firstname");
var lastname = document.getElementById("lastname");
var mobile = document.getElementById("tel");

email.addEventListener("input", function(event) {
  if (email.validity.typeMismatch) {
    email.setCustomValidity("Please enter proper Email!");
  } else if (email.validity.valueMissing) {
    email.setCustomValidity("Please enter email");
  } else {
    email.setCustomValidity("");
  }
});

firstname.addEventListener("input", function(event) {
  if (firstname.validity.valueMissing) {
    firstname.setCustomValidity("Please enter first name");
  } else {
    firstname.setCustomValidity("");
  }
});

lastname.addEventListener("input", function(event) {
  if (lastname.validity.valueMissing) {
    lastname.setCustomValidity("Please enter last name");
  } else {
    lastname.setCustomValidity("");
  }
});

mobile.addEventListener("input", function(event) {
  if (mobile.validity.valueMissing) {
    mobile.setCustomValidity("Please enter mobile number");
  } else if (mobile.validity.tooShort) {
    mobile.setCustomValidity("Invalid mobile number");
  } else {
    mobile.setCustomValidity("");
  }
});

password.addEventListener("input", function() {
  if (firstname.validity.valueMissing) {
    firstname.setCustomValidity("Please re-enter password");
  }
  var val = password.value;
  var result = zxcvbn(val);
  meter.value = result.score;
  if (val !== "") {
    text.innerHTML = "Strength: " + "<strong>" + strength[result.score] + "</strong>";
  } else {
    text.innerHTML = "";
  }
});

password.addEventListener("input", function pt(event) {
  if (password.validity.valueMissing) {
    password.setCustomValidity("Please enter password");
  }  else {
    firstname.setCustomValidity("");
  }
});


password1.addEventListener("input", function pt(event) {
  if (password1.validity.valueMissing) {
    password1.setCustomValidity("Please re-enter password");
  } else if (password.value != password1.value) {
    password1.setCustomValidity("Password do not match!");
  } else {
    password1.setCustomValidity("");
  }
});


function myvalidatefunc(){
  console.log("Submit");
}
function temp() {
  console.log("In function");
  var val = password.value;
  var result = zxcvbn(val);
  meter.value = result.score;
  if (val !== "") {
    console.log("Hello");
    text.innerHTML = "Strength: " + "<strong>" + strength[result.score] + "</strong>";
  } else {
    console.log("bye");
    text.innerHTML = "";
  }
}
function pt(event) {
  if (password.validity.valueMissing) {
    password.setCustomValidity("Please enter password");
  }  else {
    firstname.setCustomValidity("");
  }
}
