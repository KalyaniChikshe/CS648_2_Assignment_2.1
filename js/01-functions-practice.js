//STEP 1
function halfNumber(number){
    return (window.console.log("Half of " + number + " is " + number/2 + "."));
}
halfNumber(5);

//STEP 2
var result;
function squareNumber(number){
    result = number * number;
    return (window.console.log("The result of squaring the number " + number + " is " + result + "."));
}
squareNumber(3);

//STEP 3
var result;
function percentOf(num1, num2){
    result = (num1 * 100)/num2;
    return (window.console.log(num1 + " is " + result + "% of " + num2));
}
percentOf(2,4);

//STEP 4
var result;
function findModulus(num1, num2) {
    result = num2 % num1;
    window.console.log(result + " is the modulus of " + num1 + " and " + num2 + ".");
  }
findModulus(4,10);

//STEP 5
function sumOfNumbers() {
    var numbers = prompt("Enter few numbers separated by commas").split(",");
    var sum = 0;

    for (var i = 0; i < numbers.length; i+=1) {
      sum += parseInt(numbers[i]);
    }
    return sum;
  }
window.console.log(sumOfNumbers());