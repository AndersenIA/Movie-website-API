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
      const movie = data.data; // Assuming the API returns the movie object directly
      displayMovieDetails(movie);
    })
    .catch((error) => {
      console.error("Error fetching movie details:", error);
      // Optionally display an error message to the user
    });
}

function displayMovieDetails(movie) {
  const main = document.getElementById("main_movie");
  const loadingIndicator = document.getElementById("loading_movie");

  // Show loading indicator
  loadingIndicator.style.display = "block";

  // Simulate fetching movie details (if needed)
  setTimeout(() => {
    // Simulating a fetch delay
    const { id, title, image, rating, description, price } = movie; // Destructure the movie object

    const movieEl = document.createElement("div");
    movieEl.classList.add("specific_movie");
    movieEl.innerHTML = `
        <img class="movie-img" src="${image.url}" alt="${title}" />
        <div class="movie-txt">
            <div class="spes-movie-info">
                <h3>${title}</h3>
                <span class="${getColor(rating)}">${rating}</span>
            </div>
            <div class="overview-movie">
                <h3>Description</h3>
                ${description}
                <h4 class="price">Price</h4>
                ${price}kr
            </div>
            <div class="buy-now-div">
                <a href="#" class="add-to-cart" 
                   data-id="${id}" 
                   data-title="${title}" 
                   data-price="${price}" 
                   data-image="${image.url}">Add to cart!</a>
            </div>
        </div>
    `;

    const addToCartButton = movieEl.querySelector(".add-to-cart");
    addToCartButton.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();

      const productName = e.target.getAttribute("data-title");
      const productPrice = parseFloat(e.target.getAttribute("data-price"));
      const productImage = e.target.getAttribute("data-image");

      addToCart(productName, productPrice, productImage);
    });

    main.innerHTML = ""; // Clear previous content
    main.appendChild(movieEl);

    // Hide loading indicator
    loadingIndicator.style.display = "none";
  }, 1000); // Simulating a 1 second delay for fetching
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
