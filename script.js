let agua = 5;
let sol = 5;

function actualizarEstado() {
    let estado = document.getElementById("estado");
    let planta = document.getElementById("planta");

    if (agua <= 0 || sol <= 0) {
        estado.textContent = "Estado: 😵 Marchita";
        planta.textContent = "🥀";
    } 
    else if (agua >= 8 && sol >= 8) {
        estado.textContent = "Estado: 🌸 Floreciendo";
        planta.textContent = "🌸";
    } 
    else {
        estado.textContent = "Estado: 😊 Saludable";
        planta.textContent = "🌿";
    }
}

function regar() {
    agua++;
    sol--;
    actualizarEstado();
}

function darSol() {
    sol++;
    agua--;
    actualizarEstado();
}
