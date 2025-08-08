const botaoSomar = document.querySelector("form button")
botaoSomar.addEventListener("click", (e) => {
    e.preventDefault()
    somar()
})

function somar() {
    const numero1 = document.querySelector("#numero-1").valueAsNumber
    const numero2 = document.querySelector("#numero-2").valueAsNumber

    const resultado = numero1 + numero2

   mostrarResultado(resultado)

}

function mostrarResultado(resultado) {
    const paragrafoResultado = document.querySelector("#resultado")
    paragrafoResultado.textContent = `Resultado: ${resultado}`
}