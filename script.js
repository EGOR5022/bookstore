const books = {
  "1": {
    id:"1",
    title:"Дизайн привычных вещей",
    author:"Дон Норман",
    img:"img/1.jpeg",
    desc:"Классическая книга о дизайне повседневных предметов, которая изменила взгляд на взаимодействие человека с технологиями и бытовыми приборами. Норман объясняет, почему некоторые вещи просты в использовании, а другие вызывают раздражение, и как дизайн влияет на наше восприятие мира.",
    available: 5,
    price: 1200,
    rating: 4.5,
    characteristics: {
      coverType: "Твердый переплет",
      pageCount: 368,
      publisher: "Манн, Иванов и Фербер",
      year: 2018,
      isbn: "978-5-00100-123-4"
    },
    reviews: [
      {author: "Анна К.", text: "Очень полезная книга для всех, кто интересуется дизайном. Открывает глаза на многие вещи!", rating: 5},
      {author: "Иван П.", text: "Классика, которую должен прочитать каждый. Немного устарела в примерах, но принципы актуальны.", rating: 4}
    ]
  },
  "2": {
    id:"2",
    title:"Заставьте их кликать!",
    author:"Стив Круг",
    img:"img/2.jpeg",
    desc:"Краткое и практичное руководство по юзабилити, основанное на здравом смысле и многолетнем опыте. Стив Круг предлагает простые и эффективные методы улучшения пользовательского опыта, которые легко применить на практике.",
    available: 2,
    price: 950,
    rating: 4.8,
    characteristics: {
      coverType: "Мягкий переплет",
      pageCount: 208,
      publisher: "Издательство Студии Артемия Лебедева",
      year: 2019,
      isbn: "978-5-98062-000-1"
    },
    reviews: [
      {author: "Ольга В.", text: "Лучшая книга по юзабилити для новичков! Все по делу, без воды.", rating: 5},
      {author: "Дмитрий С.", text: "Прочитал за один вечер. Много полезных советов, сразу начал применять.", rating: 5}
    ]
  },
  "3": {
    id:"3",
    title:"Эмоциональный дизайн",
    author:"Дон Норман",
    img:"img/3.jpeg",
    desc:"Почему вещи дарят удовольствие и вызывают эмоции. Дон Норман исследует, как эмоции влияют на наше восприятие продуктов и как дизайнеры могут использовать это знание для создания более привлекательных и эффективных решений.",
    available: 0,
    price: 1100,
    rating: 4.2,
    characteristics: {
      coverType: "Твердый переплет",
      pageCount: 256,
      publisher: "Манн, Иванов и Фербер",
      year: 2017,
      isbn: "978-5-00100-567-8"
    },
    reviews: [
      {author: "Елена М.", text: "Интересный взгляд на дизайн. Помогает понять, почему мы любим одни вещи и ненавидим другие.", rating: 4},
      {author: "Сергей Г.", text: "Немного затянуто, но в целом познавательно.", rating: 4}
    ]
  },
  "4": {
    id:"4",
    title:"Дизайн привычных вещей",
    author:"Дон Норман",
    img:"img/4.jpeg",
    desc:"Переработанное издание классической книги, дополненное новыми примерами и актуальными исследованиями. Идеально подходит для тех, кто хочет понять основы хорошего дизайна и избежать ошибок в проектировании.",
    available: 3,
    price: 1350,
    rating: 4.7,
    characteristics: {
      coverType: "Твердый переплет",
      pageCount: 400,
      publisher: "Манн, Иванов и Фербер",
      year: 2020,
      isbn: "978-5-00100-987-6"
    },
    reviews: [
      {author: "Мария Л.", text: "Обновленное издание еще лучше оригинала! Очень рекомендую.", rating: 5},
      {author: "Павел К.", text: "Отличная книга, но хотелось бы больше примеров из современного мира.", rating: 4}
    ]
  },
  "5": {
    id:"5",
    title:"Дизайн привычных вещей — специальное издание",
    author:"Дон Норман",
    img:"img/5.jpeg",
    desc:"Специальное издание с комментариями автора и дополнительными материалами. Глубокое погружение в философию дизайна и его влияние на повседневную жизнь.",
    available: 1,
    price: 1500,
    rating: 4.6,
    characteristics: {
      coverType: "Твердый переплет",
      pageCount: 450,
      publisher: "Манн, Иванов и Фербер",
      year: 2021,
      isbn: "978-5-00100-111-2"
    },
    reviews: [
      {author: "Алексей Н.", text: "Для фанатов Нормана - мастхэв! Комментарии очень ценны.", rating: 5},
      {author: "Виктория Р.", text: "Дороговато, но содержание того стоит.", rating: 4}
    ]
  },
  "6": {
    id:"6",
    title:"Практика UX",
    author:"Коллектив",
    img:"img/2.jpeg",
    desc:"Сборник практических кейсов и статей от ведущих экспертов в области UX/UI дизайна. Охватывает широкий спектр тем, от исследования пользователей до тестирования прототипов.",
    available: 4,
    price: 1400,
    rating: 4.3,
    characteristics: {
      coverType: "Мягкий переплет",
      pageCount: 320,
      publisher: "Питер",
      year: 2022,
      isbn: "978-5-4461-0000-0"
    },
    reviews: [
      {author: "Игорь З.", text: "Очень много полезной информации, но некоторые статьи кажутся разрозненными.", rating: 4},
      {author: "Наталья Ф.", text: "Хороший обзор разных аспектов UX, но для глубокого изучения нужно искать другие источники.", rating: 4}
    ]
  }
};
function getBookById(id) {
  return books[id] || null;
}
function renderBookPage() {
  const id = new URLSearchParams(location.search).get('id');
  const book = getBookById(id);

  if (!book) {
    document.querySelector('main').innerHTML = "<p>Книга не найдена.</p>";
    return;
  }

  document.getElementById('book-img').src = book.img;
  document.getElementById('book-title').textContent = book.title;
  document.getElementById('book-author').textContent = book.author;
  document.getElementById('book-desc').textContent = book.desc;

  // Новые элементы для страницы книги
  document.getElementById('book-price').textContent = `${book.price} ₽`;
  document.getElementById('book-rating').innerHTML = generateStars(book.rating);

  const characteristicsList = document.getElementById('book-characteristics');
  characteristicsList.innerHTML = `
    <li>Тип обложки: <span>${book.characteristics.coverType}</span></li>
    <li>Количество страниц: <span>${book.characteristics.pageCount}</span></li>
    <li>Издательство: <span>${book.characteristics.publisher}</span></li>
    <li>Год издания: <span>${book.characteristics.year}</span></li>
    <li>ISBN: <span>${book.characteristics.isbn}</span></li>
  `;

  const reviewsList = document.getElementById('book-reviews');
  reviewsList.innerHTML = '';
  if (book.reviews && book.reviews.length > 0) {
    book.reviews.forEach(review => {
      const reviewItem = document.createElement('div');
      reviewItem.className = 'review-item';
      reviewItem.innerHTML = `
        <p class="review-author">${review.author} <span class="review-rating">${generateStars(review.rating)}</span></p>
        <p class="review-text">${review.text}</p>
      `;
      reviewsList.appendChild(reviewItem);
    });
  } else {
    reviewsList.innerHTML = '<p>Отзывов пока нет.</p>';
  }


  const avail = document.getElementById('book-availability');
  avail.textContent = book.available > 0
    ? `${book.available} шт.`
    : "Нет в наличии";

  const favBtn = document.getElementById('fav-btn');
  updateFavButton(favBtn, id);

  favBtn.addEventListener('click', () => {
    toggleFavorite(id);
    updateFavButton(favBtn, id);
  });
  const addToCartBtn = document.getElementById('add-to-cart-btn');
  if (addToCartBtn) {
    addToCartBtn.onclick = () => addToCart(book.id);
  }
}

