function sumOfTwoNumbers (num1, num2){
    return num1 + num2
}

console.log(sumOfTwoNumbers(2, 3));

const sumOfTwoNumbers2 = function (num1, num2) {
    const addition = num1 + num2
    const subtraction = num1 - num2
    const multiplication = num1 * num2
    const division = num1 / num2
    return `āddition:${addition}, subtraction:${subtraction}, multiplication:${multiplication}, division:${division}`;
}
console.log(sumOfTwoNumbers2(10, 2));
