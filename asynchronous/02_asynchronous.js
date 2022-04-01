function myDisplayer(hasil) {
    console.log(hasil);
}

function myCalculator(num1, num2, myCallback) {
    let sum = num1 + num2;
    myCallback(sum);
}

myCalculator(10, 5, myDisplayer);