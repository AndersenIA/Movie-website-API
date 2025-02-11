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
window.onload = loadCheckout;
