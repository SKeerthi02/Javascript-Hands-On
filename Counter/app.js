const number = document.getElementById("number");

let counter = 0;

const button = document.querySelectorAll(".btn");

button.forEach( function(btn){
    btn.addEventListener("click", function(event){
        const classNames = event.currentTarget.classList;
        if(classNames.contains("increase")){
            counter += 1
        }
        else if(classNames.contains("decrease")){
            counter -= 1
        }
        else{
            counter = 0
        }
        number.textContent = counter
        counter > 0 ? (number.style.color = "green"): counter == 0 ? number.style.color = "#222":(number.style.color = "Red")
    })
})

