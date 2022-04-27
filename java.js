var weight = parseFloat(prompt('Enter your weight in kg'));
var height = parseFloat(prompt('Enter your height in meter'));
var txt = document.getElementById("txt")
function bmi(){
    var bmiResult = weight / (height*height);
    var finalResult = Math.round(bmiResult * 10 )/ 10;
    
    if (finalResult < 18.5){
        var output = "Your BMI is " + finalResult + ", this means that you are underweight.";

    }
    else if (finalResult >= 18.5 && finalResult <= 24.9){
        var output = "Your BMI is " + finalResult + ", this means that you are within the normal range.";
    }
    else if (finalResult > 24.9 && finalResult <= 29.9){
        var output = "Your BMI is " + finalResult + ", this means that you are overweight.";
    }

    else {
        var output = "Your BMI is " + finalResult + ", this means that you are obese.";
    }
    return output;
}
txt.innerHTML = bmi();


//second assignment
// var msg = document.getElementById("msg")
// var age = 16;
// var accompanied = false;
// function movie(){
   
// if (age >=13 || accompanied === true){
//     var output2 = "You are allowed in.";
// }
// else {
//     var output2 = "You are not allowed in";
// }
//     return output2;
// }
// msg.innerHTML = movie()