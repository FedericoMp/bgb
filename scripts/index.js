// Vars
var orangeArrow = 'assets/img/arrow_short_og-min.png';
var whiteArrow = 'assets/img/arrow_short_wt-min.png';
var flag = true;

// DOM Elements
var bgimageOnHover = $('#bgimageOnHover');
var srcToChange = $('#srcToChange');

// Event Listeners
bgimageOnHover.on('mouseover', changeSrc);
bgimageOnHover.on('mouseleave', changeSrc);

// Event function
function changeSrc() {
    if (flag) {
        srcToChange[0].src = orangeArrow;
        flag = false;
    } else {
        srcToChange[0].src = whiteArrow;
        flag = true;
    }
}