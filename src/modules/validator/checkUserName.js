function checkUserName(name){
    const specialSignReg = /\W|_/g;//https://stackoverflow.com/questions/18812317/javascript-regex-for-special-characters
    const numbersReg = /[0-9]/g;
    //If there is a sign from regex above return massage about invalid name
    if(name.match(specialSignReg) || name.match(numbersReg)){
        //In the final version, instead of this alert, the application will highlight the incorrectly filled input, a separate function in a separate module will be responsible for this, but for the sake of simplicity, the application displays an alert
        alert("Błędna nazwa użytkownika!");
        return false;
    }else{
        return true;
    }
}

export default checkUserName;