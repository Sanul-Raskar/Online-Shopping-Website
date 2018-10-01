$(document).ready(function () {
  $('#wrapper').fullpage(
    {
      anchors: ['firstPage', 'secondPage', 'lastPage'],
      menu: '#menu',
      scrollingSpeed: 1000
    }
  );
});

var currentPixelCounter = 1;
var currentMacCounter = 1;
var Section1 = document.querySelector('#section1');
var Section2 = document.querySelector('#section2');
var Section3 = document.querySelector('#section3');
var menuItem1 = document.querySelector('#a1');
var menuItem2 = document.querySelector('#a2');
var menuItem3 = document.querySelector('#a3');
var menuItem4 = document.querySelector('#a4');



var SideBar = document.querySelector('#sidebar');
var pixel2xl = document.querySelector('#pixel2xl');
var pixel2xlH1 = document.querySelector('#pixel2xlH1');
var pixel2xlp1 = document.querySelector('#pixel2xlp1');
var pixelandroid = document.querySelector('#androidimg');
var pixelimg = document.querySelector('#pixelimg');


var assistant = document.querySelector('#assistant');
var assistantH1 = document.querySelector('#assistantH1');
var assistantp1 = document.querySelector('#assistantp1');
var assistantH2 = document.querySelector('#assistantH2');
var assistantp2 = document.querySelector('#assistantp2');
var assistantimg = document.querySelector('#assistantimg');

var googleLens = document.querySelector('#googlelens');
var googleLensH1 = document.querySelector('#googlelensH1');
var googleLenP = document.querySelector('#googlelensp');
var googleLenimg = document.querySelector('#googlelensimg');

var macbook = document.querySelector('#macbookPro');
var macbookH1 = document.querySelector('#macbookProH1');
var macbookProP = document.querySelector('#macbookProP');
var macbookimg = document.querySelector('#macbookProimg');

var touchbar = document.querySelector('#touchbar');
var touchbarH1 = document.querySelector('#touchbarH1');
var touchbarP = document.querySelector('#touchbarP');
var touchbarvideo = document.querySelector('#touchbarVideo');


function animate() {
  pixel2xlH1.classList.toggle('animateTopText');
  pixel2xlp1.classList.toggle('animateTopText');
  pixelandroid.classList.toggle('animateBottomText');
  pixelimg.classList.toggle('animateimage');
  macbookH1.classList.toggle('animateTopText');
  macbookProP.classList.toggle('animateTopText');
  macbookimg.classList.toggle('animateimage');
}

setInterval(function () {
  if (Section2.classList.contains('active')) {
    SideBar.style.background = "linear-gradient(-80deg, #a173c0 8%, #640ab8)";
    menuItem2.classList.add('menuActive');
    menuItem1.classList.remove('menuActive');
    menuItem3.classList.remove('menuActive');
    menuItem4.classList.remove('menuActive');
  }
}, 500);

setInterval(function () {
  if (Section1.classList.contains('active')) {
    SideBar.style.background = "linear-gradient(-80deg, #ff8080 8%, #ff1a1a)";
    menuItem1.classList.add('menuActive');
    menuItem2.classList.remove('menuActive');
    menuItem3.classList.remove('menuActive');
    menuItem4.classList.remove('menuActive');
  }
}, 500);

setInterval(function () {
  if (Section3.classList.contains('active')) {
    SideBar.style.background = "linear-gradient(-80deg,#e27ba6 8%,  #aa0b40)";
    menuItem3.classList.add('menuActive');
    menuItem2.classList.remove('menuActive');
    menuItem1.classList.remove('menuActive');
    menuItem4.classList.remove('menuActive');
  }
}, 500);

