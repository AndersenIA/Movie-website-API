//API = https://v2.api.noroff.dev/square-eyes
//API Key = 5a452143-fc8c-4a17-a666-6a88c639e7be

const API_KEY = "api_key=5a452143-fc8c-4a17-a666-6a88c639e7be";
const BASE_URL = "https://v2.api.noroff.dev/square-eyes";
const API_URL = BASE_URL + API_KEY;

getMovies(BASE_URL);

function getMovies(url) {
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      console.log(data.data);
    });
}
