class Cart{
		cartItems;
		#localStorageKey;
		
		constructor(localStorageKey) {
			this.#localStorageKey = localStorageKey;
			this.#loadFromStorage();
	
		}

		#loadFromStorage() {
			this.cartItems = JSON.parse(this.#localStorageKey.getItem(this.#localStorageKey));

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
	
			this.saveToStorage();
	 } 
			localStorage.setItem(this.#localStorageKey, JSON.stringify(this.cartItems));
		}
	
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
				}

				removeFromCart(productId) {
					const newCart = [];

					this.cartItems.forEach((cartItem) => {
						if (cartItem.productId !== productId) { 
							newCart.push(cartItem);
								}
							});
							
							this.cartItems = newCart;

							this.saveToStorage();
						}

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
			}
}
	const cart = new Cart('cart-oop');
	const businessCart = new Cart('cart-business');

	cart.loadStorageKey = 'aaa';
cart.#localStorageKey = 'test';

				}
	cart.loadFromStorage();
	businessCart.loadFromStorage();
			});