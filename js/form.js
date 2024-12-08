let fName = document.querySelector("#name"); 
let fNumber = document.querySelector("#number"); 
let fEmail = document.querySelector("#email"); 
let fDate = document.querySelector("#date"); 
let fMessage = document.querySelector("#question"); 
let fBtn = document.querySelector("#btn-submit"); 
const elModal = document.querySelector(".modal"); 
const modalBtn = document.querySelector(".modal__btn"); 
const iconModal = document.querySelector(".modal__icon"); 
const txtModal = document.querySelector(".modal__text"); 

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
    if (fName.value === '' || fNumber.value === '' || fEmail.value ===''){
       alert("You need to fill up mandatory fields to submit form!")
    } else if (isNaN(Number(formInfo.number))){
        iconModal.innerHTML=`<i style="color: red;" class="bi bi-exclamation-circle"></i>`; 
        txtModal.textContent="Phone number is inavid";
        elModal.style.display="flex";  


    } else if (!fEmail.value.includes ("@")){
        iconModal.innerHTML=`<i style="color: red;" class="bi bi-exclamation-circle"></i>`; 
        txtModal.textContent="Email format is inavid";
        elModal.style.display="flex";  

    }else {
    console.log(formInfo);
    elModal.style.display="flex"; 
 
    
    fName.value = ''; 
    fNumber.value = ''; 
    fEmail.value = ''; 
    fDate.value = formattedDate; 
    fMessage.value = ''; 
    }
        
})

modalBtn.addEventListener("click", function(){
    elModal.style.display="none"; 
})
