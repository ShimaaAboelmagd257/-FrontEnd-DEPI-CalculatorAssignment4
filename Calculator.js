//document.addEventListener('DOMContentLoaded', function() {

const result = document.querySelector(".result");
let firstValue = '';
let secondValue = '';
let currentOperation = null;
 

//Assign the numbers from the clicked Buttons
function setNum(number) {
    if (currentOperation === null) {
        firstValue += number;
        updateDisplay(firstValue);
    } else {
        secondValue += number;
        value = firstValue + ' ' + currentOperation + ' ' + secondValue ;
        updateDisplay(value);
    }
}



// make the four operation logic 
function operate(operation,num1,num2){
    switch (operation) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            if (num2 === 0) {
                return 'Error';
            }
            return num1 / num2;
        default:
            return 'Error'; 
    }
}

//display the answers 
function equal() {
    if (firstValue !== '' && secondValue !== '' && currentOperation !== null) {
        const num1 = parseFloat(firstValue);
        const num2 = parseFloat(secondValue);
        const finalResult = operate(currentOperation, num1, num2);
        if (finalResult === 'Error') {
            updateDisplay('Error'); // incase of dividing on zero
        } else {
            updateDisplay(finalResult);
            firstValue = finalResult // assign the final value into the first value
            secondValue = '';
            currentOperation = null;
           //clear()
        }
        console.log(`equal clicked with ${finalResult} `);
    }
}

// update the result value 
function updateDisplay(value) {
    result.textContent = value;
    console.log(`updateDisplay clicked with  ${value} `);
}

// set the operation as clicked if the first value is not empty 
function setOperation(operation) {
    if (firstValue !== '') {
        currentOperation = operation;
        value = firstValue + ' ' + currentOperation ;
        updateDisplay(value)
        console.log(`operation ${operation} clicked`);
    }
}

//clear the display and remove it 
function clear(){
    firstValue = '';
    secondValue = '';
    currentOperation = null;
    updateDisplay('0');
    console.log(`clear clicked`);

}

// add event listners for all the clicked buttons insted of dealing with it in html with onClick function 
document.querySelectorAll('[data-number]').forEach( btn => {
    btn.addEventListener('click',() => setNum(btn.dataset.number));
});

document.querySelectorAll('[data-operation]').forEach(btn => {
    btn.addEventListener('click' ,() => setOperation(btn.dataset.operation));  
});

document.querySelector('[data-clear]').addEventListener('click',clear);
document.querySelector('[data-equal]').addEventListener('click',equal);





