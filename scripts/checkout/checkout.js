import { cart } from '../../data/cart.js';
import { renderOrderSummary } from './orderSummary.js';
import { renderPaymentSummary } from './paymentSummary.js';

function updateCheckoutHeader() {
  cart.length = JSON.parse(localStorage.getItem('cart'))?.length
    ? cart.length
    : 0;
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  document.querySelector('.js-checkout-items').innerText = `${totalItems} item${
    totalItems !== 1 ? 's' : ''
  }`;
}

renderOrderSummary();
renderPaymentSummary();
updateCheckoutHeader();
