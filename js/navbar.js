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
  if (document.querySelector("body").style.overflow === "hidden") {
    setTimeout(function() {
      document.querySelector("body").style.overflow = "scroll";
    }, 2200);
  } else {
    document.querySelector("body").style.overflow = "hidden";
  }
});
