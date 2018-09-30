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
  image.innerHTML = "<img id='rightimg' src='css/img/" + images[len - 1] + ".jpg'>";
}

function prevImage() {
  if (len < images.length + 1 && len > 1) {
    len--;
  } else
    len = images.length;
      currentImage.innerHTML=len;
  image.innerHTML = "<img id='rightimg' src='css/img/" + images[len - 1] + ".jpg'>";
}
