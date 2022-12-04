console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

let btn = document.getElementById("submitSearch");
let input = document.getElementById("searchWord");
let img = document.getElementsByTagName("img")[0];
let feedback = document.getElementById("feedback");
let url = "https://api.giphy.com/v1/gifs/translate";
let key = "uzSAdRQ8bhTaN2osrUOtv1SEg8msOWrN";

btn.addEventListener("click", (event) => {
  fetch(`${url}?api_key=${key}&s=${input.value}`, { mode: "cors" })
    .then((result) => result.json())
    .then((response) => {
      img.src = response.data.images.original.url;
      input.value = "";
      feedback.textContent = "";
      event.preventDefault();
    })
    .catch((err) => {
      img.src = "#";
      console.error(err);
      feedback.textContent = err.message;
    });
});
