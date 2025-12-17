import { orders } from '../data/orders.js';
import { products } from '../data/products.js';

const params = new URLSearchParams(window.location.search);
const orderId = params.get('orderId');
const productId = params.get('productId');

const order = orders.find(o => o.id === orderId);
const product = products.find(p => p.id === productId);

if (!order || !product) {
  document.querySelector('.order-tracking').innerHTML =
    '<p>Order not found</p>';
} else {
  document.querySelector('.product-info').innerText = product.name;
  document.querySelector('.product-image').src = product.image;
}
