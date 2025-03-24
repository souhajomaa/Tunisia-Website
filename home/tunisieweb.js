function search() {
  var list = ["tunis", "monastir", "djerba", "sousse", "tozeur", "kairouan"];

  var city = document.querySelector(".form-control").value.trim().toLowerCase();
  var resultElement = document.getElementById("search-result");
  var suggestionsElement = document.getElementById("suggestions");

  suggestionsElement.innerHTML = "";

  if (city === "") {
      resultElement.innerText = "";
      return;
  }

  if (list.includes(city)) {
      resultElement.innerText = `✔ Oui, ${city.charAt(0).toUpperCase() + city.slice(1)} existe dans la liste!`;
      resultElement.style.color = "green";
  } else {
      resultElement.innerText = " Désolé, cette ville n'existe pas dans la liste.";
      resultElement.style.color = "red";

      // Trouver des suggestions qui contiennent la recherche
      var suggestions = list.filter(v => v.includes(city));

      if (suggestions.length > 0) {
          resultElement.innerText += " Peut-être recherchez-vous :";
          suggestions.forEach(suggestion => {
              let li = document.createElement("li");
              li.innerText = suggestion.charAt(0).toUpperCase() + suggestion.slice(1);
              li.style.cursor = "pointer";
              li.style.color = "blue";
              li.addEventListener("click", function() {
                  document.querySelector(".form-control").value = suggestion;
                  search(); // Relancer la recherche avec la suggestion choisie
              });
              suggestionsElement.appendChild(li);
          });
      }
  }
}

// Écouteur d'événement pour la recherche en temps réel
document.querySelector(".form-control").addEventListener("input", search);

// Changement de couleur du bouton lors du clic
const btn = document.querySelector("#btn");
if (btn) {
  btn.addEventListener("click", () => {
      btn.style.backgroundColor = "#3BA13D";
  });
}
