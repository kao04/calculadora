const botaoCalcular = document.querySelector("form button");

botaoCalcular.addEventListener("click", (evento) => {
    evento.preventDefault();
    calcularSoma();
});

function calcularSoma() {
    const campoNumero1 = document.querySelector("#numero-1");
    const campoNumero2 = document.querySelector("#numero-2");

    const valor1 = campoNumero1.valueAsNumber;
    const valor2 = campoNumero2.valueAsNumber;

    const soma = valor1 + valor2;

    exibirResultado(soma);
}

function exibirResultado(valor) {
    const areaResultado = document.querySelector("#resultado");
    areaResultado.textContent = `Resultado da soma: ${valor}`;
}
