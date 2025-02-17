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

// function displayMovieDetails(movie) {
//   const main = document.getElementById("main_movie"); // Assuming you have a main element to display the details
//   const { id, title, image, rating, description, price } = movie;
//   const movieEl = document.createElement("div");

//   movieEl.classList.add("specific_movie");
//   movieEl.innerHTML = `
//       <img
//           class="movie-img"
//           src="${image.url}"
//           alt="${title}"
//         />

//         <div class="movie-txt">
//           <div class="spes-movie-info">
//             <h3>${title}</h3>
//             <span class="${getColor(rating)}">${rating}</span>
//           </div>

//           <div class="overview-movie">
//             <h3>Description</h3>
//             ${description}
//             <h4 class="price">Price</h4>
//             ${price}kr
//           </div>

//           <div class="buy-now-div">
//           <a href="#" class="add-to-cart" data-id="${id}" data-title="${title}" data-price="${price}">Add to cart!</a>
//           </div>
//         </div>
//     `;

//   console.log(movie);

//   const addToCartButton = movieEl.querySelector(".add-to-cart");
//   addToCartButton.addEventListener("click", (e) => {
//     e.stopPropagation(); // Prevent the click from triggering the movie detail page redirect
//     const productName = e.target.getAttribute("data-title");
//     const productPrice = parseFloat(e.target.getAttribute("data-price"));

//     const productImage = e.target.getAttribute("data-image");

//     console.log("Product Name:", productName);
//     console.log("Product Price:", productPrice);
//     console.log("Product Image:", productImage);
//     addToCart(productName, productPrice, productImage);
//   });

//   main.appendChild(movieEl);
// }

//FUNKER
// function displayMovieDetails(movie) {
//   const main = document.getElementById("main_movie");
//   const { id, title, image, rating, description, price } = movie; // Destructure the movie object
//   const loadingIndicator = document.getElementById("loading_movie");

//   // Show loading indicator
//   loadingIndicator.style.display = "block";

//   const movieEl = document.createElement("div");
//   movieEl.classList.add("specific_movie");
//   movieEl.innerHTML = `
//       <img class="movie-img" src="${image.url}" alt="${title}" />
//       <div class="movie-txt">
//           <div class="spes-movie-info">
//               <h3>${title}</h3>
//               <span class="${getColor(rating)}">${rating}</span>
//           </div>
//           <div class="overview-movie">
//               <h3>Description</h3>
//               ${description}
//               <h4 class="price">Price</h4>
//               ${price}kr
//           </div>
//           <div class="buy-now-div">
//               <a href="#" class="add-to-cart"
//                  data-id="${id}"
//                  data-title="${title}"
//                  data-price="${price}"
//                  data-image="${
//                    image.url
//                  }">Add to cart!</a> <!-- Set the data-image attribute here -->
//           </div>
//       </div>
//   `;

//   const addToCartButton = movieEl.querySelector(".add-to-cart");
//   addToCartButton.addEventListener("click", (e) => {
//     e.preventDefault();
//     e.stopPropagation();

//     const productName = e.target.getAttribute("data-title");
//     const productPrice = parseFloat(e.target.getAttribute("data-price"));
//     const productImage = e.target.getAttribute("data-image"); // This retrieves the image URL

//     console.log("Product Name:", productName);
//     console.log("Product Price:", productPrice);
//     console.log("Product Image:", productImage); // This should now log the correct image URL

//     addToCart(productName, productPrice, productImage);
//   });

//   main.appendChild(movieEl);
// }

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

      // console.log("Product Name:", productName);
      // console.log("Product Price:", productPrice);
      // console.log("Product Image:", productImage);

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
