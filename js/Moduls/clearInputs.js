export function clearInputs(){
    $("input").val("");
    $(".contact .alert").hide();
    $("#submit").prop("disabled",true)
}
