import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "../reducer/cartReducer";

const CartContext = createContext();
const getLocalData =() =>{
    let newData = localStorage.getItem("store");
    if(newData===[])
    return [];
    else
    return JSON.parse(newData);
}
const initialState = {
  cart: getLocalData(),
  total_item: "",
  total_price: "",
  shipping_fee: 50000,
};

const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addToCart = (id, color, amount, product) => {
    dispatch({ type: "ADD_TO_CART", payload: { id, color, amount, product } });
  };

  const removeItem = (id) => {
    dispatch({ type: "REMOVE_ITEM", payload: id });
  };

  const clearCart = () =>{
    dispatch({type: "CLEAR_CART"});
  }

  const setIncrease = (id)=>{
    dispatch({type:"INCREASE_AMOUNT", payload : id});
  }
  const setDecrease = (id)=>{
    dispatch({type:"DECREASE_AMOUNT", payload : id});
  }

//   to add data to localStorage so that on refresh our data doesn't get vanished
  useEffect (()=>{
    dispatch({type : "CART_ITEMS_PRICE_TOTAL"})
    localStorage.setItem("store", JSON.stringify(state.cart))
  }, [state.cart])
  return (
    <CartContext.Provider value={{ ...state, addToCart, removeItem , clearCart, setDecrease, setIncrease}}>
      {children}
    </CartContext.Provider>
  );
};

const useCartContext = () => {
  return useContext(CartContext);
};

export { CartProvider, useCartContext };