function renderGameDetails() {
  const container = document.getElementById('game-detail');
  if (!container) return;

  const gameId = Number(new URLSearchParams(window.location.search).get('id')) || 1;
  const game = getGames().find(item => item.id === gameId) || getGames()[0];

  container.innerHTML = `
    <div class="game-detail-layout">
      <div class="game-detail-cover">
        <img src="${game.image}" alt="${game.name}" />
      </div>
      <div class="game-detail-info">
        <span class="section-label">${game.genre}</span>
        <h1>${game.name}</h1>
        <div class="game-meta"><span>★ ${game.rating}</span><span>${game.platform}</span><span>${game.publisher}</span></div>
        <p>${game.description}</p>
        <div class="price-row">
          <div><span class="price">${formatPrice(game.price)}</span>${game.sale ? `<span class="old-price">${formatPrice(game.oldPrice)}</span>` : ''}</div>
          <button class="btn btn-primary add-to-cart" data-id="${game.id}">Add to cart</button>
        </div>
        <div class="game-detail-tags">${game.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}</div>
      </div>
    </div>
    <div class="detail-sections">
      <div class="auth-card">
        <h3>Overview</h3>
        <ul class="feature-list">
          <li><strong>Developer:</strong> GameForge Studio</li>
          <li><strong>Release date:</strong> ${game.releaseDate}</li>
          <li><strong>Platforms:</strong> ${game.platform}</li>
          <li><strong>Publisher:</strong> ${game.publisher}</li>
        </ul>
      </div>
      <div class="auth-card">
        <h3>System requirements</h3>
        <ul class="feature-list">${game.requirements.map(item => `<li>${item}</li>`).join('')}</ul>
      </div>
      <div class="auth-card">
        <h3>Screenshots</h3>
        <div class="screenshot-grid">${game.screenshots.map(img => `<img src="${img}" alt="${game.name}" />`).join('')}</div>
      </div>
    </div>
  `;
}

document.addEventListener('DOMContentLoaded', () => renderGameDetails());
