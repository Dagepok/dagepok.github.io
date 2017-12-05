$(document).ready(function () {
    //reset form after changing tab
    $(".click").click(function () {
        $("#form")[0].reset();
    });

    //Full/Short text about
    $(".full_text_button").click(function () {
        $(this).css("display", "none");
        $("#fullText").css("display", "block");
        $("#shortText").css("display", "none");
        $(".short_text_button").css("display", "block");
    })
    $(".short_text_button").click(function () {
        $(this).css("display", "none");
        $("#fullText").css("display", "none");
        $("#shortText").css("display", "block");
        $(".full_text_button").css("display", "block");
    })




    //date validate 
    $('#Date').blur(function () {
        var date = $(this).val();
        if (date.length == 5) {
            var mm = date.substring(0, 2);
            var yy = date.substring(3, 5);
            if (yy < 17) yy = 17;
            if (yy > 35) yy = 35;

            if (Math.floor(mm / 10) >= 1 && mm % 10 > 2) mm = 12;
            date = mm + "/" + yy;
        }
        else
            date = "";
        $(this).val(date);
    })


    //Сумма от 1к до 75к
    $('.sum').blur(function () {
        var value = $(this).val();
        if (value < 1000)
            value = 1000;
        else if (value > 75000)
            value = 75000;
        $(this).val(value);
    })

    //email validate
    $('input[type=email]').blur(function () {
        if ($(this).val().length == 0) {
            $(this).css({ 'border-bottom': '1px solid rgb(95, 83, 83)' });
            return;
        }
        var pattern = /^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i;
        if (pattern.test($(this).val()))
            $(this).css({ 'border-bottom': '1px solid #569b44' });
        else
            $(this).css({ 'border-bottom': '1px solid #ff0000' });
    });

    //check input
    $(".numeric").ForceNumericOnly();
});

jQuery.fn.ForceNumericOnly =
    function () {
        return this.each(function () {
            $(this).keydown(function (e) {
                var key = e.keyCode || 0;
                // Разрешаем backspace, tab, delete, стрелки, обычные цифры и цифры на дополнительной клавиатуре
                return key == 116 ||
                    (e.shiftKey == false &&
                        (key == 8 ||
                            key == 9 ||
                            key == 46 ||
                            (key >= 48 && key <= 57) ||
                            (key >= 96 && key <= 105)) ||
                        (e.ctrlKey == true &&
                            (key == 65 ||
                                key == 67 ||
                                key == 86 ||
                                key == 88)));
            });
        });
    };

//кнопка оплаты из любого банка
function checkPaySubmit() {
    if ($("#num_card").val().length == 16) {
        if ($("#Date").val().length == 5)
            if ($("#cvc").val().length == 3)
                if ($("#sum").val().length != 0) {
                    $("#pay").removeAttr('disabled');
                    return;
                }
    }
    $("#pay").attr('disabled', 'disabled');
}

function checkDate(event) {

    date = $("#Date").val();
    if (date.length == 3 && event.keyCode == 8)
        date = date.substring(0, 2);
    if (date.length == 2 && event.keyCode != 8)
        date += "/";
    $("#Date").val(date);
}

//кнопка запроса оплаты
function checkRequestSubmit() {
    if ($("#requestInn").val().length == 12) {
        if ($("#requestBik").val().length == 9)
            if ($("#schet").val().length == 20)
                if ($("#requestSum").val().length != 0) {
                    $("#request_submit").removeAttr('disabled');
                    return;
                }
    }
    $("#request_submit").attr('disabled', 'disabled');
}

//кглпка оплаты из своего банка
function checkGetFileSubmit() {
    if ($("#getFileInn").val().length == 12) {
        if ($("#getFileBik").val().length == 9)
            if ($("#getFileSum").val().length != 0) {
                $("#get_file_submit").removeAttr('disabled');
                return;
            }
    }
    $("#get_file_submit").attr("disabled", "disabled");
}