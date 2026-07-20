document.addEventListener("DOMContentLoaded", () => {
  const cartSummary = document.getElementById("cart-products");
  const cartTotalElement = document.getElementById("cart-totals");
  const cart = JSON.parse(localStorage.getItem("cart")) || [];

  // 2. Helper to calculate the base subtotal
  function calculateSubtotal() {
    return cart.reduce(
      (total, product) => total + product.price * product.quantity,
      0
    );
  }

  // 3. Render individual product cards
  function orderItem(product) {
    return `
        <div class="mb-6 pb-6 border-b border-outline-variant/30 w-full">
            <div class="flex gap-4 mb-3">
                <div class="w-16 h-16 rounded-lg overflow-hidden shrink-0 border border-outline-variant/20">
                    <img class="w-full h-full object-cover" alt="${
                      product.name
                    }" src="${product.product_image}"/>
                </div>
                <div class="flex-grow">
                    <div class="flex justify-between items-start gap-2">
                        <span class="text-body-md font-medium text-on-surface">${
                          product.quantity
                        }x ${product.name}</span>
                        <span class="text-body-md font-bold text-on-surface whitespace-nowrap">KSh ${
                          product.price * product.quantity
                        }</span>
                    </div>
                    <span class="text-label-sm font-label-sm text-secondary bg-secondary-container px-2 py-0.5 rounded-full inline-block mt-1">Gluten-Free</span>
                </div>
            </div>
            <div class="bg-surface-container-lowest rounded-lg p-3 mt-2 border border-outline-variant/30">
                <label class="block text-label-sm font-label-sm text-on-surface-variant mb-1">Requested Pickup Date</label>
                <input class="input-elegant w-full rounded-md px-3 py-1.5 text-body-md text-sm border border-outline-variant/50" type="date" required/>
            </div>
        </div>`;
  }

  // 4. Render Cart Totals layout
  function CartTotal() {
    const subtotal = calculateSubtotal();
    const deliveryFee = 150;
    const vat = Math.round(subtotal * 0.16); // 16% VAT
    const grandTotal = subtotal + deliveryFee + vat;

    return `
        <div class="space-y-3 w-full">
            <div class="flex justify-between text-body-md font-body-md text-on-surface-variant">
                <span>Subtotal</span>
                <span>KSh ${subtotal}</span>
            </div>
            <div class="flex justify-between text-body-md font-body-md text-on-surface-variant">
                <span>Delivery</span>
                <span>KSh ${deliveryFee}</span>
            </div>
            <div class="flex justify-between text-body-md font-body-md text-on-surface-variant">
                <span>VAT (16%)</span>
                <span>KSh ${vat}</span>
            </div>
            <div class="flex justify-between text-headline-sm font-bold text-on-surface pt-4 border-t border-outline-variant/30">
                <span>Total</span>
                <span>KSh ${grandTotal}</span>
            </div>
        </div>

        <div class="mt-6 w-full flex flex-col gap-3">
            <button class="w-3/4 ml-auto bg-on-surface text-on-primary font-label-md text-label-md py-4 rounded-xl hover:bg-surface-tint transition-colors duration-300 shadow-md flex justify-center items-center gap-2">
                <span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1;">lock</span>
                Place Order • KSh ${grandTotal}
            </button>
            <button class="w-3/4 ml-auto bg-on-surface text-on-primary font-label-md text-label-md py-4 rounded-xl hover:bg-surface-tint transition-colors duration-300 shadow-md flex justify-center items-center gap-2" onclick="localStorage.removeItem('cart'); location.reload();">
                Clear Cart
            </button>
            <p class="text-center  ml-auto text-label-sm font-label-sm text-on-surface-variant mt-4">
                By placing your order, you agree to our Terms &amp; Conditions and Privacy Policy.
            </p>
        </div>`;
  }

  // 5. Render execution
  function renderCart() {
    if (!cartSummary) return;

    if (cart.length === 0) {
      cartSummary.innerHTML = `<p class="text-center text-on-surface-variant py-8">Your cart is empty.</p>`;
      if (cartTotalElement) cartTotalElement.innerHTML = "";
      return;
    }

    cartSummary.innerHTML = cart.map((product) => orderItem(product)).join("");
    if (cartTotalElement) cartTotalElement.innerHTML = CartTotal();
  }

  renderCart();
});
