const app = document.getElementById("app");
app.style.width = "100%";
app.style.height = "100vh";
app.style.margin = "0";
app.style.display = "flex";
console.log(app);

// Elements
const canvas = document.createElement("div");
const floor = document.createElement("div");

/* Styling */
canvas.style.width = "100%";
canvas.style.height = "60%";
canvas.style.backgroundColor = "red";
canvas.style.display = "flex";
canvas.style.alignSelf = "center";

floor.style.height = "20px";
floor.style.width = "100px";
floor.style.backgroundColor = "green";
floor.style.alignSelf = "flex-end";
// floor.style.animation = "3s ease-in 1s infinite reverse both running slidein";
// floor.animationDuration = "3s";
// floor.animationName = "slidein";

const newspaperSpinning = [
  { marginLeft: "100%", width: "300%" },
  { marginLeft: "0%", width: "100%" },
];

const newspaperTiming = {
  duration: 2000,
  iterations: Infinity,
};

floor.animate(newspaperSpinning, newspaperTiming);
loadElement(app, canvas);
loadElement(canvas, floor);

function loadElement(parent, element) {
  parent.appendChild(element);
}
