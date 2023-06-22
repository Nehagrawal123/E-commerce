import React from 'react';
import FormatPrice from '../Helper/FormatPrice';
import CartAmountToggle from './CartAmountToggle';
import { FaTrash } from 'react-icons/fa';
import { useCartContext } from '../context/cartContext';
const CartItem = ({id, name, image, color, price, amount}) => {
    const {removeItem, setDecrease, setIncrease} = useCartContext();
    
  return (
    <div className="cart_heading grid grid-five-column">
        {/* 1 COLUMN */}
      <div className="cart-image--name">
        <div>
            <figure>
            <img src={image} alt={id}></img>
            </figure>
        </div>
        <div>
            <p>{name}</p>
            <div className='color-div'>
                <p>color:</p>
            <div className='color-style' 
                style={{backgroundColor : color, color:color}}></div>
        </div>
        </div>       
      </div>
        {/* 2 COLUMN */}
        <div className='cart-hide'>
            <p><FormatPrice price={price}></FormatPrice>  </p>
        </div>
        {/* 3 COLUMN */}
        <CartAmountToggle
        amount={amount}
        setDecrease={()=>setDecrease(id)}
        setIncrease={()=>setIncrease(id)}
      />
        {/* 4 COLUMN */}
        <div className='cart-hide'>
            <p><FormatPrice price={price*amount}></FormatPrice> </p>
        </div>
        {/* 5 COLUMN */}
        <div>
            <FaTrash className="remove-icon" onClick={()=>removeItem(id)}></FaTrash>
        </div>
      </div>
  )
}

export default CartItem

