const buttonsEl = document.querySelectorAll("button");
const inputFieldEl = document.getElementById("result");

for (let i=0;i<buttonsEl.length;i++) {

    buttonsEl[i].addEventListener("click", ()=>{
       const buttonValue = buttonsEl[i].textContent;
       if(buttonValue === "C"){
        clearResult();
       } else if(buttonValue === "="){
        calculateResult();
       }else{
        AppendValue(buttonValue);
       }

    })
}

function clearResult(){
inputFieldEl.value ="";
}
function calculateResult(){
    // The eval() function in JavaScript is used to evaluate
    //  JavaScript code represented as a string.
    // eval() executes the code and returns the result of the last expression evaluated.
 inputFieldEl.value = eval(inputFieldEl.value);

}

function AppendValue(buttonValue){
    inputFieldEl.value += buttonValue; 
}