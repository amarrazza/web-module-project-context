import React, { useContext } from 'react';
import CartContext from '../contexts/CartContext';
// Components
import Item from './ShoppingCartItem';

const ShoppingCart = () => {
	const { cart, setCart } = useContext(CartContext);
	const getCartTotal = () => {
		return cart.reduce((acc, value) => {
			return acc + value.price;
		}, 0).toFixed(2);
	};

	const handleClick = () => {
		setCart([]);
	}

	return (
		<div className="shopping-cart">
			{cart.map(item => (
				<Item key={item.id} {...item} />
			))}

			<div className="shopping-cart__checkout">
				<p>Total: ${getCartTotal()}</p>
				<button>Checkout</button>
				<button onClick={handleClick}>Empty Cart</button>
			</div>
		</div>
	);
};

export default ShoppingCart;
