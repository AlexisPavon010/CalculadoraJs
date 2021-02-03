const screen = document.getElementById('calculator-screen');
const keys = document.getElementById('calculator-keys');
screen.value = 0
let operationsStatus = false;
let number1
let typeOperation


const calculator = () => {
    if (!keys) return
    keys.addEventListener('click', e => {
        const t = e.target
        const d = t.dataset
        // detectar si se pulso un numero
        if (d.numbers) {
            wrhiteScreen(d.numbers)
        }
        // detectar si se pulso un operacion matematica
        if (d.math) {
            getOperation(t, d.math)
        }
        // detectar si se pulso un operacion
        if (d.operations) {
            runOperation(d.operations, d.math)
        }
    })
}


const wrhiteScreen = numbers => {
    screen.value == 0
    ? screen.value = numbers
    : screen.value += numbers
    operationsStatus === false
}

const getOperation = (element, operation) => {
    operationsStatus = true
    number1 = Number(screen.value)
    typeOperation = operation
    screen.value = ''
} 

const runOperation = (operation) => {

    const getResult = (number1, typeOperation)=> {
        const number2 = Number(screen.value);
        switch (typeOperation) {
            case 'add':
                screen.value = number1 + number2
                break;
            case 'minus':
                screen.value = number1 - number2 
                break;
            case 'multiply':
                screen.value = number1 * number2
                break;
            case 'divide':
                screen.value = number1 / number2
                break
            default:
                break;
        }
    }
    operation === 'clear'
    ? screen.value = 0
    : getResult(number1, typeOperation);
    operationsStatus = true
}


calculator()