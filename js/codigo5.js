$(document).ready(function () {
    let paso = 10;
    const $carrito = $('#carrito');
    $(document).keydown(function (e) {
        let top = parseInt($carrito.css('top'));
        let left = parseInt($carrito.css('left'));
        switch (e.key) {
            case 'ArrowUp':
                top = Math.max(0, top - paso); break;
            case 'ArrowDown':
                top = Math.min($(window).height()- $carrito.height(), top + paso);
                break;
            case 'ArrowLeft':
                left = Math.max(0, left - paso);
                $carrito.css('transform', "scaleX(-1)"); //gira la imagen
                break;
            case 'ArrowRight':
                left = Math.min($(window).width() - $carrito.width(), left + paso);
                $carrito.css('transform', "scaleX(1)"); // restaura la imagen
                break;
            default:
                console.log(e.which + '-' + e.key);
                return;
        }
        $carrito.css({ top: top + 'px', left: left + 'px'});
    });
});