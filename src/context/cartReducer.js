const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART": {
      const updatedCart = [...state.cart];
      const existingProductIndex = updatedCart.findIndex(
        (item) => item.id === action.payload.id
      );
      if (existingProductIndex < 0) {
        updatedCart.push({ ...action.payload, quantity: 1 });
      } else {
        const updatedItems = { ...updatedCart[existingProductIndex] };
        updatedItems.quantity++;
        updatedCart[existingProductIndex] = updatedItems;
      }
      return {
        ...state,
        cart: updatedCart,
        total: state.total + action.payload.offPrice,
      };
    }
    case "REMOVE_PRODUCT": {
      const updatedCart = [...state.cart];
      const existingProductIndex = updatedCart.findIndex(
        (item) => item.id === action.payload.id
      );
      const updatedItems = { ...updatedCart[existingProductIndex] };
      if (updatedItems.quantity === 1) {
        const filteredCart = updatedCart.filter(
          (item) => item.id !== action.payload.id
        );
        return {
          ...state,
          cart: filteredCart,
          total: state.total - action.payload.offPrice,
        };
      } else {
        updatedItems.quantity--;
        updatedCart[existingProductIndex] = updatedItems;
        return {
          ...state,
          cart: updatedCart,
          total: state.total - action.payload.offPrice,
        };
      }
    }
    default:
      return state;
  }
};
export default cartReducer;
