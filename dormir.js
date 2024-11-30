document.addEventListener("DOMContentLoaded", function () {
    const hungerBar = document.getElementById("hunger");
    const hungerPercentage = document.getElementById("hunger-percentage");
    const sleepBar = document.getElementById("sleep");
    const sleepPercentage = document.getElementById("sleep-percentage");
    const foodItemSvg = document.querySelector(".food.item svg");
    const lightItemSvg = document.querySelector(".light.item svg");
    const tamagotchiPet = document.querySelector(".pet");
  
    let hungerValue = parseInt(hungerBar.value); // Valor inicial de hambre
    let sleepValue = parseInt(sleepBar.value); // Valor inicial de sueño
    let isSleeping = false; // Estado de si está durmiendo o no
    let hungerInterval;
    let sleepInterval;
  
    // Función para disminuir el hambre automáticamente cada segundo
    function decreaseHunger() {
      if (hungerValue > 0 && !isSleeping) {
        hungerValue--; // Reducir el hambre
        hungerBar.value = hungerValue; // Actualizar el valor del <progress>
        hungerPercentage.textContent = hungerValue + "%"; // Actualizar el porcentaje mostrado
      }
    }
  
    // Función para disminuir el sueño automáticamente cuando está despierto
    function decreaseSleep() {
      if (sleepValue > 0 && !isSleeping) {
        sleepValue--; // Reducir el sueño
        sleepBar.value = sleepValue; // Actualizar el valor de la barra de sueño
        sleepPercentage.textContent = sleepValue + "%"; // Actualizar el porcentaje de sueño
      }
    }
  
    // Alimentar al tamagotchi solo cuando se hace clic en el svg
    foodItemSvg.addEventListener("click", function () {
      if (hungerValue < 100) {
        hungerValue += 10; // Aumentar el hambre
        if (hungerValue > 100) hungerValue = 100; // Evitar que exceda el máximo
        hungerBar.value = hungerValue;
        hungerPercentage.textContent = hungerValue + "%";
      } else {
        alert("El tamagotchi ya está completamente alimentado.");
      }
    });
  
    // Dormir al tamagotchi cuando se hace clic en el ícono de la bombilla
    lightItemSvg.addEventListener("click", function () {
      if (isSleeping) {
        alert("El tamagotchi ya está durmiendo.");
      } else {
        isSleeping = true; // Activar estado de sueño
        tamagotchiPet.classList.add("sleeping"); // Añadir clase CSS para indicar que está durmiendo
        alert("El tamagotchi se está durmiendo.");
        clearInterval(hungerInterval); // Detener el hambre cuando está durmiendo
        clearInterval(sleepInterval); // Detener la disminución del sueño cuando está durmiendo
      }
    });
  
    // Reanudar el sueño al hacer clic nuevamente
    tamagotchiPet.addEventListener("click", function () {
      if (isSleeping) {
        isSleeping = false; // Desactivar estado de sueño
        tamagotchiPet.classList.remove("sleeping"); // Eliminar la clase CSS de sueño
        alert("El tamagotchi se ha despertado.");
        // Iniciar la disminución del hambre y del sueño nuevamente
        hungerInterval = setInterval(decreaseHunger, 1000);
        sleepInterval = setInterval(decreaseSleep, 1000);
      }
    });
  
    // Iniciar la disminución de hambre y sueño
    hungerInterval = setInterval(decreaseHunger, 1000);
    sleepInterval = setInterval(decreaseSleep, 1000);
  });
  