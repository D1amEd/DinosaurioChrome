
const app = document.getElementById("app");
app.style.width = "100%";
app.style.height = "100vh";
app.style.margin = "0";
app.style.display = "flex";
const dino = document.createElement('img')
dino.setAttribute('src', 'https://www.muycomputer.com/wp-content/uploads/2020/08/dinoswords.gif')
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

loadElement(app, canvas);
loadElement(canvas, dino)

function loadElement(parent, element) {
    parent.appendChild(element);
}
let dinoPos
document.body.addEventListener('keyup', function (e) {
    dinoPos = Math.ceil(dino.getBoundingClientRect().top)
    if (e.code === "ArrowUp") {
        dinoPos -= 100;
        dino.style.top = `${dinoPos}px`;

        setTimeout(() => {
            dinoPos += 100;
            dino.style.top = `${dinoPos}px`; return dino.style.top
        }, 100)

    }
})






