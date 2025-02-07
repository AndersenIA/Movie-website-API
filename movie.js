// // movie.html script
// const params = new URLSearchParams(window.location.search);
// const movieId = params.get("id");
// const BASE_URL = "https://v2.api.noroff.dev/square-eyes";

// getMovies(BASE_URL);

// function getMovies(url) {
//   fetch(url)
//     .then((res) => res.json())
//     .then((data) => {
//       console.log(data.data);
//     });
// }

// if (movieId) {
//   fetch(`${BASE_URL}/${movieId}`) // Replace with your actual API endpoint
//     .then((res) => res.json())
//     .then((data) => {
//       const movie = data; // Assuming the API returns the movie object directly
//       displayMovieDetails(movie);
//     })
//     .catch((error) => {
//       console.error("Error fetching movie details:", error);
//       // Handle error (e.g., show a message to the user)
//     });

//   console.log(movieId);
// }

// function displayMovieDetails(movie) {
//   const main = document.getElementById("main_movie"); // Assuming you have a main element to display the details
//   const { id, title, image, rating, description } = movie;
//   const movieEl = document.createElement("div");

//   movieEl.classList.add("movie");
//   movieEl.innerHTML = `
//       <img
//           src="${image.url}"
//           alt="${title}"
//         />

//         <div class="movie-info">
//           <h3>${title}</h3>
//           <span class="${getColor(rating)}">${rating}</span>
//         </div>

//         <div class="overview">
//           <h3>overview</h3>
//           ${description}
//         </div>

//     `;
//   main.appendChild(movieEl);
// }

const params = new URLSearchParams(window.location.search);
const movieId = params.get("id");
const BASE_URL = "https://v2.api.noroff.dev/square-eyes";

if (movieId) {
  fetch(`${BASE_URL}/${movieId}`) // Adjust this based on your API structure
    .then((res) => {
      if (!res.ok) {
        throw new Error("Network response was not ok");
      }
      return res.json();
    })
    .then((data) => {
      console.log(data); // Log the entire response to see its structure
      const movie = data.data; // Assuming the API returns the movie object directly
      displayMovieDetails(movie);
    })
    .catch((error) => {
      console.error("Error fetching movie details:", error);
      // Optionally display an error message to the user
    });
}

function displayMovieDetails(movie) {
  const main = document.getElementById("main_movie"); // Assuming you have a main element to display the details
  const { id, title, image, rating, description } = movie;
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
          <h3>Overview</h3>
          ${description}
        </div>
    `;
  main.appendChild(movieEl);
}

function getColor(vote) {
  if (vote >= 8) {
    return "green";
  } else if (vote >= 5) {
    return "orange";
  } else {
    return "red";
  }
}
