    import {
      Init
    } from './initTemplate.js';

    import {
      domElements
    } from './domElement.js';
    console.log(localStorage.getItem('cart_id'));
    console.log(localStorage.getItem('user_id'));

    const user_id = Number(localStorage.getItem('user_id'));
  //  console.log(typeof(user_id));

     (async () => {
      try {
      const res = await fetch(`/cart/${user_id}`);
        const cart = await res.json();
      //  console.log(result);
         
    (async () => {
      try {
      const res = await fetch(`/cart-products/${cart.id}`);
        const result = await res.json();
        console.log(result);
        initViewCart(result);
      } catch (err) {
        console.log(err);
      }
    })()
      } catch (err) {
        console.log(err);
      }
    })()
    




    var initViewCart = (products) => {
      const countCar = products.length;
      //   console.log(products);
      // console.log(countCar);
      var init = new Init(products, countCar);
      //  console.log(init.data)
      domElements.result.innerHTML = init.resultTemplate();
    
    domElements.result.querySelectorAll('.select').forEach(item => {
      item.setAttribute('hidden',true);
    })

    }