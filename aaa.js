let cart = [];

function showMessage() {
  alert("أهلا بك! انطلق في التسوق من Ahmed Store 🛒");
}

function addToCart(productName) {
  cart.push(productName);
  updateCart();
}

function updateCart() {
  const cartCount = document.getElementById("cart-count");
  const cartItems = document.getElementById("cart-items");
  const cartEmpty = document.getElementById("cart-empty");

  cartCount.textContent = cart.length;
  cartItems.innerHTML = "";

  if (cart.length === 0) {
    cartEmpty.style.display = "block";
  } else {
    cartEmpty.style.display = "none";
    cart.forEach(item => {
      const li = document.createElement("li");
      li.textContent = item;
      cartItems.appendChild(li);
    });
  }
}
