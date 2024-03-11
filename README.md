Interactive Calculator
This is a simple interactive calculator project implemented in HTML, CSS, and JavaScript. The calculator allows performing basic math operations such as addition, subtraction, multiplication, and division, as well as calculating the result of the entered expression.

Features
Add values to the display by clicking on the numeric and operation buttons
Clear the display by clicking on the "C" button
Calculate the result of the entered expression by clicking on the "=" button
Usage
Clone this repository:
bash
Copy code
git clone https://github.com/your-username/interactive-calculator.git
Open the index.html file in your web browser.

Use the numeric and operation buttons to enter a mathematical expression in the display.

Press the "=" button to get the result of the expression.

Code Example
HTML (index.html)
html
Copy code
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Interactive Calculator</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="calculator">
        <input type="text" id="display" readonly>
        <div class="buttons">
            <button onclick="clearDisplay()">C</button>
            <!-- Numeric buttons -->
            <button onclick="appendToDisplay('0')">0</button>
            <button onclick="appendToDisplay('1')">1</button>
            <button onclick="appendToDisplay('2')">2</button>
            <button onclick="appendToDisplay('3')">3</button>
            <button onclick="appendToDisplay('4')">4</button>
            <button onclick="appendToDisplay('5')">5</button>
            <button onclick="appendToDisplay('6')">6</button>
            <button onclick="appendToDisplay('7')">7</button>
            <button onclick="appendToDisplay('8')">8</button>
            <button onclick="appendToDisplay('9')">9</button>
            <button onclick="appendToDisplay('.')">.</button>
            <!-- Operation buttons -->
            <button onclick="appendToDisplay('+')">+</button>
            <button onclick="appendToDisplay('-')">-</button>
            <button onclick="appendToDisplay('*')">*</button>
            <button onclick="appendToDisplay('/')">/</button>
            <!-- Result button -->
            <button onclick="calculateResult()">=</button>
        </div>
    </div>

    <script src="calculator.js"></script>
</body>
</html>
CSS (styles.css)
css
Copy code
.calculator {
    width: 300px;
    margin: 0 auto;
    border: 2px solid #ccc;
    border-radius: 5px;
    padding: 10px;
}

#display {
    width: calc(100% - 20px);
    margin-bottom: 10px;
    padding: 5px;
    font-size: 18px;
}

.buttons {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 5px;
}

button {
    padding: 10px;
    font-size: 16px;
    background-color: #f0f0f0;
    border: 1px solid #ccc;
    border-radius: 5px;
    cursor: pointer;
}

button:hover {
    background-color: #e0e0e0;
}

button:active {
    background-color: #d9d9d9;
}
JavaScript (calculator.js)
javascript
Copy code
// Function to add a value to the display
function appendToDisplay(value) {
    const display = document.getElementById('display');
    display.value += value;
}

// Function to clear the display
function clearDisplay() {
    document.getElementById('display').value = '';
}

// Function to calculate the result
function calculateResult() {
    try {
        let input = document.getElementById('display').value;
        const result = eval(input); // Use eval() to calculate the result
        document.getElementById('display').value = result;
    } catch (error) {
        document.getElementById('display').value = 'Error';
    }
}
Contributing
Contributions are welcome! Feel free to submit pull requests or report issues.

License
This project is licensed under the MIT License.
