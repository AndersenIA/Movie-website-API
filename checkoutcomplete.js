// checkoutcomplete.js

// Function to clear the cart
function clearCart() {
  const cart = {}; // Create a new empty cart
  localStorage.setItem("cart", JSON.stringify(cart)); // Save the empty cart to local storage
}

// Call the clearCart function when the page loads
window.addEventListener("DOMContentLoaded", function () {
  clearCart(); // Clear the cart when the checkout complete page loads
});
