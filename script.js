const buttons = Array.from(document.querySelectorAll('.btn'));

const display = document.getElementById('display');

let expression = '';

buttons.forEach(button => {
    button.addEventListener('click', () => {
        // Get the button's text content
        const value = button.textContent;

        // Perform actions based on the button clicked
        if (value === 'C') {
            // Clear the display
            expression = '';
        } else if (value === 'DEL') {
            // Delete the last character
            expression = expression.slice(0, -1);
        } else if (value === '=') {
            // Evaluate the expression
            try {
                expression = eval(expression.replace(/X/g, '*'));
            } catch (e) {
                expression = 'Error';
            }
        } else if (value === '+/-') {
            if (expression.startsWith('-')) {
                expression = expression.substring(1);
            } else {
                expression = '-' + expression;
            }
        } else {
            expression += value;
        }

        display.value = expression;
    });
});
