import React from "react";
import { render, screen } from "@testing-library/react";
import NavBar from "../../widgets/NavBar/NavBar";
import { Product, products } from "../../models/product";
import './cartItem'
import CartItem from "./cartItem";
import './cartPage.css'
function CartPage() {
    return <div className="CartPage">

            <div className="ItemsDetails">
                <div className="CartAddress">
                   From Saved Address
                   <button>
                     Enter Delivery Pincode
                   </button>
                </div>
                <div className="Items">
                    <CartItem product={products[0]} />
                    <CartItem product={products[1]} />
                </div>
            </div>
            <div className="PriceDetails" >
                <div className="PriceDetailsTitle">
                    PRICE DETAILS
                </div>
                <div className="PriceDetailsItem">
                    <div>
                        <div>
                            Price (1 item)
                        </div>
                        <div>
                            {products[0].price}
                        </div>
                    </div>
                    <div>
                        <div>
                            Discount
                        </div>
                        <div className="CartSavings green">

                           - ₹{ Number(products[0].mrp.slice(1).replace(',','')) - Number(products[0].price.slice(1).replace(',','')) }

                        </div>
                    </div>
                    <div>
                        <div>
                            Delivery Fee
                        </div>
                        <div>
                            ₹40
                        </div>

                    </div>
                    <div className="CartItemsTotalAmount">
                      <div>
                            Total Amount
                        </div>
                        <div>
                            ₹{11000
                            }
                        </div>
                    </div>
                    <div className="green CartSavings">
                    You will save ₹8,905 on this order
                    </div>
                </div>

            </div>
     
    </div>
}

export default CartPage;

