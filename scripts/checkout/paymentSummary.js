import { cart, clearCart } from '../../data/cart.js';
import { deliveryOptions } from '../../data/deliveryOptions.js';
import { products } from '../../data/products.js';
import { formatCurrency } from '../utils/money.js';
import { addOrder } from '../../data/orders.js';
import dayjs from 'https://unpkg.com/supersimpledev@8.5.0/dayjs/esm/index.js';

export function renderPaymentSummary() {
  if (cart.length === 0) {
    document.querySelector('.payment-summary').innerHTML = `
      <div class="payment-summary-empty">
        <p class="empty-title">No items to checkout</p>
        <p class="empty-subtitle">
          Add items to your cart to see order summary.
        </p>
      </div>
    `;
    return;
  }

  let productPriceCents = 0;
  let shippingPriceCents = 0;
  let deliveryOption;
  cart.forEach((item) => {
    const matchingProduct = products.find((product) => {
      return product.id === item.productId;
    });
    productPriceCents += matchingProduct.priceCents * item.quantity;

    deliveryOption = deliveryOptions.find((option) => {
      return option.id === item.deliveryOptionId;
    });

    shippingPriceCents += deliveryOption.priceCents;
  });

  const totalBeforeTax = productPriceCents + shippingPriceCents;
  const taxCents = totalBeforeTax * 0.1;
  const totalAfterTax = totalBeforeTax + taxCents;

  const paymentSummaryHTML = `
       <div class="payment-summary-title">Order Summary</div>

          <div class="payment-summary-row">
            <div>Items (3):</div>
            <div class="payment-summary-money">
              $${formatCurrency(productPriceCents)}
            </div>
          </div>

          <div class="payment-summary-row">
            <div>Shipping &amp; handling:</div>
            <div class="payment-summary-money">$${formatCurrency(
              shippingPriceCents
            )}</div>
          </div>

          <div class="payment-summary-row subtotal-row">
            <div>Total before tax:</div>
            <div class="payment-summary-money">$${formatCurrency(
              totalBeforeTax
            )}</div>
          </div>

          <div class="payment-summary-row">
            <div>Estimated tax (10%):</div>
            <div class="payment-summary-money">$${formatCurrency(
              taxCents
            )}</div>
          </div>

          <div class="payment-summary-row total-row">
            <div>Order total:</div>
            <div class="payment-summary-money">$${formatCurrency(
              totalAfterTax
            )}</div>
          </div>

          <button class="place-order-button button-primary js-place-order">
             Place your order
          </button>
  `;

  document.querySelector('.payment-summary').innerHTML = paymentSummaryHTML;

  document.querySelector('.js-place-order').addEventListener('click', () => {
    if (cart.length === 0) return;

    const order = {
      id: crypto.randomUUID(),
      orderTime: dayjs().format('MMMM D'),
      items: cart.map((item) => ({ ...item })),
    };

    addOrder(order);
    clearCart();
    window.location.href = 'orders.html';
  });
}
