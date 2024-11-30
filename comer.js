//  // Inicialización del estado del Tamagotchi
//  let hungerLevel = 5;

//  // Obtener referencia al botón (SVG)
//  const feedButton = document.getElementById('food');
//  const tamagotchiStatus = document.getElementById('tamagotchi');

//  // Función para alimentar al Tamagotchi
//  function feedTamagotchi() {
//    if (hungerLevel > 0) {
//      hungerLevel--;
//      tamagotchiStatus.textContent = `Nivel de hambre: ${hungerLevel}`;
//      alert("¡Has alimentado a tu Tamagotchi!");
//    } else {
//      alert("¡Tu Tamagotchi ya está satisfecho!");
//    }
//  }

document.addEventListener("DOMContentLoaded", function () {
    const hungerFill = document.querySelector(".hunger-fill");
    let hungerLevel = 100; // Nivel inicial de hambre (0% = vacío, 100% = lleno)
  
    function decreaseHunger() {
      hungerLevel -= 5; // Reduce el hambre en 5% cada vez
      if (hungerLevel < 0) hungerLevel = 0; // Evita valores negativos
      hungerFill.style.width = hungerLevel + "%"; // Actualiza el ancho de la barra
  
      if (hungerLevel === 0) {
        alert("El tamagotchi tiene mucha hambre. ¡Aliméntalo!");
        clearInterval(hungerTimer); // Detén el temporizador si llega a 0
      }
    }
  
    // Temporizador para disminuir hambre cada 2 segundos
    const hungerTimer = setInterval(decreaseHunger, 2000);
  
    // Simula alimentar al tamagotchi al hacer clic en el botón de comida
    document.querySelector("#food").addEventListener("click", function () {
      hungerLevel += 20; // Incrementa el hambre en 20%
      if (hungerLevel > 100) hungerLevel = 100; // Evita exceder el 100%
      hungerFill.style.width = hungerLevel + "%"; // Actualiza el ancho de la barra
    });
  });
  