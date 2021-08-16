//The only purpose of this module is getting reference to suitable DOM elements(mainly related with form) and, depending on the condition, distribute tasks (checking appropriate form inputs) to other modules

function formValidator(){
    const form = document.querySelector("#mainForm");
    form.addEventListener("submit", (e)=>{
        e.preventDefault();
        const formData = new FormData(form);

        for(const pair of formData.entries()) {
            console.log(pair[0]+ ', '+ pair[1]);
        }
    });
}

export default formValidator;