function pixelNextArrow() {
  if (currentPixelCounter == 1) {
    currentPixelCounter = 2;
    pixel2xl.style.display = "none";
    pixel2xlH1.style.display = "none";
    pixel2xlp1.style, display = "none";
    pixelimg.style.display = "none";
    pixel2xlH1.classList.toggle('animateTopText');
    pixel2xlp1.classList.toggle('animateTopText');
    pixelimg.classList.toggle('animateimage');
    pixelandroid.classList.toggle('animateBottomText');
    assistant.style.display = "block";
    assistantH1.style.display = "block";
    assistantp1.style.display = "block";
    assistantH2.style.display = "block";
    assistantp2.style.display = "block";
    assistantimg.style.display = "block";
    assistantH1.classList.toggle('animateTopText');
    assistantp1.classList.toggle('animateTopText');
    assistantH2.classList.toggle('animateBottomText');
    assistantp2.classList.toggle('animateBottomText');
    assistantimg.classList.toggle('animateimage');

    return;
  }

  if (currentPixelCounter == 2) {
    currentPixelCounter = 3;
    assistant.style.display = "none";
    assistantH1.style.display = "none";
    assistantp1.style.display = "none";
    assistantH2.style.display = "none";
    assistantp2.style.display = "none";
    assistantimg.style.display = "none";
    assistantH1.classList.toggle('animateTopText');
    assistantp1.classList.toggle('animateTopText');
    assistantH2.classList.toggle('animateBottomText');
    assistantp2.classList.toggle('animateBottomText');
    assistantimg.classList.toggle('animateimage');
    googleLens.style.display = "block";
    googleLensH1.style.display = "block";
    googleLenP.style.display = "block";
    googleLenimg.style.display = "block";
    googleLensH1.classList.toggle('animateBottomText');
    googleLenP.classList.toggle('animateBottomText');
    googleLenimg.classList.toggle('animateimage');
    return;
  }

  if (currentPixelCounter == 3) {
    currentPixelCounter = 1;
    googleLens.style.display = "none";
    googleLensH1.style.display = "none";
    googleLenP.style.display = "none";
    googleLenimg.style.display = "none";
    googleLensH1.classList.toggle('animateBottomText');
    googleLenP.classList.toggle('animateBottomText');
    googleLenimg.classList.toggle('animateimage');

    pixel2xl.style.display = "block";
    pixel2xlH1.style.display = "block";
    pixel2xlp1.style.display = "block";
    pixelimg.style.display = "block";
    pixelandroid.style.display = "block";
    pixel2xlH1.classList.toggle('animateTopText');
    pixel2xlp1.classList.toggle('animateTopText');
    pixelandroid.classList.toggle('animateBottomText');
    pixelimg.classList.toggle('animateimage');
    return;
  }

}

function pixelBackArrow() {
  if (currentPixelCounter == 1) {
    currentPixelCounter = 3;
    pixel2xl.style.display = "none";
    pixel2xlH1.style.display = "none";
    pixel2xlp1.style.display = "none";
    pixelimg.style.display = "none";
    pixel2xlH1.classList.toggle('animateTopText');
    pixel2xlp1.classList.toggle('animateTopText');
    pixelandroid.classList.toggle('animateBottomText');
    pixelimg.classList.toggle('animateimage');
    googleLens.style.display = "block";
    googleLensH1.style.display = "block";
    googleLenP.style.display = "block";
    googleLenimg.style.display = "block";
    googleLensH1.classList.toggle('animateBottomText');
    googleLenP.classList.toggle('animateBottomText');
    googleLenimg.classList.toggle('animateimage');
    return;
  }

  if (currentPixelCounter == 2) {
    currentPixelCounter = 1;
    assistant.style.display = "none";
    assistantH1.style.display = "none";
    assistantp1.style.display = "none";
    assistantH2.style.display = "none";
    assistantp2.style.display = "none";
    assistantimg.style.display = "none";
    assistantH1.classList.toggle('animateTopText');
    assistantp1.classList.toggle('animateTopText');
    assistantH2.classList.toggle('animateBottomText');
    assistantp2.classList.toggle('animateBottomText');
    assistantimg.classList.toggle('animateimage');
    pixel2xl.style.display = "block";
    pixel2xlH1.style.display = "block";
    pixel2xlp1.style.display = "block";
    pixelimg.style.display = "block";
    pixel2xlH1.classList.toggle('animateTopText');
    pixel2xlp1.classList.toggle('animateTopText');
    pixelandroid.classList.toggle('animateBottomText');
    pixelimg.classList.toggle('animateimage');
    return;
  }

  if (currentPixelCounter == 3) {
    currentPixelCounter = 2;
    googleLens.style.display = "none";
    googleLensH1.style.display = "none";
    googleLenP.style.display = "none";
    googleLenimg.style.display = "none";
    googleLensH1.classList.toggle('animateBottomText');
    googleLenP.classList.toggle('animateBottomText');
    googleLenimg.classList.toggle('animateimage');

    assistant.style.display = "block";
    assistantH1.style.display = "block";
    assistantp1.style.display = "block";
    assistantH2.style.display = "block";
    assistantp2.style.display = "block";
    assistantimg.style.display = "block";
    assistantH1.classList.toggle('animateTopText');
    assistantp1.classList.toggle('animateTopText');
    assistantH2.classList.toggle('animateBottomText');
    assistantp2.classList.toggle('animateBottomText');
    assistantimg.classList.toggle('animateimage');
    return;
  }
}

