// Definera array av namn
let people = ["Maria", "Anna", "Alex", "Amad", "Nadia", "Mikel"];


export function initSearch(people) { // rör ej denna rad

  // Hämta HTML-element
  let searchInput = document.getElementById("searchInput");
  let searchBtn = document.getElementById("searchBtn");
  let resultDisplay = document.getElementById("resultDisplay");
  
  // Lägg till en klickhändelse på "Sök"-knappen
  searchBtn.addEventListener("click",() => {
  
    // 1. Hämta texten i searchInput.value
    let inputText = searchInput.value;
    // 2. Skapa en boolean för found
    let found= false;
    // 3. Loopa igenom people-arrayen
    for(name of people){
      // 4. Jämför texten med varje namn i arrayen
      if (inputText === name){
        found = true;
        // 5. Om du hittar en match, skriv ut "Namn hittades!" i resultDisplay, ändra found till true
          resultDisplay.innerHTML = `Namn hittades: ${name}`;
          console.log("Namn hittades!");
        }
    }
    // 6. Om du efter loopen inte hittat något, skriv ut "Namn hittades inte." och gör found till false igen.
    if (!found){
      resultDisplay.innerHTML = "Namn hittades inte.";
    }    
  });
}



// rör ej dessa rader
document.addEventListener("DOMContentLoaded", () => {
  initSearch(people);
});