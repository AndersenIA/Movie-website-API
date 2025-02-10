// document.getElementById("cartIcon").addEventListener("click", function () {
//   const cartPopup = document.getElementById("cartPopup");
//   cartPopup.style.display =
//     cartPopup.style.display === "block" ? "none" : "block";
// });

// document.getElementById("closeCart").addEventListener("click", function () {
//   document.getElementById("cartPopup").style.display = "none";
// });

// const cart = {};

// function addToCart(productName, productPrice) {
//   if (cart[productName]) {
//     cart[productName].quantity += 1;
//     cart[productName].totalPrice += productPrice;
//   } else {
//     cart[productName] = {
//       quantity: 1,
//       totalPrice: productPrice,
//     };
//   }
//   updateCartDisplay();
//   saveCart();
// }

// function updateCartDisplay() {
//   const cartList = document.getElementById("cartContent");
//   cartList.innerHTML = "";
//   for (let product in cart) {
//     const listItem = document.createElement("li");
//     listItem.innerHTML = `
//             ${product}<br>
//             Quantity: ${cart[product].quantity}<br>
//             Total Price: kr${cart[product].totalPrice.toFixed(2)}
//         `;

//     // Create a plus button for adding more
//     const addButton = document.createElement("button");
//     addButton.innerHTML = `+`; // Plus symbol
//     addButton.classList.add("addcart");
//     addButton.addEventListener("click", (e) => {
//       e.stopPropagation(); // Prevent the click from triggering the cart popup
//       addToCart(product, cart[product].totalPrice / cart[product].quantity); // Add the same product again
//     });

//     // Create a minus button for removing one item
//     const removeButton = document.createElement("button");
//     removeButton.innerHTML = `-`; // Minus symbol
//     removeButton.classList.add("removecart");
//     removeButton.addEventListener("click", (e) => {
//       e.stopPropagation(); // Prevent the click from triggering the cart popup
//       if (cart[product].quantity > 1) {
//         cart[product].quantity -= 1; // Decrease quantity
//         cart[product].totalPrice -=
//           cart[product].totalPrice / cart[product].quantity + 1; // Adjust total price
//       } else {
//         removeFromCart(product); // Remove the item if quantity is 1
//       }
//       updateCartDisplay(); // Update the cart display
//       saveCart(); // Save the updated cart to local storage
//     });

//     // Append buttons to the list item
//     listItem.appendChild(addButton);
//     listItem.appendChild(removeButton);
//     cartList.appendChild(listItem);
//   }
// }

// function removeFromCart(productName) {
//   delete cart[productName]; // Remove the item from the cart
//   updateCartDisplay(); // Update the cart display
//   saveCart(); // Save the updated cart to local storage
// }

// function saveCart() {
//   localStorage.setItem("cart", JSON.stringify(cart));
// }

// function loadCart() {
//   const savedCart = localStorage.getItem("cart");
//   if (savedCart) {
//     Object.assign(cart, JSON.parse(savedCart));
//     updateCartDisplay();
//   }
// }

// // Call loadCart on page load
// window.onload = loadCart;

document.getElementById("cartIcon").addEventListener("click", function () {
  const cartPopup = document.getElementById("cartPopup");
  cartPopup.style.display =
    cartPopup.style.display === "block" ? "none" : "block";
});

document.getElementById("closeCart").addEventListener("click", function () {
  document.getElementById("cartPopup").style.display = "none";
});

const cart = {};

function addToCart(productName, productPrice) {
  if (cart[productName]) {
    cart[productName].quantity += 1;
    cart[productName].totalPrice += cart[productName].originalPrice; // Add the original price
  } else {
    cart[productName] = {
      quantity: 1,
      totalPrice: productPrice, // Total price for the first item
      originalPrice: productPrice, // Store the original price
    };
  }
  updateCartDisplay();
  saveCart();
}

function updateCartDisplay() {
  const cartList = document.getElementById("cartContent");
  cartList.innerHTML = "";
  for (let product in cart) {
    const listItem = document.createElement("li");
    listItem.innerHTML = `
            ${product}<br>
            Quantity: ${cart[product].quantity}<br>
            Total Price: kr${cart[product].totalPrice.toFixed(2)}
        `;

    // Create a plus button for adding more
    const addButton = document.createElement("button");
    addButton.innerHTML = `+`; // Plus symbol
    addButton.classList.add("addcart");
    addButton.addEventListener("click", (e) => {
      e.stopPropagation(); // Prevent the click from triggering the cart popup
      addToCart(product, cart[product].originalPrice); // Add the same product again
    });

    // Create a minus button for removing one item
    const removeButton = document.createElement("button");
    removeButton.innerHTML = `-`; // Minus symbol
    removeButton.classList.add("removecart");
    removeButton.addEventListener("click", (e) => {
      e.stopPropagation(); // Prevent the click from triggering the cart popup
      if (cart[product].quantity > 1) {
        cart[product].quantity -= 1; // Decrease quantity
        cart[product].totalPrice -= cart[product].originalPrice; // Adjust total price using original price
      } else {
        removeFromCart(product); // Remove the item if quantity is 1
      }
      updateCartDisplay(); // Update the cart display
      saveCart(); // Save the updated cart to local storage
    });

    // Append buttons to the list item
    listItem.appendChild(addButton);
    listItem.appendChild(removeButton);
    cartList.appendChild(listItem);
  }
}

function removeFromCart(productName) {
  delete cart[productName]; // Remove the item from the cart
  updateCartDisplay(); // Update the cart display
  saveCart(); // Save the updated cart to local storage
}

function saveCart() {
  localStorage.setItem("cart", JSON.stringify(cart));
}

function loadCart() {
  const savedCart = localStorage.getItem("cart");
  if (savedCart) {
    Object.assign(cart, JSON.parse(savedCart));
    updateCartDisplay();
  }
}

// Call loadCart on page load
window.onload = loadCart;
