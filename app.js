function iniciarContador() {
    const title = document.getElementById("tituloInput").value;
    const selectedDate = document.getElementById("fechaInput").value;

    // Validación
    if (!selectedDate) {
        alert("Por favor selecciona una fecha");
        return;
    }

    // Título
    if (title) {
        document.getElementById("contadorTitulo").textContent = title;
    }

    // Crear contador
    const dayCounter = new DayCounter(title, selectedDate);

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

class DayCounter {

  static MS_PER_DAY = 1000 * 60 * 60 * 24;

  constructor(title, dateString) {
    this.title = title;

    // Parseo seguro YYYY-MM-DD
    const [year, month, day] = dateString.split("-").map(Number);
    this.date = new Date(year, month - 1, day);
    this.date.setHours(0, 0, 0, 0);
  }

  numberOfDaysSince() {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    return Math.abs(
      Math.floor((today - this.date) / DayCounter.MS_PER_DAY)
    );
  }
}