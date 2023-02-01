
const app = document.getElementById("app");
app.style.width = "100%";
app.style.height = "100vh";
app.style.margin = "0";
app.style.display = "flex";
console.log(app);
const dino = document.createElement('img')
dino.setAttribute('src', 'https://www.muycomputer.com/wp-content/uploads/2020/08/dinoswords.gif')
// Elements
const canvas = document.createElement("div");

canvas.style.width = "100%";
canvas.style.height = "60%";
canvas.style.backgroundColor = "red";
canvas.style.display = "flex";
canvas.style.alignSelf = "center";

loadElement(app, canvas);
loadElement(canvas,app)

function loadElement(parent, element) {
  parent.appendChild(element);
}


// let val=0;
 
// dino.addEventListener('keyup',function(e){
//     if(e.code===arrowUp){
        
//     }
// })




