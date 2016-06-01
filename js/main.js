/**
 * Created by csasz on 5/26/2016.
 */
(function(validation){
    validation.validateContactData = function(){
        var name = document.getElementsByName("name")[0];
        var email = document.getElementsByName("email")[0];
        var message = document.getElementsByName("message")[0];
        var sendBttn = document.getElementById("sendBttn");

        if (validation.validateName(name) && validation.validateEmail(email) && validation.validateMessage(message)){
            sendBttn.disabled = false;
        }
    };

    validation.validateName = function(name){
        var isValid = name.value.length > 3 && name.value.indexOf(' ') > -1;
        if (!isValid){
            name.style.borderColor = "red";
        }
        else {
            name.style.borderColor = "initial";
        }
        return isValid;
    };

    validation.isSameEnding = function(str, suffix) {
        return str.indexOf(suffix, str.length - suffix.length) !== -1;
    };

    validation.validateEmail = function(email){
        var isValid = email.value.indexOf('@') > 0 &&
            (validation.isSameEnding(email.value, '.hu') || validation.isSameEnding(email.value, '.com'));
        if (!isValid){
            email.style.borderColor = "red";
        }
        else {
            email.style.borderColor = "initial";
        }
        return isValid;
    };

    validation.validateMessage = function(message){
        var isValid = 20 < message.value.length && message.value.length < 500;
        if (!isValid){
            message.style.borderColor = "red";
        }
        else {
            message.style.borderColor = "initial";
        }
        return isValid;
    };

    validation.sendMessage = function(){
        var name = document.getElementsByName("name")[0];
        var email = document.getElementsByName("email")[0];
        var message = document.getElementsByName("message")[0];

        alert("To:\n" + name.value + "\n" + email.value + "\n\nMessage:\n" + message.value + "\n\n" + "Your message has been sent!")
    };

    document.getElementById("sendBttn").addEventListener("click",validation.sendMessage);
    document.getElementsByName("name")[0].addEventListener('change', validation.validateContactData);
    document.getElementsByName("email")[0].addEventListener('change', validation.validateContactData);
    document.getElementsByName("message")[0].addEventListener('change', validation.validateContactData);
})(window.validation = window.validation || {});