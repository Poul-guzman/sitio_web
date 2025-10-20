$(document).ready(function () {
    $('#btnAgregar').click(function () {
        var mensaje = $("#mensaje").val().trim();
        if (mensaje == "") {
            alert("Por favor, escribe un mensaje antes de agregar.");
            return;
        }
        $('#mensajes').append("<p>" + mensaje + "</p>");
    });
});
