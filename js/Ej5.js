document.addEventListener("DOMContentLoaded", function () {
  let cronometro;
  let tiempo = 0;
  let corriendo = false;

  function iniciarCronometro() {
    if (!corriendo) {
      corriendo = true;
      cronometro = setInterval(function () {
        tiempo++;
        mostrarTiempo();
      }, 1000);
    }
  }

  function pausarCronometro() {
    corriendo = false;
    clearInterval(cronometro);
  }

  function resetearCronometro() {
    corriendo = false;
    clearInterval(cronometro);
    tiempo = 0;
    mostrarTiempo();
  }

  function mostrarTiempo() {
    const segundos = tiempo % 60;
    const minutos = Math.floor(tiempo / 60) % 60;
    const horas = Math.floor(tiempo / 3600);

    document.getElementById("cronometro").innerText = `${horas
      .toString()
      .padStart(2, "0")}:${minutos.toString().padStart(2, "0")}:${segundos
      .toString()
      .padStart(2, "0")}`;
  }

  document
    .getElementById("iniciar")
    .addEventListener("click", iniciarCronometro);
  document.getElementById("pausar").addEventListener("click", pausarCronometro);
  document
    .getElementById("resetear")
    .addEventListener("click", resetearCronometro);
});
