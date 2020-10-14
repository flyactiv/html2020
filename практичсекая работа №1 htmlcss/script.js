$(document).ready(function () {
    $('.content .btn').click(function (e) {
        $('#popup').css('top', $(this).offset().top).show();
        e.preventDefault();
    });
}); // end document.ready