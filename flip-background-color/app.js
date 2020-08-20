const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const button = document.getElementById("btn")
const color = document.querySelector(".color")

button.addEventListener("click", function(){

    var randomNumber = genrateRandomNumber();
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
})

function genrateRandomNumber(){

    return Math.floor(Math.random() * colors.length);
}