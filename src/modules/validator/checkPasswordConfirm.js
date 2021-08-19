//passwordConfirm is a value from input with name attrubite "userPasswordConfirm", password is a value from input with name attribute "userPassword"
function checkPasswordConfirm(passwordConfirm, password){
    if(passwordConfirm === password){
        return true;
    }else{
        return false;
    }
}

export default checkPasswordConfirm;