function generateStars(rating) {
  let starsHtml = '';
  for (let i = 1; i <= 5; i++) {
    if (i <= rating) {
      starsHtml += '<span class="star filled">★</span>';
    } else if (i - 0.5 === rating) {
      starsHtml += '<span class="star half-filled">★</span>'; // Можно стилизовать половину звезды
    } else {
      starsHtml += '<span class="star">☆</span>';
    }
  }
  return starsHtml;
}
function getFavorites() {
  try {
    return JSON.parse(localStorage.getItem('favorites') || '[]');
  } catch {
    return [];
  }
}

function saveFavorites(list) {
  localStorage.setItem('favorites', JSON.stringify(list));
}

function isFavorite(id) {
  return getFavorites().includes(id);
}

function toggleFavorite(id) {
  const list = getFavorites();
  const index = list.indexOf(id);

  if (index === -1) list.push(id);
  else list.splice(index, 1);

  saveFavorites(list);
}

function updateFavButton(btn, id) {
  btn.textContent = isFavorite(id)
    ? "Убрать из избранного"
    : "Добавить в избранное";
}

function renderFavoritesList() {
  const container = document.getElementById('favorites-list');
  if (!container) return;
  const favList = getFavorites();

  container.innerHTML = '';

  if (favList.length === 0) {
    container.innerHTML = "<p>Пока нет избранных книг.</p>";
    return;
  }

  favList.forEach(id => {
    const book = getBookById(id);
    if (!book) return;

    const card = document.createElement('div');
    card.className = "book";
    card.setAttribute("data-id", book.id);

    card.innerHTML = `
      <img src="${book.img}" alt="">
      <h3>${book.title}</h3>
      <p class="author">${book.author}</p>
      <p class="book-price">${book.price} ₽</p>
      <div class="book-rating">${generateStars(book.rating)}</div>

      <div class="book-actions">
        <a href="book.html?id=${book.id}" class="open-btn">Открыть</a>
        <button class="remove-fav" data-id="${book.id}">Убрать</button>
      </div>
    `;

    container.appendChild(card);
  });

  container.querySelectorAll('.remove-fav').forEach(btn => {
    btn.addEventListener('click', () => {
      toggleFavorite(btn.dataset.id);
      renderFavoritesList();
    });
  });
}
function getCart() {
  try {
    return JSON.parse(localStorage.getItem('cart') || '{}');
  } catch {
    return {};
  }
}

