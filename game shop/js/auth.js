function loginUser(event) {
  event.preventDefault();
  const identifier = document.getElementById('login-identifier')?.value.trim();
  const password = document.getElementById('login-password')?.value.trim();
  if (!identifier || !password) return;

  const current = getCurrentUser();
  current.email = identifier.includes('@') ? identifier : current.email;
  current.username = identifier.includes('@') ? current.username : identifier;
  setCurrentUser(current);
  window.location.href = 'profile.html';
}

function registerUserFlow(event) {
  event.preventDefault();
  const name = document.getElementById('register-name')?.value.trim();
  const username = document.getElementById('register-username')?.value.trim();
  const email = document.getElementById('register-email')?.value.trim();
  const password = document.getElementById('register-password')?.value.trim();
  const confirm = document.getElementById('register-confirm')?.value.trim();

  if (!name || !username || !email || !password || !confirm) return;
  if (password !== confirm) { alert('Passwords do not match'); return; }
  setCurrentUser({ name, username, email });
  window.location.href = 'profile.html';
}

function renderProfilePage() {
  const user = getCurrentUser();
  const nameNode = document.getElementById('profile-name');
  const emailNode = document.getElementById('profile-email');
  const editName = document.getElementById('edit-name');
  const editEmail = document.getElementById('edit-email');

  if (nameNode) nameNode.textContent = user.name || 'Guest';
  if (emailNode) emailNode.textContent = user.email || 'guest@example.com';
  if (editName) editName.value = user.name || '';
  if (editEmail) editEmail.value = user.email || '';

  const orderHistory = document.getElementById('order-history');
  if (orderHistory) {
    const orders = getData(STORAGE_KEYS.orders, []);
    orderHistory.innerHTML = orders.length
      ? orders.map(order => `<div class="order-item"><span>${order.item}</span><strong>${order.total}</strong></div>`).join('')
      : '<div class="order-item"><span>No orders yet</span></div>';
  }

  const favoriteList = document.getElementById('favorite-list');
  if (favoriteList) {
    const favorites = getWishlistGames();
    favoriteList.innerHTML = favorites.length
      ? favorites.map(game => `<div class="favorite-item"><span>${game.name}</span><strong>${formatPrice(game.price)}</strong></div>`).join('')
      : '<div class="favorite-item"><span>No favorites yet</span></div>';
  }

  const profileForm = document.getElementById('profile-form');
  if (profileForm) {
    profileForm.addEventListener('submit', (event) => {
      event.preventDefault();
      const updated = { ...user, name: editName.value, email: editEmail.value };
      setCurrentUser(updated);
      renderProfilePage();
    });
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const loginForm = document.getElementById('login-form');
  if (loginForm) loginForm.addEventListener('submit', loginUser);

  const registerForm = document.getElementById('register-form');
  if (registerForm) registerForm.addEventListener('submit', registerUserFlow);

  renderProfilePage();
});
