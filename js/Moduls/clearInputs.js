export function clearInputs(){
    $.each($("input"),function(){
        $(this).val("");
    })
    $(".contact .alert").hide();
    $("#submit").prop("disabled",true)
}