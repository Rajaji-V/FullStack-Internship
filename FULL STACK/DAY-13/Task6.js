function bmi(weight,height){
    return Math.round(weight/height);
}
let ans=bmi(56,1.59**2);
if (ans<18.5) {
    console.log(`Your BMI is ${ans}, so you are underweight.`);
} 
else if (ans>=18.5 && ans<24.9) {
    console.log(`Your BMI is ${ans}, so you are normal weight.`);
} 
else {
    console.log(`Your BMI is ${ans}, so you are overweight.`);
}