// Função para adicionar um valor ao visor
function appendToDisplay(value) {
    const display = document.getElementById('display');
    display.value += value;
}

// Função para limpar o visor
function clearDisplay() {
    document.getElementById('display').value = '';
}

// Função para calcular o resultado
function calculateResult() {
    try {
        let input = document.getElementById('display').value;
        const result = eval(input); // Use eval() para calcular o resultado
        document.getElementById('display').value = result;
    } catch (error) {
        document.getElementById('display').value = 'Error';
    }
}

// Função para calcular o seno
function mySin(x) {
    return Math.sin(x);
}

// Função para calcular o cosseno
function myCos(x) {
    return Math.cos(x);
}

// Função para calcular a raiz quadrada
function mySqrt(x) {
    return Math.sqrt(x);
}
if (typeof mySin === 'function') {
    console.log('A função mySin está definida.');
} else {
    console.log('A função mySin não está definida.');
}