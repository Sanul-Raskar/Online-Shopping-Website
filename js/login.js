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
