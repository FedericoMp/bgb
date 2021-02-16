// Vars
var orangeArrow = 'assets/img/arrow_short_og-min.png';
var whiteArrow = 'assets/img/arrow_short_wt-min.png';
var flagBg = true;
var flagBtn = true;

// DOM Elements
var bgimageOnHover = $('#bgimageOnHover');
var srcToChange = $('#srcToChange');

var btnOrange = $('#btnOrange');
var btnArrowImg = $('#btnArrowImg');

// Event Listeners
bgimageOnHover.on('mouseover', changeSrc);
bgimageOnHover.on('mouseleave', changeSrc);

btnOrange.on('mouseover', changeArrow);
btnOrange.on('mouseleave', changeArrow);

// Event Functions
function changeSrc() {
    if (flagBg) {
        srcToChange[0].src = orangeArrow;
        flagBg = false;
    } else {
        srcToChange[0].src = whiteArrow;
        flagBg = true;
    }
}

function changeArrow() {
    if (flagBtn) {
        btnArrowImg[0].src = whiteArrow;
        flagBtn = false;
    } else {
        btnArrowImg[0].src = orangeArrow;
        flagBtn = true;
    }
}