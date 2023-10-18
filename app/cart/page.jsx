"use client";
import useCartStore from "@/store/useCartStore";

function Cart() {
  const { items, addItem, removeItem, clearCart } = useCartStore();
  console.log(items);
  return (
    <>
      <main>
        <div className="container">
          <h2>Shopping Cart</h2>
          {items.length === 0 ? (
            <p>Your cart is empty</p>
          ) : (
            <ul>
              {items.map((item) => (
                <li key={item.id}>
                  {item.name} - {item.price_html}
                  <button onClick={() => removeItem(item)}>Remove</button>
                </li>
              ))}
            </ul>
          )}
          <button onClick={() => clearCart()}>Clear Cart</button>
        </div>
      </main>
    </>
  );
}

export default Cart;
