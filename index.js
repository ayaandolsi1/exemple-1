const button = document.getElementById("btn-id");
console.log(button);
button.addEventListener("click", updateName);

function updateName(){
    const name = prompt("enter a new name");
    button.textContent =`player 1: ${name}`;
}
