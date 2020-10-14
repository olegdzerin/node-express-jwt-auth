import {
  domElements
} from './domElement.js';
import {
  Init
} from './initTemplate.js';
// import { json } from '/sequelize/types';
var initDb = async (url) => {
  var countCar;
  var products;
  try {
    const res = await fetch(url)
    products = await res.json();
    console.log(products)

  } catch (err) {
    console.log(err)
    return err
  }

  var initAdd = () => {
    countCar = products.length;
    var init = new Init(products, countCar);
    domElements.result.innerHTML = init.resultTemplate();
  }
  initAdd();
}
var initMenAdd = (e) => {
  console.log('ok1');
  localStorage.setItem('gender', 'men');
  initDb('/products/men')
}
var initWomenAdd = (e) => {
  console.log('ok1');
  localStorage.setItem('gender', 'women');
  initDb('/products/women')
}
var initAfterSelection = (e) => {
  if ((e.target.value === '1') && (localStorage.getItem('gender') === 'women')) {
    return initDb('/products/women/jacket');
  };
  if ((e.target.value === '1') && (localStorage.getItem('gender') === 'men')) {
    return initDb('/products/men/jacket');
  };
  if ((e.target.value === '2') && (localStorage.getItem('gender') === 'women')) {
    return initDb('/products/women/trousers');
  };
  if ((e.target.value === '2') && (localStorage.getItem('gender') === 'men')) {
    return initDb('/products/men/trousers');
  };
}
var selectProduct = (e) => {
  console.log('result');
  if (e.target.innerHTML === "Вибрати") {
    const itemIdEl = $(e.target).prev();
    const itemId = Number(itemIdEl[0].innerHTML)
    console.log(typeof (itemId));
    localStorage.setItem('product_id', itemId);
    console.log('productId' + localStorage.getItem('product_id'));
    (async () => {
      try {
        const result = await fetch(`/products/${itemId}`);
        const data = await result.json();
        console.log(data);
        const count = data.length
        var init = new Init(data, count);
        //  console.log(init.data)
        domElements.result.innerHTML = init.resultTemplate();
        domElements.addToCart.innerHTML = "Добавити в кошик";
      } catch (err) {
        console.log(err);
      }
    })()
  };
};

var addToCart = async () => {
   const user_id = Number(localStorage.getItem('user_id'));
  // const product_id = Number(localStorage.getItem('product_id'))
 // const user_id = localStorage.getItem('user_id');
   const product_id = Number(localStorage.getItem('product_id'))
   console.log(user_id, product_id);
   console.log(typeof(user_id), typeof(product_id));

  try {
    const res = await fetch(`/cart/${user_id}`);
    const cart = await res.json()
    localStorage.setItem('cart_id', cart.id);
       console.log('cart::' + cart.id);
    try {
      const res = await fetch('/cart-products', {
        method: "POST",
        body: JSON.stringify({
          cart_id: cart.id,
          product_id: product_id
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      })
      const result = await res.json();
      console.log(result);
    } catch (err) {
      console.log(err);
    }
  } catch (err) {
    console.log(err);
  }
}

domElements.addMenImage.addEventListener("click", initMenAdd);
domElements.addWomenImage.addEventListener("click", initWomenAdd);
domElements.selectSortingElement.addEventListener('click', initAfterSelection);
domElements.result.addEventListener('click', selectProduct);
domElements.addToCart.addEventListener('click', addToCart);
