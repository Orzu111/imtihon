<script>
    const cart = [];

    // 🔘 Mahsulot qo‘shish
    function addToCart(name, price) {
        cart.push({ name, price });
    updateCartCount();
    alert(`${name} savatchaga qo‘shildi!`);
  }

    // 🔁 Savatcha sanog‘ini yangilash
    function updateCartCount() {
        document.getElementById("cart-count").textContent = cart.length;
  }

    // 📦 Savatcha modalini ochish
    function openCart() {
    const modal = document.getElementById("cart-modal");
    const itemsContainer = document.getElementById("cart-items");
    itemsContainer.innerHTML = "";

    if (cart.length === 0) {
        itemsContainer.innerHTML = "<p>Savatcha hozircha bo‘sh.</p>";
    } else {
        cart.forEach((item, index) => {
            const itemEl = document.createElement("div");
            itemEl.className = "flex justify-between items-center border-b pb-2";
            itemEl.innerHTML = `
          <div>
            <p class="font-medium">${item.name}</p>
            <p class="text-sm text-gray-500">${item.price.toLocaleString()} so'm</p>
          </div>
          <button onclick="removeFromCart(${index})" class="text-red-600 hover:text-red-800 text-sm">🗑 O'chirish</button>
        `;
            itemsContainer.appendChild(itemEl);
        });
    }

    modal.classList.remove("hidden");
  }

    // ❌ Savatchani yopish
    function closeCart() {
        document.getElementById("cart-modal").classList.add("hidden");
  }

    // 🗑 Mahsulotni o‘chirish
    function removeFromCart(index) {
        cart.splice(index, 1);
    updateCartCount();
    openCart(); // qayta ochib render qilish
  }