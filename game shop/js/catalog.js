const catalogState = { page: 1, pageSize: 12 };

function buildGameCard(game) {
  const inWishlist = getWishlist().includes(game.id);
  const priceBlock = game.sale
    ? `<div class="price-row"><div><span class="price">${formatPrice(game.price)}</span><span class="old-price">${formatPrice(game.oldPrice)}</span></div></div>`
    : `<div class="price-row"><div><span class="price">${formatPrice(game.price)}</span></div></div>`;

  return `
    <article class="game-card">
      <div class="game-cover">
        <img src="${game.image}" alt="${game.name}" />
        <span class="badge game-badge">${game.badge}</span>
      </div>
      <div class="game-info">
        <div class="game-meta"><span>${game.genre}</span><span class="rating">★ ${game.rating}</span></div>
        <h3>${game.name}</h3>
        <div class="game-meta"><span>${game.platform}</span><span>${game.sale ? 'Sale' : 'Standard'}</span></div>
        ${priceBlock}
        <div class="game-actions">
          <button class="btn btn-primary add-to-cart" data-id="${game.id}">Add to cart</button>
          <button class="icon-btn wishlist-toggle" data-id="${game.id}">${inWishlist ? '♥' : '♡'}</button>
        </div>
        <div class="game-actions" style="margin-top: 8px;">
          <a class="btn btn-secondary" href="game-details.html?id=${game.id}">Details</a>
        </div>
      </div>
    </article>
  `;
}

function renderGames(containerId, list, limit = null) {
  const container = document.getElementById(containerId);
  if (!container) return;
  const items = limit ? list.slice(0, limit) : list;
  container.innerHTML = items.map(buildGameCard).join('');
}

function getFilteredGames() {
  const params = new URLSearchParams(window.location.search);
  const search = (params.get('search') || '').toLowerCase();
  const genre = document.getElementById('genre-filter')?.value || 'all';
  const platform = document.getElementById('platform-filter')?.value || 'all';
  const saleOnly = document.getElementById('sale-only')?.checked || false;
  const sort = document.getElementById('sort-filter')?.value || 'featured';

  let games = getGames();
  if (search) games = games.filter(game => `${game.name} ${game.genre} ${game.platform}`.toLowerCase().includes(search));
  if (genre !== 'all') games = games.filter(game => game.genre === genre);
  if (platform !== 'all') games = games.filter(game => game.platform === platform || game.platform === 'Multi');
  if (saleOnly) games = games.filter(game => game.sale);

  if (sort === 'price-low') games = [...games].sort((a, b) => a.price - b.price);
  if (sort === 'price-high') games = [...games].sort((a, b) => b.price - a.price);
  if (sort === 'rating') games = [...games].sort((a, b) => Number(b.rating) - Number(a.rating));
  if (sort === 'sale') games = [...games].sort((a, b) => Number(b.sale) - Number(a.sale));
  return games;
}

function renderCatalog() {
  const grid = document.getElementById('catalog-grid');
  const count = document.getElementById('results-count');
  const loadMore = document.getElementById('load-more');
  if (!grid) return;

  const filtered = getFilteredGames();
  const visible = filtered.slice(0, catalogState.page * catalogState.pageSize);
  grid.innerHTML = visible.map(buildGameCard).join('');
  if (count) count.textContent = `${filtered.length} games`;
  if (loadMore) loadMore.style.display = visible.length >= filtered.length ? 'none' : 'inline-flex';
}

function bindCatalogFilters() {
  const search = document.getElementById('catalog-search');
  const genre = document.getElementById('genre-filter');
  const platform = document.getElementById('platform-filter');
  const saleOnly = document.getElementById('sale-only');
  const sort = document.getElementById('sort-filter');
  const reset = document.getElementById('reset-filters');
  const loadMore = document.getElementById('load-more');

  const refresh = () => { catalogState.page = 1; renderCatalog(); };
  [search, genre, platform, saleOnly, sort].forEach(el => el && el.addEventListener('input', refresh));
  [search, genre, platform, saleOnly, sort].forEach(el => el && el.addEventListener('change', refresh));

  if (reset) reset.addEventListener('click', () => {
    if (search) search.value = '';
    if (genre) genre.value = 'all';
    if (platform) platform.value = 'all';
    if (saleOnly) saleOnly.checked = false;
    if (sort) sort.value = 'featured';
    refresh();
  });

  if (loadMore) loadMore.addEventListener('click', () => {
    catalogState.page += 1;
    renderCatalog();
  });

  const initialSearch = new URLSearchParams(window.location.search).get('search');
  if (search && initialSearch) search.value = initialSearch;
  refresh();
}

document.addEventListener('DOMContentLoaded', () => {
  renderGames('popular-games', getGames().slice(0, 8));
  renderGames('deal-games', getGames().filter(game => game.sale).slice(0, 3));
  renderGames('bestseller-games', [...getGames()].sort((a, b) => Number(b.rating) - Number(a.rating)).slice(0, 4));
  renderGames('recent-games', getGames().slice(10, 14));
  renderGames('wishlist-grid', getWishlistGames());
  bindCatalogFilters();
});
