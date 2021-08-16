//The only purpose of this module is getting reference to suitable DOM elements(mainly related with form) and, depending on the condition, distribute tasks (checking appropriate form inputs) to other modules

import checkUserName from "./checkUserName";
import checkEmail from "./checkEmail";


function formValidator(){
    const form = document.querySelector("#mainForm");
    form.addEventListener("submit", (e)=>{
        const formData = new FormData(form);

        for(const [key, value] of formData.entries()) {
            if(key === "userName"){
                //call the function which validates the name
                if(checkUserName(value) === false){
                    e.preventDefault();
                }
            }
            if(key === "userEmail"){
                //call the function which validates the email
                if(checkEmail(value) === false){
                    e.preventDefault();
                }
            }
            if(key === "userPassword"){
                //call the function which validates the password
                console.log("userPassword")
            }
            if(key === "userPasswordConfirm"){
                //call the function which validates the correctness of a password and a repeated password
                console.log("userPasswordConfirm")
            }  
        }
    });
}

export default formValidator;