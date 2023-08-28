const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Function to perform operations
function calculate(operator, a, b) {
  switch (operator) {
    case '+':
      return a + b;
    case '-':
      return a - b;
    case '*':
      return a * b;
    case '/':
      if (b === 0) {
        throw new Error('Cannot divide by zero');
      }
      return a / b;
    default:
      throw new Error('Invalid operator');
  }
}

rl.question('Please type first number: ', (num1) => {
  const number1 = parseFloat(num1);

  if (isNaN(number1)) {
    console.log('Invalid input for the first number.');
    rl.close();
    return;
  }

  rl.question('Please type operator (+, -, *, /): ', (operator) => {
    if (!['+', '-', '*', '/'].includes(operator)) {
      console.log('Invalid operator.');
      rl.close();
      return;
    }

    rl.question('Enter the second number: ', (num2) => {
      const number2 = parseFloat(num2);

      if (isNaN(number2)) {
        console.log('Invalid input for the second number.');
        rl.close();
        return;
      }

      try {
        const result = calculate(operator, number1, number2);
        console.log(`Result is ${result}`);
      } catch (error) {
        console.log(error.message);
      }

      rl.close();
    });
  });
});
