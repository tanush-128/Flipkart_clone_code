import React from 'react';
import {products, Product} from '../../models/product';
import './ProductOverview.css';
import star from './star.png';
import { Link } from 'react-router-dom'
function ProductOverview({product}: {product: Product}){
    
 return(
    <Link className='link' to={`/products/${product.id}`}>
<div className="productOverview">
    
    <div className="productOverviewLeft">
        <img src={product.images[0]} />
        <div className="productOverviewCenter">
        <div className="productOverviewCenterTitle">
            {product.name}
            </div>
            <div className='ratings'>

            <div className='rating'>{Number.parseFloat(product.rating).toFixed(1) + '★'} </div>
            <div className='ratingCount'>{product.ratingsAndReviews}</div>
            </div>
        
        <div className="productOverviewCenterHighlights">
            <ul>
                {
                    product.highlights.map((highlight) => <li>{highlight} </li>)
                }
                </ul>
                </div>    
        </div>  
        </div>
   
    <div className="productOverviewRight">
        <div className="productOverviewRightPrice">
          
        {product.price}
               
                </div>
             <div className='mrp'>
                {product.mrp}        
                </div>   
        </div>


</div>
 
 </Link>);
}

export default ProductOverview;