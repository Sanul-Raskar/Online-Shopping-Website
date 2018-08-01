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


// $("#signupformv").validate({
//   invalidHandler: function(event, validator) {
//     // 'this' refers to the form
//     var errors = validator.numberOfInvalids();
//     if (errors) {
//       var message = errors == 1
//         ? 'You missed 1 field. It has been highlighted'
//         : 'You missed ' + errors + ' fields. They have been highlighted';
//       $("div #displayformstatus p").html(message);
//       $("div #displayformstatus p").show();
//     } else {
//       $("div #displayformstatus p").hide();
//     }
//   }
// });

function myvalidatefunc() {
  var validatename = document.getElementById("name");
  var validateemail = document.getElementById("email");
  var validateusername = document.getElementById("username");
  var validatepassword = document.getElementById("password");
  var validatemobile = document.getElementById("tel");

  console.log("Connected");

  if (validatename.value.length == 0 || validateemail.value.length == 0 || validateusername.value.lenght == 0 || validatepassword.value.lenght == 0 || validatemobile.value.lenght == 0) {
    console.log("name error");
    document.getElementById('statusmsg').innerText = "* All fields are mandatory";
    validatename.focus();
    document.getElementById("showNameError").innerText="Please enetr name";
  }

  if (validatemobile.value.length < 10) {
    document.getElementById("displayformstatus").style.display="block";
    console.log("Invalid mobile number");
    document.getElementById("statusmsg").innerText = "Mobile number must be 10 digits long!";
  }
}
