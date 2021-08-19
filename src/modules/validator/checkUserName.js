function checkUserName(name){
    const specialSignReg = /\W|_/g;//https://stackoverflow.com/questions/18812317/javascript-regex-for-special-characters
    const numbersReg = /[0-9]/g;
    //If there is a sign from regex above return massage about invalid name
    if(name.match(specialSignReg) || name.match(numbersReg)){
        return false;
    }else{
        return true;
    }
}

export default checkUserName;