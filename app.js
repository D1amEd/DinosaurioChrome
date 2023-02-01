const app = document.getElementById("app");
app.style.width = "100%";
app.style.height = "100vh";
app.style.margin = "0";
app.style.display = "flex";
console.log(app);

// Elements
const canvas = document.createElement("div");

canvas.style.width = "100%";
canvas.style.height = "60%";
canvas.style.backgroundColor = "red";
canvas.style.display = "flex";
canvas.style.alignSelf = "center";

loadElement(app, canvas);

function loadElement(parent, element) {
  parent.appendChild(element);
}
