import { Validation } from "./Validation.js";
export function Contact(){
    let nameFocused = false,
        emailFocused = false,
        phoneFocused = false,
        ageFocused = false,
        passwordFocused = false,
        repasswordFocused = false;
    $("#name").focus(function(){
        nameFocused = true;
    }); 
    $("#email").focus(function(){
        emailFocused = true
    }); 
    $("#phone").focus(function(){
        phoneFocused = true
    }); 
    $("#age").focus(function(){
        ageFocused = true
    }); 
    $("#password").focus(function(){
        passwordFocused = true
    }); 
    $("#repassword").focus(function(){
        repasswordFocused = true
    }); 
    $("#name").keyup(function(){
        nameValidation();
        submit();
      }); 
      $("#email").keyup(function(){
        emailValidation();
        submit();
      }); 
      $("#phone").keyup(function(){
        phoneValidation();
        submit();
      }); 
      $("#age").keyup(function(){
        ageValidation();
        submit()
      }); 
      $("#password").keyup(function(){
        passwordValidation();
        submit()
      }); 
      $("#repassword").keyup(function(){
        repasswordValidation();
        submit()
      }); 
    function nameValidation(){
        if(nameFocused){
            
            if(!Validation($("#name").val()).name())
                $("#nameMessage").show();
            else
                $("#nameMessage").hide();
        }
    }
    function emailValidation(){
        if(emailFocused){
            if(!Validation($("#email").val()).email())
                $("#emailMessage").show();
            else
                $("#emailMessage").hide();
        }
    }
    function phoneValidation(){
        if(phoneFocused){
            if(!Validation($("#phone").val()).phone())
                $("#phoneMessage").show();
            else
                $("#phoneMessage").hide();
        }
    }
    function ageValidation(){
        if(ageFocused){
            if(!Validation($("#age").val()).age())
                $("#ageMessage").show();
            else
                $("#ageMessage").hide();
        }
    }
    function passwordValidation(){
        if(passwordFocused){
            if(!Validation($("#password").val()).password())
                $("#passwordMessage").show();
            else
                $("#passwordMessage").hide();
        }
    }
    function repasswordValidation(){
        if(repasswordFocused){
            if(!Validation($("#password").val()).repassword($("#repassword").val()))
                $("#repasswordMessage").show();
            else
                $("#repasswordMessage").hide();
        }
    }
    function submit(){
        if(Validation($("#name").val()).name() 
            && Validation($("#email").val()).email() 
            && Validation($("#phone").val()).phone()
            && Validation($("#age").val()).age()
            && Validation($("#password").val()).password() 
            && Validation($("#password").val()).repassword($("#repassword").val())){
                $("#submit").prop("disabled",false)
            }else{
                $("#submit").prop("disabled",true)
            }
    }
    function display(){
        $(".mainContainer").hide();
        $(".search").hide();
        $(".contact").show();
    }
    return {display,nameValidation,emailValidation,phoneValidation,ageValidation,passwordValidation,repasswordValidation}
}