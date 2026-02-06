function Cart(localStorage){
const cart = {
	cartItems: undefined,

	loadFromStorage() {;
		this.cartItems = JSON.parse(localStorage.getItem(localStorageKey));

  if (!this.cartItems) {
    this.cartItems = [{
      productId: '1',
      quantity: 2,
      deliveryOptionId: '1'
    }, {
      productId: '2',
      quantity: 1,
      deliveryOptionId: '2'
    }];
  }
},

saveToStorage() {
  localStorage.setItem(localStorageKey, JSON.stringify(this.cartItems));
},

		addToCart(productId) {
			let matchingItem;

			this.cartItems.forEach((cartItem) => {
				if (productId === cartItem.productId) {
					matchingItem = cartItem;
				}
			});

			if (matchingItem) {
				matchingItem.quantity += 1;
			} else {
				this.cartItems.push({
					productId: productId,
					quantity: 1,
					deliveryOptionId: '1'
				});
			}
						this.saveToStorage();
				
removeFromCart(productId) 
  const newCart = [];

  this.cartItems.forEach((cartItem) => {
    if (cartItem.productId !== productId) {
      newCart.push(cartItem);
    }
  });

  this.cartItems = newCart;
  this.saveToStorage();
},
		updateDeliveryOption(productId, deliveryOptionId) {
			let matchingItem;

			this.cartItems.forEach((cartItem) => {
				if (productId === cartItem.productId) {
					matchingItem = cartItem;
				}
			});

			matchingItem.deliveryOptionId = deliveryOptionId;

			this.saveToStorage();
			}
		};
		return cart;
	}

	const cart = Cart('cart-opp');
	const businessCart = Cart('cart-business');
	cart.loadFromStorage();


	businessCart.loadFromStorage
