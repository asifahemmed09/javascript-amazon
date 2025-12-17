# Amazon Clone – Vanilla JavaScript E-commerce App

A fully functional **Amazon-style e-commerce frontend application** built using **HTML, CSS, and Vanilla JavaScript**, focusing on real-world shopping flows, cart persistence, and multi-page state management using `localStorage`.

🔗 **Live Demo:** https://simple-amazon-clone-js.netlify.app/

---

## 🚀 Features

- 🛒 Add to Cart functionality
- 💾 Cart persistence using `localStorage`
- 📦 Checkout flow with order summary
- 🚚 Delivery options with dynamic pricing
- 🧾 Orders page with order history
- 📍 Order tracking page
- 🔄 State synchronization across multiple pages
- 🧠 Empty state handling (cart, checkout, orders)
- 🧩 Modular JavaScript architecture

---

## 🧠 Key Engineering Highlights

- **Single Source of Truth** for cart state
- Avoids direct `localStorage` mutations
- Conditional rendering for empty states
- Navigation-safe cart persistence
- Clean separation of concerns (data, UI, logic)
- Bug-free checkout → orders → tracking flow

---

## 🛠️ Tech Stack

**Frontend**
- HTML5
- CSS3
- Vanilla JavaScript (ES6 Modules)

**State Management**
- Browser `localStorage`

**Tooling**
- VS Code
- Live Server
- Netlify (Deployment)

---


## 🧪 How It Works

1. Products are rendered dynamically from `products.js`
2. Cart state is stored and synced using `localStorage`
3. Checkout page recalculates totals on every load
4. Orders are saved separately from cart
5. Tracking page reads order data without mutating state

---

## 🧩 Known Edge Cases Handled

- Navigating away from checkout does NOT clear cart
- Empty cart shows meaningful placeholders
- Order summary does not show stale data
- Safe cart clearing only after placing order

---


## ⭐ If you like this project

Give it a ⭐ on GitHub — it helps a lot!
