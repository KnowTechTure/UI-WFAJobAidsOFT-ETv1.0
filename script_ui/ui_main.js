$(document).ready(function () {
    var init_lyt = "lyt_one";

    switch (init_lyt) {
        case "h_screen":
            $('.h_screen').show();
            $('.lyt_one').hide();
            $("#ly0").addClass('ui_active_item');
            break;

        case "lyt_one":
            $('.h_screen').hide();
            $('.lyt_one').show();
            $("#ly1").addClass('ui_active_item');
            break;

        case "lyt_init1":
            break;
    }

    //Nav

    $("#ly0").click(function () {
        $(this).siblings().removeClass('ui_active_item');
        $(this).addClass('ui_active_item');
        $('.h_screen').show();
        $('.lyt_one').hide();
        $('.lyt_init1').hide();
    });

    $("#ly1").click(function () {
        $(this).siblings().removeClass('ui_active_item');
        $(this).addClass('ui_active_item');
        $('.h_screen').hide();
        $('.lyt_one').show();
        $('.lyt_init1').hide();
    });

    $("#lyt_init1").click(function () {
        $(this).siblings().removeClass('ui_active_item');
        $(this).addClass('ui_active_item');
    });

});