const STORAGE_KEYS = {
  games: 'gameShopGames',
  cart: 'gameShopCart',
  wishlist: 'gameShopWishlist',
  user: 'gameShopUser',
  orders: 'gameShopOrders',
  seller: 'gameShopSeller'
};

function safeParse(value, fallback) {
  try {
    return value ? JSON.parse(value) : fallback;
  } catch {
    return fallback;
  }
}

function getData(key, fallback) {
  return safeParse(localStorage.getItem(key), fallback);
}

function setData(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

function generateGames() {
  const titles = ['Counter-Strike 2','Minecraft','GTA V','Red Dead Redemption 2','Cyberpunk 2077','Elden Ring','Forza Horizon 5','EA SPORTS FC 25','The Witcher 3','Tekken 8','Dead by Daylight','Hades II','Apex Legends','God of War','Portal 2','Stardew Valley','Halo Infinite','Hogwarts Legacy','Battlefield 2042','Far Cry 6','Dying Light 2','Borderlands 3','Days Gone','The Last of Us Part II','Control','Monster Hunter Rise','Assassin\'s Creed Mirage','Resident Evil 4','Sons of the Forest','No Man\'s Sky','Atomic Heart','F1 24','NBA 2K25','Diablo IV','Helldivers 2','Sea of Thieves','Destiny 2','Evil West','Horizon Forbidden West'];
  const genres = ['Action','Adventure','Racing','Shooter','RPG','Survival','Strategy','Sports'];
  const platforms = ['PC','PlayStation 5','Xbox Series X|S','Nintendo Switch','Multi'];
  const images = ['https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=900&q=80','https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=900&q=80','https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=900&q=80','https://images.unsplash.com/photo-1528819622761-d6bcf132f793?auto=format&fit=crop&w=900&q=80','https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?auto=format&fit=crop&w=900&q=80','https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=900&q=80','https://images.unsplash.com/photo-1534423861386-85a16f5d13fd?auto=format&fit=crop&w=900&q=80','https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=900&q=80'];
  return titles.map((title, index) => ({
    id: index + 1,
    name: title,
    genre: genres[index % genres.length],
    platform: platforms[index % platforms.length],
    rating: (3.8 + (index % 7) * 0.25).toFixed(1),
    price: Number((Math.random() * 55 + 15).toFixed(2)),
    oldPrice: Number(((Math.random() * 55 + 15) + 15 + (index % 5) * 6).toFixed(2)),
    sale: index % 3 === 0,
    image: images[index % images.length],
    badge: index % 4 === 0 ? 'New' : index % 5 === 0 ? 'Hot' : 'Top',
    publisher: 'GameForge Studio',
    releaseDate: '2024-04-15',
    description: 'A premium action-packed gaming experience with deep mechanics, stunning worlds, and unforgettable storytelling.',
    screenshots: [images[(index + 1) % images.length], images[(index + 3) % images.length]],
    requirements: ['Intel i7 / Ryzen 7', '16 GB RAM', 'GTX 3060 / RX 6700 XT', 'Windows 10 / 11'],
    tags: ['Co-op', 'Adventure', 'Single Player']
  }));
}

function ensureSeedData() {
  if (!localStorage.getItem(STORAGE_KEYS.games)) setData(STORAGE_KEYS.games, generateGames());
  if (!localStorage.getItem(STORAGE_KEYS.cart)) setData(STORAGE_KEYS.cart, []);
  if (!localStorage.getItem(STORAGE_KEYS.wishlist)) setData(STORAGE_KEYS.wishlist, []);
  if (!localStorage.getItem(STORAGE_KEYS.orders)) setData(STORAGE_KEYS.orders, [{ id: '#1021', item: 'Cyberpunk 2077', total: '$19.99' }, { id: '#1022', item: 'Minecraft', total: '$26.99' }]);
  if (!localStorage.getItem(STORAGE_KEYS.user)) setData(STORAGE_KEYS.user, { name: 'John Doe', email: 'john@example.com', username: 'johndoe' });
}

function getGames() { ensureSeedData(); return getData(STORAGE_KEYS.games, []); }
function getCart() { ensureSeedData(); return getData(STORAGE_KEYS.cart, []); }
function getWishlist() { ensureSeedData(); return getData(STORAGE_KEYS.wishlist, []); }
function getCurrentUser() { return getData(STORAGE_KEYS.user, { name: 'Guest', email: 'guest@example.com', username: 'guest' }); }
function setCurrentUser(user) { setData(STORAGE_KEYS.user, user); }
function saveSellerLogin(email) { setData(STORAGE_KEYS.seller, { email }); }
function isSellerLoggedIn() { return Boolean(getData(STORAGE_KEYS.seller, null)); }

function addToCart(gameId) {
  const cart = getCart();
  const item = cart.find(entry => entry.id === gameId);
  if (item) item.quantity += 1; else cart.push({ id: gameId, quantity: 1 });
  setData(STORAGE_KEYS.cart, cart);
  updateCounters();
}

function removeFromCart(gameId) {
  const cart = getCart().filter(item => item.id !== gameId);
  setData(STORAGE_KEYS.cart, cart);
  updateCounters();
}

function updateCartQuantity(gameId, quantity) {
  const cart = getCart();
  const item = cart.find(entry => entry.id === gameId);
  if (!item) return;
  item.quantity = Math.max(1, quantity);
  setData(STORAGE_KEYS.cart, cart);
  updateCounters();
}

function clearCart() {
  setData(STORAGE_KEYS.cart, []);
  updateCounters();
}

function toggleWishlist(gameId) {
  const current = getWishlist();
  const exists = current.includes(gameId);
  const next = exists ? current.filter(id => id !== gameId) : [...current, gameId];
  setData(STORAGE_KEYS.wishlist, next);
  updateCounters();
  return !exists;
}

function getWishlistGames() {
  return getGames().filter(game => getWishlist().includes(game.id));
}

function getCartItems() {
  return getCart().map(item => {
    const game = getGames().find(entry => entry.id === item.id);
    return game ? { ...game, quantity: item.quantity } : null;
  }).filter(Boolean);
}

function formatPrice(value) {
  return `$${Number(value).toFixed(2)}`;
}

function getCartTotals() {
  const items = getCartItems();
  const subtotal = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const discount = items.reduce((sum, item) => sum + (item.sale ? item.price * 0.15 * item.quantity : 0), 0);
  const total = Math.max(0, subtotal - discount);
  return { subtotal, discount, total };
}

function applyCoupon(code) {
  const normalized = (code || '').trim().toUpperCase();
  if (normalized === 'GAMER10') return 0.10;
  if (normalized === 'SAVE20') return 0.20;
  return 0;
}

function proceedToCheckout() {
  if (!getCartItems().length) return;
  const orders = getData(STORAGE_KEYS.orders, []);
  const total = getCartTotals().total;
  orders.unshift({ id: `#${Date.now().toString().slice(-5)}`, item: getCartItems().length > 1 ? `${getCartItems().length} games` : getCartItems()[0].name, total: formatPrice(total) });
  setData(STORAGE_KEYS.orders, orders);
  clearCart();
  window.location.href = 'profile.html';
}

function updateCounters() {
  const cartCount = getCart().reduce((sum, item) => sum + item.quantity, 0);
  const wishlistCount = getWishlist().length;
  const cartNode = document.getElementById('cart-count');
  const wishlistNode = document.getElementById('wishlist-count');
  if (cartNode) cartNode.textContent = cartCount;
  if (wishlistNode) wishlistNode.textContent = wishlistCount;
}

document.addEventListener('DOMContentLoaded', () => {
  ensureSeedData();
  updateCounters();
});
