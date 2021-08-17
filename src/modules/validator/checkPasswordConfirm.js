//passwordConfirm is a value from input with name attrubite "userPasswordConfirm", password is a value from input with name attribute "userPassword"
function checkPasswordConfirm(passwordConfirm, password){
    if(passwordConfirm === password){
        return true;
    }else{
        //In the final version, instead of this alert, the application will highlight the incorrectly filled input, a separate function in a separate module will be responsible for this, but for the sake of simplicity, the application displays an alert
        alert("Hasła nie są takie same!");
        return false;
    }
}

export default checkPasswordConfirm;