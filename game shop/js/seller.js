function handleSellerLogin(event) {
  event.preventDefault();
  const email = document.getElementById('seller-email')?.value.trim();
  const password = document.getElementById('seller-password')?.value.trim();
  if (!email || !password) return;
  saveSellerLogin(email);
  window.location.href = 'seller-dashboard.html';
}

function handleAddProduct(event) {
  event.preventDefault();
  const form = event.target;
  const title = form.querySelector('[name="title"]').value.trim();
  const genre = form.querySelector('[name="genre"]').value.trim();
  const platform = form.querySelector('[name="platform"]').value.trim();
  const price = Number(form.querySelector('[name="price"]').value);
  const description = form.querySelector('[name="description"]').value.trim();

  if (!title || !genre || !platform || !price || !description) return;
  const games = getGames();
  games.unshift({
    id: Date.now(),
    name: title,
    genre,
    platform,
    price,
    oldPrice: price,
    sale: false,
    image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=900&q=80',
    rating: '4.5',
    badge: 'New',
    publisher: 'Seller Portal',
    releaseDate: '2025-01-01',
    description,
    screenshots: ['https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=900&q=80'],
    requirements: ['Gaming PC', '16 GB RAM'],
    tags: ['Seller add']
  });
  setData(STORAGE_KEYS.games, games);
  form.reset();
  alert('Product published successfully!');
}

document.addEventListener('DOMContentLoaded', () => {
  const sellerLoginForm = document.getElementById('seller-login-form');
  if (sellerLoginForm) sellerLoginForm.addEventListener('submit', handleSellerLogin);

  const addProductForm = document.getElementById('add-product-form');
  if (addProductForm) addProductForm.addEventListener('submit', handleAddProduct);

  if (window.location.pathname.includes('seller-') && !window.location.pathname.endsWith('seller-login.html') && !isSellerLoggedIn()) {
    window.location.href = 'seller-login.html';
  }
});
