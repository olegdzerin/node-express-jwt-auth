    import {
  Init
} from './initTemplate.js';

import {
    domElements
  } from './domElement.js';
console.log(localStorage.getItem('cart_id'));
  
// const cart_id = localStorage.getItem('cart_id')
(async () => {
    try{
     const res = await fetch('/dbCartProduct/:cart_id');
   const result = await res.json();
   console.log(result);
   initViewCart(result);
    }catch(err){
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
  }
