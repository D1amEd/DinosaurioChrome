
const app = document.getElementById("app");
app.style.width = "100%";
app.style.height = "100vh";
app.style.margin = "0";
app.style.display = "flex";
const dino = document.createElement('img')
const contador = document.createElement("div");
const counter = document.createElement('span')
const hPoints = document.createElement('span')
counter.innerText = "Contador: "
dino.setAttribute('src', 'img/Dino.gif')
dino.style.position = "absolute"

// Elements
const canvas = document.createElement("div");

canvas.style.width = "100%";
canvas.style.height = "60%";
canvas.style.backgroundColor = "red";
canvas.style.display = "flex";
canvas.style.alignSelf = "center";
canvas.style.justifyContent = "center"
canvas.style.alignItems = "center"
contador.append(counter, hPoints)

loadElement(app, canvas);
loadElement(canvas, dino)
document.body.prepend(contador)

function loadElement(parent, element) {
    parent.appendChild(element);
}

let dinoPos
let bol = true //Tal vez esta solución no sea tan rentable, puede mirarse otra.
document.body.addEventListener('keyup', function (e) {
    dinoPos = Math.ceil(dino.getBoundingClientRect().top)
    if (e.code === "ArrowUp" && bol) { 
        dinoPos -= 100;
        dino.style.top = `${dinoPos}px`;
        bol = false
        setTimeout(() => {
            dinoPos += 100;
            dino.style.top = `${dinoPos}px`; bol = true; return dino.style.top
        }, 500)

    }
})

let points = 0
setInterval(function () { points++; hPoints.innerText = points }, 300)






