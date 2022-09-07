const gratitudeCard = document.querySelector("#card-2");
const body = document.body;
const submitButton = document.querySelector(".submit-button");
const confirmation = document.querySelector(".confirmation");
const ratingButtons = document.querySelectorAll(".btn");
ratingButtons.forEach(ratingButton =>{   
    ratingButton.addEventListener('click',()=>{
        confirmation.innerText = "You have selected "+ratingButton.innerText +" out of 5";
         });
});
body.removeChild(gratitudeCard);
submitButton.addEventListener('click',()=>{
body.appendChild(gratitudeCard);
});
//body.removeChild(gratitudeCard);
