// 1. BMI Calculator Challenge
// Create a BMI calculator using JavaScript functions.
// The Body Mass Index (BMI) is a way of estimating the amount of body fat. It's used in medicine to calculate risk of heart disease.You can calculate it using the formula below, where weight is divided by height squared.
// BMI = weight(kg)/height2 (m2)
// Your challenge is to create a function that takes weight and height as inputs and gives the
// calculated BMI value as an output. The output should be rounded to the nearest whole number.
// The first parameter should be the weight and the second should be the height.
// NOTE: You do not need to write any alerts or prompts or console logs. Your code should only
// contain the function, the result has to be returned by the function. You do not need to call the function.
// //Create your function below this line.
// //The first parameter should be the weight and the second should be the height.
// /* If my weight is 65Kg and my height is 1.8m, I should be able to call your function like this: var bmi = bmiCalculator(65, 1.8);
// bmi should equal 20 when it's rounded to the nearest whole number.
// */
// 2.BMI Calculator Advanced (IF/ELSE)
// Previously, we've created a function that is able to calculate the BMI. But once we get a result, we will want to tell the user what the number means.
// Write a function that outputs (returns) a different message depending on the BMI.
// BMI <18.5, the output should be: "Your BMl is <bmi>, so you are underweight."
// BMI 18.5-24.9, the output should be "Your BMI is <bmi>, so you have a normal weight." BMI >24.9, the output should be "Your BMI is <bmi>, so you are overweight."
// The message MUST be returned as an output from your function. You should NOT NEED to use alert, prompt or console.log in this challenge.
// 3.Who's Buying Lunch? Code Challenge
// You are going to write a function that will select a random name from a list of names. The The person selected will have to pay for everybody's food bill.
// Important: The output should be returned from the function and you do not need alert, prompt console.log.
// Example Input
// ["Angela", "Ben", "Jenny", "Michael", "Chloe"]
// Example Output
// 1 Michael is going to buy lunch today!
// Hint
// 1. You might need to think about Array.length. 2. Remember that Arrays start at position 0!



function bmiCalc(weight, height){

    var bmi=weight/(height*height);
    return Math.round(bmi);
    // Math.power//exponent
    // Math.round


}

const bmiCalculator = (height, weight) => {
    return weight / (height * height)
}

const myBmi = Math.round(bmiCalculator(1.87, 100))

console.log(myBmi)