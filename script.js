document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("btnCalcular").addEventListener("click", function() {
        // Captura os valores dos campos
        const valor1 = parseFloat(document.getElementById("valor1").value);
        const valor2 = parseFloat(document.getElementById("valor2").value);
        const operacao = document.getElementById("operacao").value;

        // Verifica se os valores são números válidos
        if (isNaN(valor1) || isNaN(valor2)) {
            document.getElementById("resultado").textContent = "Por favor, insira valores válidos.";
            return;
        }

        let resultado;

        // Realiza a operação selecionada
        switch (operacao) {
            case "soma":
                resultado = valor1 + valor2;
                break;
            case "subtracao":
                resultado = valor1 - valor2;
                break;
            case "multiplicacao":
                resultado = valor1 * valor2;
                break;
            case "divisao":
                if (valor2 === 0) {
                    resultado = "Divisão por zero não é permitida.";
                } else {
                    resultado = valor1 / valor2;
                }
                break;
            default:
                resultado = "Operação inválida.";
        }

        // Exibe o resultado
        document.getElementById("resultado").textContent = resultado;
    });
});