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

// Sign up validation
var strength = {
  0: "Worst ☹",
  1: "Bad ☹",
  2: "Weak ☹",
  3: "Good ☺",
  4: "Strong ☻"
}
var password1 = document.getElementById("password1");
var password2 = document.getElementById("password2");
var meter = document.getElementById("password-strength-meter");
var text = document.getElementById("password-strength-text");
var email = document.getElementById("email");
var firstname = document.getElementById("firstname");
var lastname = document.getElementById("lastname");
var mobile = document.getElementById("tel");

email.addEventListener("input", function(event) {

  var exp = /^([0-9a-zA-Z]([-.\w]*[0-9,a-zA-Z])*@([0-9a-zA-Z][-\w]*[0-9a-zA-Z]\.)+[a-zA-Z]{2,9})$/;
  if (email.validity.typeMismatch) {
    email.setCustomValidity("Please enter proper Email!");
  } else if (email.validity.valueMissing) {
    email.setCustomValidity("Please enter email");
  } else {
    email.setCustomValidity("");
  }

  if (email.value.match(exp)) {
    return true;
  } else {
    email.setCustomValidity("Enter valid email");
    return false;
  }
});

firstname.addEventListener("input", function(event) {
  var exp = /^[a-zA-Z]+$/;

  if (firstname.validity.valueMissing) {
    firstname.setCustomValidity("Please enter first name");
  } else {
    firstname.setCustomValidity("");
  }

  if (firstname.value.match(exp)) {
    return true;
  } else {
    firstname.setCustomValidity("Alphabets only!");
    return false;
  }

});

lastname.addEventListener("input", function(event) {
    var exp = /^[a-zA-Z]+$/;
  if (lastname.validity.valueMissing) {
    lastname.setCustomValidity("Please enter last name");
  } else {
    lastname.setCustomValidity("");
  }
  if (lastname.value.match(exp)) {
    return true;
  } else {
    lastname.setCustomValidity("Alphabets only!");
    return false;
  }
});

mobile.addEventListener("input", function(event) {
    var exp = /^[0-9]+$/;
  if (mobile.validity.valueMissing) {
    mobile.setCustomValidity("Please enter mobile number");
  } else if (mobile.validity.tooShort) {
    mobile.setCustomValidity("Invalid mobile number");
  } else {
    mobile.setCustomValidity("");
  }
  if (mobile.value.match(exp)) {
    return true;
  } else {
    mobile.setCustomValidity("Numbers only!");
    return false;
  }
});


password1.addEventListener("input", function() {
  if (password1.validity.valueMissing) {
    password1.setCustomValidity("Please Enter password");
  } else {
    password1.setCustomValidity("");
  }
  var val = password1.value;
  var result = zxcvbn(val);
  meter.value = result.score;
  if (val !== "") {
    text.innerHTML = "Strength: " + "<strong>" + strength[result.score] + "</strong>";
  } else {
    text.innerHTML = "";
  }
});

password2.addEventListener("input", function(event) {
  if (password2.validity.valueMissing) {
    password2.setCustomValidity("Please re-enter password");
  } else if (password1.value == password2.value) {
    password2.setCustomValidity("");
  } else {
    password2.setCustomValidity("Password do not match!");
  }
});

function signupSuccess() {
  swal({
    title: "Account Created Successfully!",
    text: "Yay! You are now part of our family.",
    icon: "success",
  });
}
