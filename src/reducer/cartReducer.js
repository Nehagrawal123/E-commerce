import React from 'react'

const cartReducer = (state, action) => {
    
    if(action.type==="ADD_TO_CART")
    {
        let {id, color, amount, product} = action.payload;
        let existingProduct = state.cart.find((curele)=>curele.id===id+color);

            if(existingProduct)
            {
                let updatedProduct = state.cart.map((curele)=>{
                    if(curele.id===id+color)
                    {
                        let newAmount = curele.amount + amount;
                        if(newAmount>=curele.max)
                        newAmount= curele.max;

                        return{
                            ...curele,
                            amount: newAmount,
                        };
                    }
                    else
                    {
                        return curele;
                    }
                })
                return{
                    ...state,
                    cart : updatedProduct,
                }
            }
            else{
                
                // console.log("🚀 ~ file: Cart.js ~ line 6 ~ Cart ~ cart", product)
                let cartProduct;
                cartProduct = {
                    id:id+color,
                    name:product.name,
                    color, 
                    amount, 
                    image : product.image[0].url,
                    price : product.price,
                    max : product.stock,
                }
                return {
                    ...state,
                    cart : [...state.cart, cartProduct],
                }
            }
        
    }
    if(action.type==="REMOVE_ITEM")
    {
        let updatedCart = state.cart.filter((curele) =>curele.id !== action.payload )
        return{
            ...state,
            cart : updatedCart,
        }
    }
    if(action.type==="CLEAR_CART")
    {
        return{
            ...state,
            cart : [],
        }
    }
    if(action.type ==="INCREASE_AMOUNT")
    {
        let updatedProduct = state.cart.map((curele)=>{
            if(curele.id===action.payload)
            {
                let newAmount = curele.amount+1;
                if(newAmount>=curele.max)
                newAmount = curele.max;
                return {
                    ...curele,
                    amount : newAmount,
                }
            }
            else
            return curele;
        })
        return{
            ...state,
            cart : updatedProduct,
        }
    }
    if(action.type==="DECREASE_AMOUNT")
    {
        let updatedProduct = state.cart.map((curele)=>{
            if(curele.id===action.payload)
            {
                let newAmount = curele.amount-1;
                if(newAmount<1)
                newAmount = 1;
                return{
                    ...curele,
                    amount :newAmount,
                }
            }
            else
            return curele;
        })
        return{
            ...state,
            cart:updatedProduct,
        }
    }
    if (action.type === "CART_ITEMS_PRICE_TOTAL") {
          let{total_amount, total_price} = state.cart.reduce ((initial, current)=>{
            let {price, amount} = current;
            initial.total_amount +=amount;
            initial.total_price +=amount*price;
            return initial;
          }, {
            total_amount:0,
            total_price:0,
          })
          return{
            ...state,
            total_item:total_amount,
            total_price:total_price,
          }
          }
        
    return state;
  
}

export default cartReducer