const jokeElement = document.getElementById("joke");
const newJokeBtn = document.getElementById("new-joke-btn");
const API = "https://icanhazdadjoke.com/";

async function fetchJoke() {
  try {
    // Make an HTTP GET request to the API with a header indicating that we expect a JSON response
    const response = await fetch(API, {
      headers: {
        Accept: "application/json",
      },
    });

    // Parse the JSON response into a JavaScript object
    const data = await response.json();

    // Display the joke in the HTML element
    jokeElement.innerHTML = data.joke;
  } catch (error) {
    // If an error occurs, display an error message and log the error to the console
    jokeElement.innerHTML = "Oops! Could not fetch a joke at this time.";
    console.error("Error fetching joke:", error);
  }
}

// Add a click event listener to the button to fetch a new joke when clicked
newJokeBtn.addEventListener("click", fetchJoke);

// Fetch an initial joke when the page loads
fetchJoke();

const xEl = document.querySelector(".x-icon");
const copyEl = document.querySelector(".copy-icon");