function saveCart(cart) {
  localStorage.setItem('cart', JSON.stringify(cart));
}

function addToCart(id) {
  const cart = getCart();
  if (cart[id]) {
    cart[id].quantity++;
  } else {
    const book = getBookById(id);
    if (book) {
      cart[id] = {
        id: book.id,
        title: book.title,
        price: book.price,
        img: book.img,
        quantity: 1
      };
    }
  }
  saveCart(cart);
  updateCartDisplay(); // Обновить отображение корзины, если она видна
  alert(`Книга "${books[id].title}" добавлена в корзину!`);
}

function removeFromCart(id) {
  const cart = getCart();
  if (cart[id]) {
    cart[id].quantity--;
    if (cart[id].quantity <= 0) {
      delete cart[id];
    }
  }
  saveCart(cart);
  renderCartPage(); // Перерисовать корзину
  updateCartDisplay();
}

function updateCartDisplay() {
  const cartItemsCount = Object.values(getCart()).reduce((sum, item) => sum + item.quantity, 0);
  const cartLink = document.getElementById('cart-link');
  if (cartLink) {
    cartLink.textContent = `Корзина (${cartItemsCount})`;
  }
}

function renderCartPage() {
  const container = document.getElementById('cart-items');
  if (!container) return;

  const cart = getCart();
  container.innerHTML = '';
  let totalAmount = 0;

  if (Object.keys(cart).length === 0) {
    container.innerHTML = "<p>Ваша корзина пуста.</p>";
    document.getElementById('cart-total').textContent = '0 ₽';
    return;
  }

  for (const id in cart) {
    const item = cart[id];
    const book = getBookById(id);
    if (!book) continue;

    const itemElement = document.createElement('div');
    itemElement.className = 'cart-item';
    itemElement.innerHTML = `
      <img src="${item.img}" alt="${item.title}">
      <div class="item-details">
        <h3>${item.title}</h3>
        <p>${item.price} ₽ x ${item.quantity}</p>
        <p>Сумма: ${item.price * item.quantity} ₽</p>
      </div>
      <div class="item-actions">
        <button class="remove-from-cart" data-id="${item.id}">-</button>
        <span>${item.quantity}</span>
        <button class="add-to-cart" data-id="${item.id}">+</button>
      </div>
    `;
    container.appendChild(itemElement);
    totalAmount += item.price * item.quantity;
  }

  document.getElementById('cart-total').textContent = `${totalAmount} ₽`;

  container.querySelectorAll('.remove-from-cart').forEach(btn => {
    btn.addEventListener('click', (e) => removeFromCart(e.target.dataset.id));
  });
  container.querySelectorAll('.add-to-cart').forEach(btn => {
    btn.addEventListener('click', (e) => addToCart(e.target.dataset.id));
  });
}

function initCatalog() {
  const bookList = document.querySelector('.book-list');
  if (!bookList) return;

  // Очищаем существующие карточки, если они были добавлены статически
  bookList.innerHTML = '';

  for (const id in books) {
    const book = books[id];
    const card = document.createElement('div');
    card.className = "book";
    card.setAttribute("data-id", book.id);

    card.innerHTML = `
      <img src="${book.img}" alt="${book.title}">
      <h3>${book.title}</h3>
      <p class="author">${book.author}</p>
      <p class="book-price">${book.price} ₽</p>
      <div class="book-rating">${generateStars(book.rating)}</div>

      <div class="book-actions">
        <a href="book.html?id=${book.id}" class="open-btn">Открыть</a>
        <button class="add-fav" data-id="${book.id}">В избранное</button>
        <button class="add-to-cart-catalog" data-id="${book.id}">В корзину</button>
      </div>
    `;
    bookList.appendChild(card);
  }


  bookList.querySelectorAll('.add-fav').forEach(btn => {
    const id = btn.dataset.id;
    // Обновляем текст и стиль кнопки
    function updateButton() {
      if (isFavorite(id)) {
        btn.textContent = 'В избранном';
        btn.classList.add('active');
      } else {
        btn.textContent = 'В избранное';
        btn.classList.remove('active');
      }
    }
    
    updateButton(); // при загрузке

    btn.addEventListener('click', () => {
      toggleFavorite(id);
      updateButton();
      // Если мы на странице избранного — обновим её тоже
      if (document.getElementById('favorites-list')) {
        renderFavoritesList();
      }
    });
  });

  bookList.querySelectorAll('.add-to-cart-catalog').forEach(btn => {
    btn.addEventListener('click', (e) => addToCart(e.target.dataset.id));
  });
}

document.addEventListener('DOMContentLoaded', () => {
  updateCartDisplay(); // Обновить счетчик корзины при загрузке любой страницы

  if (document.querySelector('.book-page')) {
    renderBookPage();
  } else if (document.getElementById('favorites-list')) {
    renderFavoritesList();
  } else if (document.querySelector('.book-list')) {
    initCatalog();
  } else if (document.querySelector('.cart-page')) {
    renderCartPage();
  }
});