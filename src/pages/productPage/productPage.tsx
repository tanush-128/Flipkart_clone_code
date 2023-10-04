import "./productPage.css";

import { useParams } from "react-router-dom";
import { products, Product } from "../../models/product";
import React, {useState} from "react";

function ProductPage() {
    const {id} = useParams();
    var product : Product ;
    console.log(id);  
    const _product = products.find((product) => product.id === id);
    if (!_product) {
      throw new Error(`Product with id ${id} not found`);
    }
    
    else{
      product = _product;
    }
    const [imgSrc, setImg]  = useState(product.images[0]);

   


  console.log(product);
  return (
    <div className="productPage">
      {/* <NavBar /> */}
      <div className="productPageBody">
        <div className="productPageLeft">
          <div className="productImages">
            {product.images.map((image) => (
              <img className="productImageSmall" src={image}  onClick={()=>setImg(image)} />
            ))}
          </div>
          <img className="productImage" src={imgSrc} />
          <div className="buttons">
            <button type="button">Add to Cart</button>
            <button type="button">Buy Now</button>
          </div>
        </div>
        <div className="productPageRight">
          <div className="productPageInfo">
            <div className="productPageName">{product.name}</div>
            <div className="ratings">
              <div className="rating">
                {Number.parseFloat(product.rating).toFixed(1) + "★"}{" "}
              </div>
              <div className="ratingCount">{product.ratingsAndReviews}</div>
            </div>
            <div className="productPagePrice">
              <div className="productPrice">{product.price}</div>
              <div className="mrp">{product.mrp}</div>
              <div className="priceOff">{product.off}</div>
            </div>
            <div className="productPageBankOffers">
              <div className="bankOffer">Available Offers</div>
              <ul>
                <li>
                  <div className="bankOfferDetails">
                    Bank Offer 5% Unlimited Cashback on Flipkart Axis Bank
                    Credit Card
                  </div>
                </li>
                <li>
                  <div className="bankOfferDetails">
                    Bank Offer 10% Off on Bank of Baroda Mastercard debit card
                    first time transaction, Terms and Condition apply
                  </div>
                </li>
                <li>
                  <div className="bankOfferDetails">
                    Bank Offer 10% Off on First time ICICI Mastercard Credit
                    Card transaction, Terms and Condition apply
                  </div>
                </li>
                <li>
                  <div className="bankOfferDetails">
                    Bank Offer 5% Off on first time SBI Mastercard Debit Card
                    Transactions, Terms and Condition apply
                  </div>
                </li>
              </ul>
            </div>

            <div className="productPageDescription">
              <div className="productPageHighlights details">
                <div className="productPageHighlights title">Highlights</div>
                <ul>
                  {product.highlights.map((highlight) => (
                    <li>{highlight}</li>
                  ))}
                </ul>
              </div>
              <div className="productPagePaymentOptions details">
                <div className="productPagePaymentOptions title">
                  Payment Options
                </div>
                <ul>
                  <li>No cost EMI</li>
                  <li>Debit Card/Credit Card/Net Banking</li>
                  <li>Cash on Delivery</li>
                </ul>
              </div>
            </div>
            <div className="productPageProductDesc details">
              <div className="productPageProductDesc title">
                Description
              </div>
              <div className="productPageProductDesc">
                {product.description}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductPage;
