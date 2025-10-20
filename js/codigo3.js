$(document).ready(function () {
    $('#encender').click(function () {
        $('#foco').attr('src', './img/lamp_on.jpg');
        $('#encender').prop('disabled', true);
        $('#apagar').prop('disabled', true);
    });
    $('#apagar').click(function () {
        $('#foco').attr('src', './img/lamp_off.jpg');
    });
});