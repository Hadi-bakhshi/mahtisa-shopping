import { Link } from "react-router-dom";
import { useCart, useCartActions } from "../context/CartProvider";
import "./cartPage.css";

const CartPage = () => {
  // global state using context
  const { cart, total } = useCart();
  const dispatch = useCartActions();

  // when there is nothing in the cart we will show this message
  if (!cart.length)
    return (
      <main className="container">
        <h2>Your cart is empty</h2>
      </main>
    );
  // hadndlers for add and remove
  const incHandler = (cartItem) => {
    dispatch({ type: "ADD_TO_CART", payload: cartItem });
    addToLocalStorage(cartItem);
  };
  const decHandler = (cartItem) => {
    dispatch({ type: "REMOVE_PRODUCT", payload: cartItem });
    removeItem(cartItem);
  };

  // remove item from local storage when user remove it from cart
  const removeItem = (cartItem) => {
    const data = JSON.parse(localStorage.getItem("cart"));
    const index = [...data].findIndex((item) => item.id === cartItem.id);
    data.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(data));
  };
  // add to local storage when user add it to cart
  const addToLocalStorage = (cartItem) => {
    const data = JSON.parse(localStorage.getItem("cart")) || [];
    const newData = [...data, cartItem];
    localStorage.setItem("cart", JSON.stringify(newData));
  };

  return (
    <main className="container">
      {/* Wrapper section for both cart items and reciept  */}
      <section className="cartPageCenter--container">
        {/* Cart products details section */}
        <section className="cartItem--container">
          {/* map on items that added to cart */}
          {cart.map((item) => {
            return (
              <div className="cartItem" key={item.id}>
                <div className="itemImage-container">
                  <img src={item.image} alt={item.name} />
                </div>
                <div>{item.name}</div>
                <div>$ {item.offPrice * item.quantity}</div>
                <div>
                  <button
                    className="btnGroup bt1"
                    onClick={() => incHandler(item)}
                  >
                    +
                  </button>
                  <button className="btnGroup bt2">{item.quantity}</button>
                  <button
                    className="btnGroup bt3"
                    onClick={() => decHandler(item)}
                  >
                    -
                  </button>
                </div>
              </div>
            );
          })}
          {/* end of the map */}
        </section>
        {/* end of Cart products details section */}

        {/* reciept and checkout component */}
        <CartSummary cart={cart} total={total} />
        {/* end of reciept and checkout component */}
      </section>
      {/* end of wrapper section for both cart items and reciept */}
    </main>
  );
};

export default CartPage;

const CartSummary = ({ cart, total }) => {
  // this function calculate the total price of the cart without discount
  const originalTotalPrice = cart.length
    ? cart.reduce((acc, curr) => acc + curr.quantity * curr.price, 0)
    : 0;

  return (
    <section className="cartSummary--container">
      <h3 style={{ marginBottom: "30px" }}>Reciept</h3>
      {/* original price of products */}
      <div className="summary-item">
        <p>Products Price :</p>
        <p>$ {originalTotalPrice}</p>
      </div>
      {/* total discount of products */}
      <div className="summary-item">
        <p>Products Discount :</p>
        <p>$ {originalTotalPrice - total}</p>
      </div>
      {/* total price of products with discount counted */}
      <div className="summary-item net">
        <p>Total price :</p>
        <p>$ {total}</p>
      </div>
      {/* link to check out page if user is logged in */}
      <Link className="linkbtn-checkout" to="/signup?redirect=checkout">
        <button className="btn primary" style={{ marginTop: "25px" }}>
          Checkout
        </button>
      </Link>
    </section>
  );
};
