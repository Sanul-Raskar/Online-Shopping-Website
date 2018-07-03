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


function opensignup() {
  var hidelogin = document.getElementById('container');
  if (hidelogin.style.display === "none") {
    hidelogin.style.display = "block";

  } else {
    hidelogin.style.display = "none";
    // document.getElementById("MyElement").className = "MyClass";
  }

}