function macbookNextArrow() {
  if (currentMacCounter == 1) {
    currentMacCounter = 2;
    macbook.style.display = "none";
    macbookH1.style.display = "none";
    macbookProP.style.display = "none";
    macbookimg.style.display = "none";
    macbookH1.classList.toggle('animateTopText');
    macbookProP.classList.toggle('animateTopText');
    macbookimg.classList.toggle('animateimage');

    touchbar.style.display = "block";
    touchbarH1.style.display = "block";
    touchbarP.style.display = "block";
    touchbarvideo.style.display = "block";
    touchbarH1.classList.toggle('animateBottomText');
    touchbarP.classList.toggle('animateBottomText');
    touchbarvideo.classList.toggle('animateimage');
    return;
  }

  if (currentMacCounter == 2) {
    currentMacCounter = 1;
    touchbar.style.display = "none";
    touchbarH1.style.display = "none";
    touchbarP.style.display = "none";
    touchbarvideo.style.display = "none";
    touchbarH1.classList.toggle('animateBottomText');
    touchbarP.classList.toggle('animateBottomText');
    touchbarvideo.classList.toggle('animateimage');

    macbook.style.display = "block";
    macbookH1.style.display = "block";
    macbookProP.style.display = "block";
    macbookimg.style.display = "block";
    macbookH1.classList.toggle('animateTopText');
    macbookProP.classList.toggle('animateTopText');
    macbookimg.classList.toggle('animateimage');

    return;
  }
}

function macbookBackArrow() {
  if (currentMacCounter == 1) {
    currentMacCounter = 2;
    macbook.style.display = "none";
    macbookH1.style.display = "none";
    macbookProP.style.display = "none";
    macbookimg.style.display = "none";
    macbookH1.classList.toggle('animateTopText');
    macbookProP.classList.toggle('animateTopText');
    macbookimg.classList.toggle('animateimage');
    touchbar.style.display = "block";
    touchbarH1.style.display = "block";
    touchbarP.style.display = "block";
    touchbarvideo.style.display = "block";
    touchbarH1.classList.toggle('animateBottomText');
    touchbarP.classList.toggle('animateBottomText');
    touchbarvideo.classList.toggle('animateimage');
    return;
  }
  if (currentMacCounter == 2) {
    currentMacCounter = 1;
    touchbar.style.display = "none";
    touchbarH1.style.display = "none";
    touchbarP.style.display = "none";
    touchbarvideo.style.display = "none";
    touchbarH1.classList.toggle('animateBottomText');
    touchbarP.classList.toggle('animateBottomText');
    touchbarvideo.classList.toggle('animateimage');
    macbook.style.display = "block";
    macbookH1.style.display = "block";
    macbookProP.style.display = "block";
    macbookimg.style.display = "block";
    macbookH1.classList.toggle('animateTopText');
    macbookProP.classList.toggle('animateTopText');
    macbookimg.classList.toggle('animateimage');
    return;
  }
}
















//Version1.0
// function animate() {
//       document.querySelector('#pixel2xlH1').classList.toggle('animatePixel2xlH1');
//       document.querySelector('#pixel2xlp1').classList.toggle('animatePixel2xlp1');
//       setTimeout(function() {
//         document.querySelector('#pixel2xl').style.display = "none";
//         document.querySelector('#assistant').style.display = "block";
//         document.querySelector('#assistantH1').style.display = "block";
//         document.querySelector('#assistantp1').style.display = "block";
//         document.querySelector('#assistantH2').style.display = "block";
//         document.querySelector('#assistantp2').style.display = "block";
//         document.querySelector('#assistantimg').style.display = "block";
//         document.querySelector('#assistantH1').classList.toggle('animateAssistantH1');
//         document.querySelector('#assistantp1').classList.toggle('animateAssistantp1');
//         document.querySelector('#assistantH2').classList.toggle('animateAssistantH2');
//         document.querySelector('#assistantp2').classList.toggle('animateAssistantp2');
//       }, 10000);
// }
