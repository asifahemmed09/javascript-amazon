import { orders } from '../data/orders.js';
import { products } from '../data/products.js';
import { addToCart } from '../data/cart.js';

const ordersGrid = document.querySelector('.orders-grid');

if (!orders || orders.length === 0) {
  ordersGrid.innerHTML = '<p>No orders yet.</p>';
} else {
  let ordersHTML = '';

  orders.forEach(order => {
    let productsHTML = '';

    order.items.forEach(item => {
      const product = products.find(p => p.id === item.productId);
      if (!product) return;

      productsHTML += `
        <div class="order-details-grid">
          <div class="product-image-container">
            <img src="${product.image}">
          </div>

          <div class="product-details">
            <div class="product-name">
              ${product.name}
            </div>
            <div class="product-quantity">
              Quantity: ${item.quantity}
            </div>

            <button
              class="buy-again-button button-primary js-buy-again"
              data-product-id="${product.id}">
              Buy it again
            </button>
          </div>

          <div class="product-actions">
            <a href="tracking.html?orderId=${order.id}&productId=${product.id}">
              <button class="track-package-button button-secondary">
                Track package
              </button>
            </a>
          </div>
        </div>
      `;
    });

    ordersHTML += `
      <div class="order-container">
        <div class="order-header">
          <div>
            <div class="order-header-label">Order Placed:</div>
            <div>${order.orderTime}</div>
          </div>
          <div>
            <div class="order-header-label">Order ID:</div>
            <div>${order.id}</div>
          </div>
        </div>
        ${productsHTML}
      </div>
    `;
  });

  ordersGrid.innerHTML = ordersHTML;

  document.querySelectorAll('.js-buy-again').forEach(btn => {
    btn.addEventListener('click', () => {
      addToCart(btn.dataset.productId);
      window.location.href = 'checkout.html';
    });
  });
}
