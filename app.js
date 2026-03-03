import { DayCounter } from "./src/DayCounter.js";


function iniciarContador() {
    const title = document.getElementById("tituloInput").value;
    const selectedDate = document.getElementById("fechaInput").value;

    // Crear contador
    const dayCounter = new DayCounter(title, selectedDate);

    // Validación
    if (!dayCounter.verifyDate(selectedDate)) {
        alert("Las fechas validas son a partir de hoy hasta el año 9999");
        return;
    }

    // Título
    if (title) {
        document.getElementById("contadorTitulo").textContent = title;
    }
    
    // Calcular días
    const days = dayCounter.numberOfDaysSince();

    // Render countdown
    renderDigits(days);

    // Texto auxiliar
    document.getElementById("texto").textContent =
        `Faltan ${days} días para ${selectedDate}`;
}





function renderDigits(number) {
    const container = document.getElementById("countdown");
    container.innerHTML = "";

    const digits = number
        .toString()
        .padStart(4, "0") // siempre 4 dígitos
        .split("");

    digits.forEach(d => {
        const div = document.createElement("div");
        div.className = "digit";
        div.textContent = d;
        container.appendChild(div);
    });
}


window.iniciarContador = iniciarContador;