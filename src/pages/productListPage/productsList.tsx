
import { products, Product } from "../../models/product";
import ProductOverview from "../../widgets/productOverview/ProductOverview";
import "./productList.css";

import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider'; // import Slider from the correct path


import  {Filter, FilterWidget} from "../../widgets/filter/filter";

function valuetext(value : number) {
    return `${value}°C`;
  }



function ProductList() {
  var filters = [
    new Filter("f1","Brand",["Lenovo","Dell","Samsung","Asus"] ),
    new Filter("f2","Customer Ratings", ["4★ & above","3★ & above","2★ & above","1★ & above"]),
    new Filter("f3","Discount", ["10% or more","20% or more","30% or more","40% or more","50% or more"]),
    
];
    const [value, setValue] = React.useState([20, 37]);

    const handleChange = (event:any, newValue:any) => {
      setValue(newValue);
    };
  return (
    <div>
      
      <div style={{ height: "64px" }}></div>

      <div className="ProductListBody">
        <div className="filters">
            <div className="price">
                <div className="priceTitle">PRICE</div>
                <Box sx={{ width:"200px" }}>
      <Slider

        getAriaLabel={() => 'Temperature range'}
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        getAriaValueText={valuetext}
        
        // color=""
      />
    </Box>
    <div className="price-range"> 
   <select className="select" placeholder="MIN">
   <option value="0">Min</option> 
   <option value="500">500</option>
   <option value="1000">1000</option>
   <option value="1500">1500</option>
   <option value="2000">2000</option>
    </select>
    <span className="to">to</span>
    <select className="select" placeholder="MIN">
   <option value="0">Max</option> 
   <option value="500">500</option>
   <option value="1000">1000</option>
   <option value="1500">1500</option>
   <option value="2000">2000</option>
    </select>
    </div>

            </div>
         
           {filters.map((e) => (
                // console.log(e),
                <FilterWidget filter={e} />
            ))}
            
            
          
        </div>
          
        <div className="productList">
          {products.map((product) => (
            
            <ProductOverview product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProductList;
