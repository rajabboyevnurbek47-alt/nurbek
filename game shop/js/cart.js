function renderCart() {
  const container = document.getElementById('cart-items');
  if (!container) return;

  const items = getCartItems();
  if (!items.length) {
    container.innerHTML = '<div class="empty-state"><h3>Your cart is empty</h3><a class="btn btn-primary" href="catalog.html">Browse games</a></div>';
    return;
  }

  container.innerHTML = items.map(item => `
    <div class="cart-item">
      <img src="${item.image}" alt="${item.name}" />
      <div>
        <h3>${item.name}</h3>
        <p>${item.genre} · ${item.platform}</p>
        <div class="cart-actions">
          <div class="qty-control">
            <button data-action="decrease" data-id="${item.id}">-</button>
            <span>${item.quantity}</span>
            <button data-action="increase" data-id="${item.id}">+</button>
          </div>
          <button class="btn btn-secondary btn-small remove-item" data-id="${item.id}">Remove</button>
        </div>
      </div>
      <div class="cart-price"><strong>${formatPrice(item.price * item.quantity)}</strong></div>
    </div>
  `).join('');

  const totals = getCartTotals();
  const discountRate = applyCoupon(document.getElementById('coupon-input')?.value || '');
  const couponValue = totals.total * discountRate;
  document.getElementById('subtotal').textContent = formatPrice(totals.subtotal);
  document.getElementById('discount').textContent = `-${formatPrice(couponValue)}`;
  document.getElementById('total').textContent = formatPrice(Math.max(0, totals.total - couponValue));

  const checkoutTotal = document.getElementById('checkout-total');
  if (checkoutTotal) checkoutTotal.textContent = formatPrice(Math.max(0, totals.total - couponValue));

  const summary = document.getElementById('checkout-items');
  if (summary) summary.innerHTML = items.map(item => `<div class="summary-row"><span>${item.name} x ${item.quantity}</span><strong>${formatPrice(item.price * item.quantity)}</strong></div>`).join('');
}

document.addEventListener('DOMContentLoaded', () => {
  renderCart();

  const cartContainer = document.getElementById('cart-items');
  if (cartContainer) {
    cartContainer.addEventListener('click', (event) => {
      const button = event.target.closest('button');
      if (!button) return;
      const id = Number(button.dataset.id);

      if (button.dataset.action === 'increase') {
        const current = getCart().find(item => item.id === id)?.quantity || 1;
        updateCartQuantity(id, current + 1);
      }
      if (button.dataset.action === 'decrease') {
        const current = getCart().find(item => item.id === id)?.quantity || 1;
        if (current > 1) updateCartQuantity(id, current - 1);
      }
      if (button.classList.contains('remove-item')) removeFromCart(id);
      renderCart();
    });
  }

  document.getElementById('clear-cart')?.addEventListener('click', () => { clearCart(); renderCart(); });
  document.getElementById('apply-coupon')?.addEventListener('click', () => renderCart());
  document.getElementById('checkout-form')?.addEventListener('submit', (event) => {
    event.preventDefault();
    proceedToCheckout();
  });
});
