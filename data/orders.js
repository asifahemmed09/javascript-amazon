export let orders = JSON.parse(localStorage.getItem('orders')) || [];

function saveOrders() {
  localStorage.setItem('orders', JSON.stringify(orders));
}

export function addOrder(order) {
  orders.unshift(order); 
  saveOrders();
}
