const initialCart = [
  { name: "Notebook", price: 120, qty: 1 },
  { name: "Pen Pack", price: 60, qty: 1 },
  { name: "Water Bottle", price: 350, qty: 1 }
];

let cart = initialCart.map(item => ({ ...item }));

const cartItemsElement = document.querySelector("#cart-items");
const cartContentElement = document.querySelector("#cart-content");
const emptyCartElement = document.querySelector("#empty-cart");
const subtotalElement = document.querySelector("#subtotal");
const discountElement = document.querySelector("#discount");
const payableElement = document.querySelector("#payable");
const discountNoteElement = document.querySelector("#discount-note");

const formatRupees = amount =>
  new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    minimumFractionDigits: 2
  }).format(amount);

function renderCart() {
  if (cart.length === 0) {
    cartContentElement.hidden = true;
    emptyCartElement.hidden = false;
    return;
  }

  cartContentElement.hidden = false;
  emptyCartElement.hidden = true;

  cartItemsElement.innerHTML = cart.map((item, index) => `
    <tr>
      <td class="item-name">${item.name}</td>
      <td class="price">${formatRupees(item.price)}</td>
      <td>
        <div class="quantity-control" aria-label="Quantity for ${item.name}">
          <button class="qty-btn" type="button" data-action="decrease" data-index="${index}" aria-label="Decrease ${item.name} quantity">−</button>
          <span class="qty-value">${item.qty}</span>
          <button class="qty-btn" type="button" data-action="increase" data-index="${index}" aria-label="Increase ${item.name} quantity">+</button>
        </div>
      </td>
      <td class="right line-total">${formatRupees(item.price * item.qty)}</td>
      <td><button class="remove-btn" type="button" data-action="remove" data-index="${index}">Remove</button></td>
    </tr>
  `).join("");

  updateSummary();
}

function updateSummary() {
  const subtotal = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  const discount = subtotal >= 1000 ? subtotal * 0.10 : 0;
  const payable = subtotal - discount;

  subtotalElement.textContent = formatRupees(subtotal);
  discountElement.textContent = formatRupees(discount);
  payableElement.textContent = formatRupees(payable);
  discountNoteElement.textContent = discount > 0
    ? "10% discount applied to your order."
    : "Add items worth ₹1,000 to receive a 10% discount.";
}

// Event delegation handles all quantity and remove buttons.
cartItemsElement.addEventListener("click", event => {
  const button = event.target.closest("button[data-action]");
  if (!button) return;

  const index = Number(button.dataset.index);
  const action = button.dataset.action;

  if (action === "increase") {
    cart[index].qty += 1;
  } else if (action === "decrease") {
    cart[index].qty = Math.max(1, cart[index].qty - 1);
  } else if (action === "remove") {
    cart.splice(index, 1);
  }

  renderCart();
});

document.querySelector("#restore-cart").addEventListener("click", () => {
  cart = initialCart.map(item => ({ ...item }));
  renderCart();
});

renderCart();
