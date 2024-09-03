"use strict"

let container = document.querySelector(".contenedor_cotizacion");
let form = document.querySelector("#form_cotizador");
let btn = document.querySelector("#btn_cotizar");
btn.addEventListener('click', cotizar);
function cotizar(e) {
    e.preventDefault();
    let cliente = document.querySelector("#cliente").value;
    let nroserie = document.querySelector("#nroserie").value;
    let valor = document.querySelector("#valor").value;
    let tipo = document.querySelector("#tipo").value;
    if (!cliente || !nroserie || !valor) {
        alert("Debe completar datos requeridos");
        return;
    }
    let cuota = 0;
    if (tipo === "robo") {
        cuota = valor * 0.1 / 100;
    } else {
        cuota = valor * 0.2 / 100;
    }
    container.innerHTML = `
<p>Nombre: ${cliente}</p>
<p>Nro Serie: ${nroserie}</p>
<p>Valor ($): ${valor}</p>
<p>Tipo: ${tipo}</p>
<h2>Cuota Anual: $${cuota}</h2>
`;
    form.classList.remove('robo');
    form.classList.remove('rotura');
    form.classList.add(tipo);
}
