import { useContext, useReducer, createContext, useEffect } from "react";
import cartReducer from "./cartReducer";

const CartContext = createContext();
const CartContextDispatcher = createContext();

const initialState = {
  cart: [],
  total: 0,
};

const CartProvider = ({ children }) => {
  const [cart, dispatch] = useReducer(cartReducer, initialState);

  // if there are items in local storage, add them to the cart
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("cart")) || [];
    data.map((i) => dispatch({ type: "ADD_TO_CART", payload: i }));
  }, []);

  return (
    <CartContext.Provider value={cart}>
      <CartContextDispatcher.Provider value={dispatch}>
        {children}
      </CartContextDispatcher.Provider>
    </CartContext.Provider>
  );
};

export default CartProvider;

export const useCart = () => useContext(CartContext);
export const useCartActions = () => useContext(CartContextDispatcher);
