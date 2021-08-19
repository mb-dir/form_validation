//The only purpose of this module is getting reference to suitable DOM elements(mainly related with form) and, depending on the condition, distribute tasks (checking appropriate form inputs) to other modules

import checkUserName from "./checkUserName";
import checkEmail from "./checkEmail";
import checkPassword from "./checkPassword";
import checkPasswordConfirm from "./checkPasswordConfirm";
import showError from "./showError";


function formValidator(){
    const form = document.querySelector("#mainForm");
    const formInputs = form.querySelectorAll(".mainForm__input");
    const btnSend = form.querySelector("#btnSend");
    form.addEventListener("submit", (e)=>{
        const formData = new FormData(form);

        for(const [key, value] of formData.entries()) {
            if(key === "userName"){
                //call the function which validates the name
                if(checkUserName(value) === false){
                    e.preventDefault();

                    //Code below helps to define which from the inputs has invalid value, input with invalid value is passing to the special function which shows informations about invalid value right below this input
                    let invalidInput = null;
                    for(const input of formInputs){
                        const nameAttributeValue = input.getAttribute("name");
                        if(nameAttributeValue === "userName"){
                            invalidInput = input;
                        }
                    }
                    showError(invalidInput, btnSend);
                }
            }
            if(key === "userEmail"){
                //call the function which validates the email
                if(checkEmail(value) === false){
                    e.preventDefault();

                    ///Code below helps to define which from the inputs has invalid value, input with invalid value is passing to the special function which shows informations about invalid value right below this input
                    let invalidInput = null;
                    for(const input of formInputs){
                        const nameAttributeValue = input.getAttribute("name");
                        if(nameAttributeValue === "userEmail"){
                            invalidInput = input;
                        }
                    }
                    showError(invalidInput, btnSend);
                }
            }
            if(key === "userPassword"){
                //call the function which validates the password
                if(checkPassword(value) === false){
                    e.preventDefault();

                    //Code below helps to define which from the inputs has invalid value, input with invalid value is passing to the special function which shows informations about invalid value right below this input
                    let invalidInput = null;
                    for(const input of formInputs){
                        const nameAttributeValue = input.getAttribute("name");
                        if(nameAttributeValue === "userPassword"){
                            invalidInput = input;
                        }
                    }
                    showError(invalidInput, btnSend);
                }
            }
            if(key === "userPasswordConfirm"){
                //I have to get the password from first "password" input in order to check if the passwords are te same
                const firstPassword = formData.get("userPassword");
                //call the function which validates the correctness of a password and a repeated password
                if(checkPasswordConfirm(value, firstPassword) === false){
                    e.preventDefault();

                    //Code below helps to define which from the inputs has invalid value, input with invalid value is passing to the special function which shows informations about invalid value right below this input
                    let invalidInput = null;
                    for(const input of formInputs){
                        const nameAttributeValue = input.getAttribute("name");
                        if(nameAttributeValue === "userPasswordConfirm"){
                            invalidInput = input;
                        }
                    }
                    showError(invalidInput, btnSend);
                }
            }  
        }
    });
}

export default formValidator;