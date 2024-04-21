
$(document).ready(function() {
    $(".hover").hover(
        function () { // Mouse enter
            $(this).addClass('hovered');
        },
        function () { // Mouse leave
            $(this).removeClass('hovered');
        }
    )
})