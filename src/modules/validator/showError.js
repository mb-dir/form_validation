function showError(inputWithInvalidValue, btnToDisabled){
    //Look DOM structure
    const errorMessage = inputWithInvalidValue.parentElement.querySelector(".mainForm__errorInfo");
    // errorMessage.classList.remove("mainForm__errorInfo--visible")
    errorMessage.classList.add("mainForm__errorInfo--visible")

    //Durning the animation user is not able to click btnSend again, this prevent to multiple attempts to send the form in an instant, and thus overlapping animations
    btnToDisabled.disabled = true;

    //This class must be remove, otherwise the message will not display when user put invalid value again
    window.setTimeout(()=>{
        errorMessage.classList.remove("mainForm__errorInfo--visible");
        //When the animation is finished user is able to send(click btn) form again.
        btnToDisabled.disabled = false;
        //There is 8 sec, cuz this is how long the animation takes
    },8000);
}

export default showError;