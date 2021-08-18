function showError(inputWithInvalidValue){
    //Look DOM structure
    const errorMessage = inputWithInvalidValue.parentElement.querySelector(".mainForm__errorInfo");
    errorMessage.classList.add("mainForm__errorInfo--visible")

    //This class must be remove, otherwise the message will not display when user put invalid value again
    window.setTimeout(()=>{
        errorMessage.classList.remove("mainForm__errorInfo--visible");
        //There is 8 sec, cuz this is how long the animation takes
    },8000);
}

export default showError;