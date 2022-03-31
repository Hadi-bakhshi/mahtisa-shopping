import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthProvider";
import { useCart } from "../../context/CartProvider";
import "./checkOut.css";

const CheckoutComponent = () => {
  const auth = useAuth();
  const { cart, total } = useCart();

  if (!cart.length)
    return (
      <main className="container">
        <Link to="/">Go shopping</Link>
      </main>
    );

  return (
    <main className="container">
      <section className="cartPageCenter--container">
        {auth ? (
          <section className="cartItem--container">
            <div className="buyer-info">
              <h3>Checkout details</h3>
              <div>
                <p>Name : </p>
                <span>{auth.name}</span>
              </div>
              <div>
                <p>Email :</p>
                <span>{auth.email}</span>
              </div>
              <div>
                <p>Phone Number :</p>
                <span>{auth.phoneNumber}</span>
              </div>
              <div>{new Date().toLocaleString() + ""}</div>
            </div>
          </section>
        ) : (
          <p>please login to checkout</p>
        )}
        <section className="cartSummary-container">
        <h3 className="receiptTitle">Final Receipt</h3>
          {cart &&
            cart.map((item) => {
              return (
                <div className="finalItems-buy">
                  
                  {item.name} * {item.quantity} ={" "}
                 $ {item.quantity * item.offPrice}
                </div>
              );
            })}
          <hr />
          <div>Total price is :$ {total}</div>
          <button className="btn primary buyBtn">Buy</button>
        </section>
      </section>
    </main>
  );
};

export default CheckoutComponent;
