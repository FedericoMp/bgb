$(document).ready(function() {
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

    var scrollLink = $('#scrollLink');

    // Event Listeners
    bgimageOnHover.on('mouseover', changeSrcOver);
    bgimageOnHover.on('mouseleave', changeSrcLeave);

    btnOrange.on('mouseover', changeArrowOver);
    btnOrange.on('mouseleave', changeArrowLeave);

    scrollLink.on('click', smoothEffect);

    // Event Functions
    function changeSrcOver() {
        if (flagBg) {
            srcToChange[0].src = orangeArrow;
            flagBg = false;
        }
    }
    function changeSrcLeave() {
        if (!flagBg) {
            srcToChange[0].src = whiteArrow;
            flagBg = true;
        }
    }

    function changeArrowOver() {
        if (flagBtn) {
            btnArrowImg[0].src = whiteArrow;
            flagBtn = false;
        }
    }
    function changeArrowLeave() {
        if (!flagBtn) {
            btnArrowImg[0].src = orangeArrow;
            flagBtn = true;
        }
    }

    function smoothEffect(e) {
        e.preventDefault();
        if (this.hash !== "") {
        var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function() {
                window.location.hash = hash;
            });
        }
    }
});