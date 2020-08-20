const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const button = document.getElementById("btn")
const color = document.querySelector(".color")

button.addEventListener("click", function(){

    let randomNumber = getRandomColor();
    document.body.style.backgroundColor = randomNumber;
    color.textContent = randomNumber;
})


function getRandomColor(){
    let hexColor = "#"
    for(let k = 0; k< 6; k++){
        hexColor += hex[Math.floor(Math.random() * hex.length)];
    }
    return hexColor
}