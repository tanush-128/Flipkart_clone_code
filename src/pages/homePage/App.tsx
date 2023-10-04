import React from 'react';
import './App.css';
import {CategoriesList,categories,Category} from '../../widgets/CategoriesList/CategoriesList';
import {OffersList,offers,offer} from '../../widgets/OffersList/OffersList';
import CategoryDisplay from '../../widgets/CategoriesDisplay/categoryDisplay';
import {ProductCategory, productCategories} from '../../models/product_category';
import Footer from '../../widgets/footer/footer';

function App() {
  return (
    <div className="App">

      <CategoriesList categories={categories} />
      <OffersList offers={offers} />
      {productCategories.map((productCategory) => ( <CategoryDisplay product_category={productCategory}  />))}
      <div>

      <Footer/> 
      </div>
    </div>
  );
}

export default App;
