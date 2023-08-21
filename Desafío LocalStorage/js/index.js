let boton = document.getElementById("buttonText")
boton.addEventListener("click",() => {
let indexTxt = document.getElementById("inputText").value
localStorage.setItem("index", JSON.stringify(indexTxt))
});  
