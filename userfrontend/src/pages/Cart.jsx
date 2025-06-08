import { useCart } from "../context/CartContext";
import "../styles/cart.css";

function Cart() {
  const { cartItems, removeFromCart, updateQuantity, clearCart } = useCart();
  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="cart-page">
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul className="cart-list">
            {cartItems.map((item) => (
              <li key={item.id} className="cart-item">
                <div>
                  <h4>{item.name}</h4>
                  <p>₹{item.price}</p>
                  <div className="cart-controls">
                    <button onClick={() => updateQuantity(item.id, -1)}>-</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => updateQuantity(item.id, 1)}>+</button>
                    <button onClick={() => removeFromCart(item.id)}>Remove</button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
          <div className="cart-summary">
            <h3>Total: ₹{total}</h3>
            <button onClick={clearCart}>Clear Cart</button>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;
