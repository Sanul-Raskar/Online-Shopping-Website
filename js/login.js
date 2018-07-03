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

function leftslidelogin() {
  document.getElementById('emptyclass').classList.toggle('login_left_slide');
  document.getElementById('login_right_img').classList.toggle('cart_right_slide');
  document.getElementById('login_right_title').classList.toggle('cart_right_slide');
  document.getElementById('login_right_button').classList.toggle('cart_right_slide');

  setTimeout(function hideLogin() {
    var hidelogin = document.getElementById('container');
    if (hidelogin.style.display === "none") {
      hidelogin.style.display = "block";

    } else {
      hidelogin.style.display = "none";
    }
  }, 1200);

}
