function summation(num1: number ,num2: number) {
    return num1 + num2;
  }
  var num1 = prompt("enter first number") as string;
  var num2 = prompt("enter second number") as string;
  var result = summation(+num1 , +num2);
  console.log(result);
  