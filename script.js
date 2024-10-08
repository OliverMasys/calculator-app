// Named function for addition
function add(a, b) {
    return a + b; //Implement addition
}

// Anonymous function for subtraction
const subtract = function(a, b) {
    return a - b;  //Implement subtraction
};

// Arrow function for multiplication
const multiply = (a, b) => {
    return a * b; //Implement multiplication
};

// Named function for division
function divide(a, b) {
    if (b === 0) {
        return 'Cannot divide by zero try again';  // To check for division by zero
    };
    return a / b; //Implement division
}

// Calculator object with methods
const calculator = {
    equation: '',

    // Assign add, subtract, multiply and divide functions to the properties
    add: add,
    subtract: subtract,
    multiply: multiply,
    divide: divide,

    updateEquation: function(value) {
        //update equation logic 
        this.equation += value;
        document.getElementById('equation').value = this.equation;
    },
    clearEquation: function() {
        //Clear equation logic 
        this.equation = '';
        document.getElementById('equation').value = this.equation;
    },
    calculate: function() {
        const equation = this.equation.split(' ');
        const a = parseFloat(equation[0]);
        const operation = equation[1];
        const b = parseFloat(equation[2]);
        let result;

        switch (operation) {
            case '+':
                result = this.add(a,b); //add method using `this`
                break;
            case '-':
                result = this.subtract(a,b); //subtract method using `this`
                break;
            case '*':
                result = this.multiply(a,b); //multiply method using `this`
                break;
            case '/':
                result = this.divide(a, b); //divide method using `this`
                break;
            default:
                result = 'Invalid Operation';
        }

        this.updateEquation(` = ${result}`);
    }
};

// Event listeners
document.querySelectorAll('button[name="input"]').forEach(button => {
    button.addEventListener('click', (event) => {
        const value = event.target.value;
        calculator.updateEquation(value);
        //Add the call to updateEquation 
    });
});

document.querySelectorAll('button[name="operation"]').forEach(button => {
    button.addEventListener('click', (event) => {
        const value = ` ${event.target.value} `;
        calculator.updateEquation(value);
        //call for updateEqucation that pass as argument
    });
});

document.querySelector('button[name="calculate"]').addEventListener('click', () => {
    calculator.calculate();
    //call to calculate() result and update display
});

document.querySelector('button[name="clear"]').addEventListener('click', () => {
    calculator.clearEquation();
    //Clear display 
});
