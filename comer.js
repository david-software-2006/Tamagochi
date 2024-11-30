document.addEventListener("DOMContentLoaded", function () {
  const hungerBar = document.getElementById("hunger");
  const hungerPercentage = document.getElementById("hunger-percentage");
  const foodItemSvg = document.querySelector(".food.item svg"); // Seleccionamos el svg dentro del div

  let hungerValue = parseInt(hungerBar.value); // Valor inicial de hambre

  function decreaseHunger() {
    if (hungerValue > 0) {
      hungerValue--; // Reducir el hambre
      hungerBar.value = hungerValue; // Actualizar el valor del <progress>
      hungerPercentage.textContent = hungerValue + "%"; // Actualizar el porcentaje mostrado
    } else {
      clearInterval(hungerInterval); // Detener el temporizador si llega a 0
      alert("El tamagotchi tiene mucha hambre. ¡Aliméntalo!");
    }
  }

  // Disminuir hambre automáticamente cada 1 segundo
  const hungerInterval = setInterval(decreaseHunger, 1000);

  // Alimentar al tamagotchi solo cuando se hace clic en el svg
  foodItemSvg.addEventListener("click", function () {
    if (hungerValue < 100) {
      hungerValue += 10; // Aumentar el hambre
      if (hungerValue > 100) hungerValue = 100; // Evitar que exceda el máximo
      hungerBar.value = hungerValue;
      hungerPercentage.textContent = hungerValue + "%";
    } else {
      // Si ya está al 100% de hambre
      alert("El tamagotchi ya está completamente alimentado.");
    }
  });
});
