// FORMATO: "Ano-Mês-DiaTHora:Minuto:Segundo"
// Exemplo: 25 de Dezembro de 2026 às 14:30 -> "2026-12-25T14:30:00"
const dataDoReencontro = new Date("2026-12-25T14:00:00").getTime();

const atualizaContador = setInterval(function() {
    const agora = new Date().getTime();
    const distancia = dataDoReencontro - agora;

    // Se a data já passou ou chegou
    if (distancia < 0) {
        clearInterval(atualizaContador);
        document.getElementById("countdown").innerHTML = "<h2>O grande dia chegou! ❤️</h2>";
        return;
    }

    // Cálculos de tempo
    const dias = Math.floor(distancia / (1000 * 60 * 60 * 24));
    const horas = Math.floor((distancia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((distancia % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((distancia % (1000 * 60)) / 1000);

    // Atualiza o HTML garantindo que sempre tenha 2 dígitos (ex: 09 em vez de 9)
    document.getElementById("days").innerText = dias.toString().padStart(2, '0');
    document.getElementById("hours").innerText = horas.toString().padStart(2, '0');
    document.getElementById("minutes").innerText = minutos.toString().padStart(2, '0');
    document.getElementById("seconds").innerText = segundos.toString().padStart(2, '0');
}, 1000);