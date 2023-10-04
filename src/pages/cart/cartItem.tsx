import React from "react";
import { Product } from "../../models/product";
import './cartItem.css';
function CartItem({product}: {product: Product}) {
    return <div className="CartItem">
        <div className="CartItemLeft">
            <div>
            <img className="CartItemImage" src={product.images[0]} />
           
            </div>
            <div className="CartItemLeftDetails">
                <div className="CartItemLeftDetailsName">
                    {product.name}
                </div>
                <div className="CartItemLeftDetailsDesc">
                  {product.description}
                </div>
                <div className="CartItemLeftDetailsPrice">
                    {product.price}
                </div>
            
            </div>
        </div>
        <div className="CartItemRight">
        <div className="CartItemLeftDetailsQuantity">
                    <button type="button">-</button>
                    <div className="CartItemLeftDetailsQuantityValue">
                        1
                    </div>
                    <button type="button">+</button>
                </div>
            <button type="button" className="TextButton">SAVE FOR LATER</button>

            <button type="button" className="TextButton">REMOVE</button>
        </div>
    </div>


}

export default CartItem;