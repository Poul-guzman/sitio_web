$(document).ready(function () {
    $('#btnMostrarOcultar').click(function () {
        var btnText = $(this).text() == '+' ? '-' : '+';
        //cambia el titulo del boton
        $(this).text(btnText);
        //desliza el contenido
        $('#contenido').slideToggle(1000);
    });
});