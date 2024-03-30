function generateRecipe(event){
    event.preventDefault();
   
    let recipeResults= document.querySelector("#recipe");
    new Typewriter("#recipe", {
      strings: "Recipe is here",
      autoStart: true,
      delay: 1,
    });
}

let recipeGeneratorForm=document.querySelector("#recipe-generator");


recipeGeneratorForm.addEventListener("submit",generateRecipe);