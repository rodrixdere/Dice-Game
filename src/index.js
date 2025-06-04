function rollDice() {
    const randomNumber1 = Math.floor(Math.random() * 6) + 1;
    const randomNumber2 = Math.floor(Math.random() * 6) + 1;

    document.querySelector(".img1").setAttribute("src", "images/dice" + randomNumber1 + ".png");
    document.querySelector(".img2").setAttribute("src", "images/dice" + randomNumber2 + ".png");

    const title = document.querySelector("h1");
    if (randomNumber1 > randomNumber2) {
        title.innerHTML = "🚩 Player 1 Wins!";
    } else if (randomNumber2 > randomNumber1) {
        title.innerHTML = "Player 2 Wins! 🚩";
    } else {
        title.innerHTML = "Draw!";
    }
}

// Lanza los dados al cargar la página
rollDice();

// Y también al hacer clic en el botón
document.querySelector(".refresh").addEventListener("click", rollDice);
