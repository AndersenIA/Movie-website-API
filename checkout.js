// Function to load cart data from local storage and display it
function loadCheckout() {
  const savedCart = localStorage.getItem("cart");
  const checkoutList = document.getElementById("checkoutContent");
  const totalPriceElement = document.getElementById("totalPrice");
  let grandTotal = 0;

  if (savedCart) {
    const cart = JSON.parse(savedCart);
    checkoutList.innerHTML = ""; // Clear previous content

    for (let product in cart) {
      const listItem = document.createElement("li");
      listItem.classList.add("checkout-item"); // Add class for styling

      listItem.innerHTML = `
        <img class="checkout-img" src="${
          cart[product].imgSrc
        }" alt="${product}" ">
        <span class="checkout-product-name">${product}-</span>
        <span class="checkout-quantity">Quantity: ${
          cart[product].quantity
        }-</span>
        <span class="checkout-total-price">Total Price: kr${cart[
          product
        ].totalPrice.toFixed(2)}</span>
      `;

      checkoutList.appendChild(listItem);
      grandTotal += cart[product].totalPrice; // Calculate grand total
    }
  }

  // Display the grand total
  totalPriceElement.classList.add("checkout-grand-total"); // Add class for styling
  totalPriceElement.innerHTML = `Total Amount: kr${grandTotal.toFixed(2)}`;
}

// Call loadCheckout on page load
// window.onload = loadCheckout;
window.addEventListener("DOMContentLoaded", loadCheckout);

document
  .getElementById("checkoutButton")
  .addEventListener("click", function (event) {
    event.preventDefault(); // Prevent the default anchor behavior
    clearCart(); // Clear the cart
    window.location.href = "checkout.html"; // Redirect to checkout page
  });

function clearCart() {
  for (let product in cart) {
    delete cart[product]; // Remove each item from the cart
  }
  updateCartDisplay(); // Update the cart display
  updateCartCount(); // Update the cart count
  saveCart(); // Save the empty cart to local storage
}
