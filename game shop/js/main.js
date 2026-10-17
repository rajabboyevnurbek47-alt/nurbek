document.addEventListener('DOMContentLoaded', () => {
  const year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();

  const searchInput = document.getElementById('main-search');
  if (searchInput) {
    searchInput.addEventListener('keydown', (event) => {
      if (event.key === 'Enter') {
        const value = searchInput.value.trim();
        if (value) window.location.href = `catalog.html?search=${encodeURIComponent(value)}`;
      }
    });
  }

  document.querySelectorAll('.toggle-password').forEach(button => {
    button.addEventListener('click', () => {
      const input = button.parentElement.querySelector('input');
      const isPwd = input.type === 'password';
      input.type = isPwd ? 'text' : 'password';
      button.textContent = isPwd ? 'Hide' : 'Show';
    });
  });

  document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', () => {
      const id = Number(button.dataset.id);
      addToCart(id);
      button.textContent = 'Added';
      button.disabled = true;
    });
  });

  document.querySelectorAll('.wishlist-toggle').forEach(button => {
    button.addEventListener('click', () => {
      const isAdded = toggleWishlist(Number(button.dataset.id));
      button.textContent = isAdded ? '♥' : '♡';
      button.classList.toggle('active', isAdded);
    });
  });

  const logoutBtn = document.getElementById('logout-btn');
  if (logoutBtn) logoutBtn.addEventListener('click', () => {
    localStorage.removeItem(STORAGE_KEYS.user);
    window.location.href = 'login.html';
  });

  const sellerLogout = document.getElementById('seller-logout');
  if (sellerLogout) sellerLogout.addEventListener('click', () => {
    localStorage.removeItem(STORAGE_KEYS.seller);
    window.location.href = 'seller-login.html';
  });
});
