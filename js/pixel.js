console.log("Pixel.js Connected");

var searchFlag = 0;
function pixel2xl() {
window.location.href = 'pixel2xl.html';
}

function showSearch() {
  if (searchFlag == 0) {
    document.querySelector("#search").style.visibility = "visible";
    searchFlag = 1;
  }
  else{
    document.querySelector("#search").style.visibility = "hidden";
    searchFlag = 0;
  }
}
