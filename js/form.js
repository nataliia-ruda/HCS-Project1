let fName = document.querySelector("#name"); 
let fNumber = document.querySelector("#number"); 
let fEmail = document.querySelector("#email"); 
let fDate = document.querySelector("#date"); 
let fMessage = document.querySelector("#question"); 
let fBtn = document.querySelector("#btn-submit"); 

let currentDate = new Date();
let formattedDate = currentDate.toISOString().split('T')[0];
fDate.value = formattedDate;

fBtn.addEventListener("click", function (){
    let formInfo = {
        name: fName.value.trim(), 
        number: fNumber.value.trim(),
        email: fEmail.value.trim(),
        date: fDate.value,
        message: fMessage.value
    }
    console.log(formInfo);

    fName.value = ''; 
    fNumber.value = ''; 
    fEmail.value = ''; 
    fDate.value = formattedDate; 
    fMessage.value = ''; 

    alert ("Thank you! Your callback request was successfully submited.")
})