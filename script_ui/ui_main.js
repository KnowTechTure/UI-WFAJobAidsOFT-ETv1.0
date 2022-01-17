$(document).ready(function () {
    var init_lyt = "h_screen";
    var sub_status = "";

    switch (init_lyt) {
        case "h_screen":
            $('.h_screen').show();
            $('.lyt_one').hide();
            $("#ly0").addClass('ui_active_item');
            setTimeout(function () {
                $('.h_screen').hide();
                $('.lyt_one').show();
                $("#ly1").addClass('ui_active_item');
            }, 3000);
            break;

        case "lyt_one":
            $('.h_screen').hide();
            $('.lyt_one').show();
            $("#ly1").addClass('ui_active_item');
            break;

        case "lyt_init1":
            $('.h_screen').hide();
            $(".form_d_entry").hide();
            $(".int1").show();
            $(".int1").show();
            $(".int1").css({ 'display': 'grid' });
            break;

        case "lyt_init2":
            $('.h_screen').hide();
            $(".form_d_entry").hide();
            $(".int1").hide();
            $(".int2").show();
            $(".int2").css({ 'display': 'grid' });
            break;

        case "lyt_init3":
            $('.h_screen').hide();
            $(".form_d_entry").hide();
            $(".int1").hide();
            $(".int2").hide();
            $(".int3").show();
            $(".int3").css({ 'display': 'grid' });
            break;
    }

    //Nav

    $(".logout_icon").click(function () {
        $(".lyt_one").hide();
        $(".h_screen").show();
        setTimeout(function () {
            $('.h_screen').hide();
            $('.lyt_one').show();
            $(".form_d_entry").show();
            $(".int1").hide();
            $(".int2").hide();
            $(".int3").hide();
        }, 3000);
    });

    $("#ly0").click(function () {
        $(this).siblings().removeClass('ui_active_item');
        $(this).addClass('ui_active_item');
        $('.h_screen').show();
        $('.lyt_one').hide();
    });

    $("#ly1").click(function () {
        $(this).siblings().removeClass('ui_active_item');
        $(this).addClass('ui_active_item');
        $('.h_screen').hide();
        $('.lyt_one').show();
    });

    $("#lyt_init1").click(function () {
        $(this).siblings().removeClass('ui_active_item');
        $(this).addClass('ui_active_item');
    });

    //LYT Data entry
    $("#individual").click(function () {
        $(".form_d_entry").hide();
        $(".int1").show();
        $(".int1").css({ 'display': 'grid' });
        sub_status = "lyt_init1";
    });
    $("#group").click(function () {
        $(".form_d_entry").hide();
        $(".int1").show();
        $(".int1").css({ 'display': 'grid' });
        sub_status = "lyt_init1";
    });
    //[END] LYT Data entry

    //LYT INT1 Welcome Video
    $("#int1_back").click(function () {
        $(".int1").hide();
        //$("#video").get(0).stopVideo();
        $(".form_d_entry").show();
    });

    $("#int1_next").click(function () {
        $(".int1").hide();
        $(".int2").show();
        $(".int2").css({ 'display': 'grid' });
        sub_status = "lyt_init2";
    });
    //[END] LYT INT1 Welcome Video

    //LYT INT2 Self or Husband
    $("#By_myself").click(function () {
        $(".int2").hide();
        $(".int3").show();
        $(".int3").css({ 'display': 'grid' });
        sub_status = "lyt_init2";
    });
    $("#With_my_husband").click(function () {
        $(".int2").hide();
        $(".int3").show();
        $(".int3").css({ 'display': 'grid' });
        sub_status = "lyt_init2";
    });
    //[END] LYT INT2 Self or Husband

});