function checkPassword(password){
    //Regex for special signs like "!#$%"
    const specialSignReg = /\W|_/g;
    //Regex for numbers
    const numbersReg = /[0-9]/g;
    //Regex for capital Letter
    const capitalLetterReg = /[A-Z]/g;

    //Boolean variables checking if the password includes required signs
    const isSpecialSign = password.match(specialSignReg);
    const isNumber = password.match(numbersReg);
    const isCapitalLetter = password.match(capitalLetterReg);

    if(isSpecialSign && isNumber&& isCapitalLetter){
        return true;
    }else{
        //In the final version, instead of this alert, the application will highlight the incorrectly filled input, a separate function in a separate module will be responsible for this, but for the sake of simplicity, the application displays an alert
        alert("Zbyt słabe hasło!");
        return false;
    }
}

export default checkPassword;