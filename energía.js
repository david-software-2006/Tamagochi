/*
  Typograph: https://www.deviantart.com/excessts/art/My-chemical-romance-55579208
*/

const COLORS_BUTTON = [
    { text: "Rojo", color: "#890000", buttonsColor: "gold" },
    { text: "Turquesa", color: "#19B1AC", buttonsColor: "#ccc" },
    { text: "Negro", color: "#111", buttonsColor: "#bbb" },
    { text: "Azul", color: "#001F91", buttonsColor: "#ddd" },
    { text: "Amarillo", color: "#d68111", buttonsColor: "#1836a3" }
  ];
  
  const changeColor = document.querySelector(".change-color");
  const tamagotchi = document.querySelector(".tamagotchi");
  
  changeColor.innerHTML = COLORS_BUTTON.map(color => {
    return `<button style="--color: ${color.color}; --text-color: ${color.buttonsColor}">
      <span>${color.text}</span>
    </button>`;
  }).join("");
  
  const buttons = Array.from(document.querySelectorAll("button"));
  buttons.forEach((button, index) => {
    button.addEventListener("click", () => {
      tamagotchi.style.setProperty("--body-color", COLORS_BUTTON[index].color);
      tamagotchi.style.setProperty("--buttons-color", COLORS_BUTTON[index].buttonsColor);
    });
  });