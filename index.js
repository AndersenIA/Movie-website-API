//API = https://v2.api.noroff.dev/square-eyes
//API Key = 5a452143-fc8c-4a17-a666-6a88c639e7be

const API_KEY = "api_key=5a452143-fc8c-4a17-a666-6a88c639e7be";
const BASE_URL = "https://v2.api.noroff.dev/square-eyes";
const API_URL = BASE_URL + API_KEY;

const main = document.getElementById("main");
const form = document.getElementById("form");
const search = document.getElementById("search");

const filter = document.getElementById("filter"); // Reference to the filter dropdown

let allMovies = []; // Store all movies for filtering

getMovies(BASE_URL);

function getMovies(url) {
  // Show loading indicator
  const loadingIndicator = document.getElementById("loading");
  loadingIndicator.style.display = "block";

  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      // console.log(data.data);
      allMovies = data.data;
      showMovies(data.data);
    })
    .finally(() => {
      // Hide loading indicator
      loadingIndicator.style.display = "none";
    });
}

function showMovies(data) {
  main.innerHTML = "";

  data.forEach((movie) => {
    const { id, title, image, rating, description, genre } = movie;
    const movieEl = document.createElement("div");

    movieEl.classList.add("movie");
    movieEl.innerHTML = `
      <img
          src="${image.url}"
          alt="${title}"
        />

        <div class="movie-info">
          <h3>${title}</h3>
          <span class="${getColor(rating)}">${rating}</span>
        </div>

        <div class="overview">
          <h3>overview</h3>
          ${description}
        </div>


    `;

    movieEl.addEventListener("click", () => {
      // Redirect to the movie details page
      window.location.href = `movie.html?id=${id}`; // Change 'movie.html' to your actual movie detail page
      // console.log(id);
    });

    main.appendChild(movieEl);
  });
}

function filterMovies(genre) {
  // console.log("Filter function called");
  const selectedGenre = filter.value; // Get the selected genre from the dropdown
  let filteredMovies;

  if (selectedGenre === "default") {
    // If the default option is selected, show all movies
    filteredMovies = allMovies;
  } else {
    // Filter movies based on the selected genre
    filteredMovies = allMovies.filter((movie) => movie.genre === selectedGenre);
  }

  showMovies(filteredMovies); // Show filtered movies
}

// Add event listener for the filter dropdown
filter.addEventListener("change", filterMovies);

// Add event listener for the search input
search.addEventListener("input", function () {
  const searchValue = search.value.toLowerCase(); // Get the search input value
  const filteredMovies = allMovies.filter(
    (movie) => movie.title.toLowerCase().includes(searchValue) // Filter movies by title
  );
  showMovies(filteredMovies); // Show filtered movies based on search
});

function getColor(vote) {
  if (vote >= 8) {
    return "green";
  } else if (vote >= 5) {
    return "orange";
  } else {
    return "red";
  }
}
