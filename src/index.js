function displayRecipe(response){
console.log("recipe generated");
    new Typewriter("#recipe", {
      strings: response.data.answer,
      autoStart: true,
      delay: 1,
      cursor:"",
    });
}

function generateRecipe(event){
    event.preventDefault();

   let instructionsInput= document.querySelector("#user-instructions");
   let apiKey = "0229fcbo68d379b5181571fb4eff1atd";
     let context="You are a vegetarian recipe cooking expert. You love to write delicious and easy vegetarian recipes that only use vegetarian or vegan ingredients. Your mission is to take the user instructions and create a recipe based off of it. Please display it in HTML format. Make sure to follow the user instructions"; 
     let prompt=`User instructions: generate a vegetarian recipe based on ${instructionsInput.value}. <strong>SheCodes AI </strong> at the bottom`;

   let apiUrl =
     `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

     let recipeElement= document.querySelector("#recipe");
     recipeElement.classList.remove("hidden");
     recipeElement.innerHTML = `<span class="blink_me">⌛</span>Generating Recipe  for ${instructionsInput.value}...`;
console.log("Generating recipe");
     console.log(`Prompt: ${prompt}`);
console.log(`Context: ${context}`);

axios.get(apiUrl).then(displayRecipe);}
   
    


let recipeGeneratorForm=document.querySelector("#recipe-generator");


recipeGeneratorForm.addEventListener("submit",generateRecipe);