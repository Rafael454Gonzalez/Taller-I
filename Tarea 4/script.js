function performOperations() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const results = document.getElementById('results');
    results.innerHTML = '';

    for (let i = 1; i <= 5; i++) {
        let result;
        switch (i) {
            case 1:
                result = `Iteración SUMA ${i}: ${num1} + ${num2} = ${num1 + num2}`;
                break;
            case 2:
                result = `Iteración RESTA ${i}: ${num1} - ${num2} = ${num1 - num2}`;
                break;
            case 3:
                result = `Iteración MULTIPLICA ${i}: ${num1} * ${num2} = ${num1 * num2}`;
                break;
            case 4:
                if (num2 !== 0) {
                    result = `Iteración DIVIDE ${i}: ${num1} / ${num2} = ${num1 / num2}`;
                } else {
                    result = `Iteración ${i}: División por cero no es posible`;
                }
                break;
            case 5:
                if (num2 !== 0) {
                    result = `Iteración MOD ${i}: ${num1} % ${num2} = ${num1 % num2}`;
                } else {
                    result = `Iteración ${i}: Módulo por cero no es posible`;
                }
                break;
            default:
                result = `Iteración ${i}: Operación no definida`;
        }
        const p = document.createElement('p');
        p.textContent = result;
        results.appendChild(p);
    }
}
