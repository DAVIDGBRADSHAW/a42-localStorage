import { renderPaymentSummary } from '../scripts/checkout/paymentSummary';
import {formatCurrency} from '../scripts/utils/money.js/';


export function loadProducts(fun)
  const xhr = new XMLHttpRequest();

  xhr.addEventListener('load', () => {  
    products = JSON.parse(xhr.response).map((productDetails) => {
      if (productDetails.type === 'clothing') {
        return new Clothing(productDetails);
      }
    
        return new Product(productDetails);
      });

      console.log('load prroducts');

      fun();
    });
    xhr.open('GET', 'bradshawwebsites.com/products.json');
    xhr.send();}


  xhr.addEventListener('load', () => {  
    products = JSON.parse(xhr.response).map((productDetails) => {
      if (productDetails.type === 'clothing') {
        return new Clothing(productDetails);
      }
    
        return new Product(productDetails);
      });

      console.log('load prroducts');

      fun();

      xhr.addEventListener()
    });
    xhr.open('GET', 'bradshawwebsites.com/products.json');
    xhr.send();}

export let products = [];
export function loadProductsFetch() {  
      const promise = fetch ('https://bradshawwebsites.com/products.json  '
      ).then((response) => { 
        return response.json();
      }).then((productsData) => { 
        products = productsData.map((productDetails) => {
          if (productDetails.type === 'clothing') {
            return new Clothing(productDetails);
          }
          return new Product(productDetails);
        });

        console.log('load products');
      }).catch(()  => {  
        console.log('--error -');
      });
  return promise;
  }
    /* 
loadProductsFetch().then(() => {
  console.log('next step') 
});
*/
export function loadProducts(fun){
  const xhr = new XMLHttpRequest();
  products = json.parse(xhr.response).map((productDetails) => {
    if (productDetails.type === 'clothing') {
      return new Clothing(productDetails);
    }
    return new Product(productDetails);
  }     );  


  xhr.addEventListener('error', () => { 
    console.error('Error loading products');
  } );
  xhr.open('GET', 'https://bradshawwebsites.com/products.json');  
  xhr.send();
}
loadProducts();

async function loadPage() {
  try {
    await loadProductsFetch();

    const value = await new Promise((resolve) => { 
      loadCart(() => {
        resolve('value3');
      });
    });
  } catch (error) {

  }
    renderOrderSummary();
    renderPaymentSummary ();  
  }
  loadPage();