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
}

export default checkPassword;