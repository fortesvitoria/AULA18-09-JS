const form = document.getElementById("formulario");

form.addEventListener("submit", function(event) {
    // Evita o comportamento padrão do envio do formulário (recarregar a página)
    event.preventDefault();
    calcular();


});
 
 function calcular() {
    const num01 = parseFloat(document.getElementById("num01").value);
    const num02 = parseFloat(document.getElementById("num02").value);
    const operador = document.getElementById("operador").value;
    let resultado;

    switch (operador) {
        case "1":
            resultado = num01 + num02;
            break;
        case "2":
            resultado = num01 - num02;
            break;
        case "3":
            resultado = num01 * num02;
            break;
        case "4":
            if (num02 !== 0) {
                resultado = num01 / num02;
            } else {
                resultado = "Divisão por zero não é permitida";
            }
            break;
        default:
            resultado = "Selecione uma operação";
            break;
    }

    document.getElementById("resultado").textContent = resultado;
}