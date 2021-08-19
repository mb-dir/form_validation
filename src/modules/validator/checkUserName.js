function checkUserName(name){
    const specialSignOrNumbersReg = /[0-9!@#\$%\^\&*\)\(+=._-]+$/g;//https://stackoverflow.com/questions/18812317/javascript-regex-for-special-characters
    //If there is a sign from regex above return massage about invalid name
    if(name.match(specialSignOrNumbersReg)){
        return false;
    }else{
        return true;
    }
}

export default checkUserName;