$(document).ready(function() {
    $(".price__element").hover(
        function() {
            $(this).addClass("hovered");
        },
        function() {
            $(this).removeClass("hovered");
        }
    );

    $(".price__element").click(function() {
        $(".price__element").removeClass("active");
        $(this).addClass("active");
    });
});


