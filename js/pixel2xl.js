var t1 = new TimelineMax({
  paused: true
});
t1.to(".one", 0.8, {
  y: 6,
  rotation: 45,
  ease: Expo.easeInOut
});
t1.to(".two", 0.8, {
  y: -6,
  rotation: -45,
  ease: Expo.easeInOut,
  delay: -0.8
});
t1.to(".menu", 2, {
  top: "0%",
  ease: Expo.easeInOut,
  delay: -2
});
t1.staggerFrom(".menu ul li", 2, {
  x: -200,
  opacity: 0,
  ease: Expo.easeOut
}, 0.3);
t1.reverse();
$(document).on("click", ".toggle_btn", function() {

  if (document.querySelector("body").style.overflow === "hidden") {
    setTimeout(function() {
      document.querySelector("body").style.overflow = "scroll";
    }, 2200);
  } else {
    document.querySelector("body").style.overflow = "hidden";
  }
  t1.reversed(!t1.reversed());
});
document.querySelector("body").style.overflow = "scroll";

$(document).on("click", "a", function() {
  t1.reversed(!t1.reversed());
});

var images = ["pixel2xlRightImage", "googlepixel2xlwhite", "pixel2Side", "pixel2xlblack"];
var len = images.length;
var image = document.querySelector(".image");
var currentImage = document.querySelector('#CurImg');

function nextImage() {
  if (len < images.length) {
    len++;
  } else
    len = 1;
    currentImage.innerHTML=len;
  image.innerHTML = "<img id='rightimg' src='css/img/" + images[len - 1] + ".jpg'>"
}

function prevImage() {
  if (len < images.length + 1 && len > 1) {
    len--;
  } else
    len = images.length;
      currentImage.innerHTML=len;
  image.innerHTML = "<img id='rightimg' src='css/img/" + images[len - 1] + ".jpg'>"

}
