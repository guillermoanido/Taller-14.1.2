let options = document.getElementById("options");
let showOptions = document.getElementById("listOptions");


options.addEventListener("click", ()=>{
   showOptions.classList.toggle("d-none");
    showOptions.classList.add("d-block");
})
