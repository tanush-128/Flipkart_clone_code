import React from 'react';
import'./categoryList.css';
import { useState } from 'react';


 class Category {
    id: string;
    name: string;
    imgUrl: string;

    constructor(id: string, name: string, imgUrl: string) {
      this.id = id;
      this.name = name;
      this.imgUrl = imgUrl;
    }
  }


const categories: Category[] = [
    new Category("c1", "Grocery", "https://rukminim2.flixcart.com/flap/128/128/image/29327f40e9c4d26b.png?q=100"),
    new Category("c2", "Mobile", "https://rukminim2.flixcart.com/flap/128/128/image/22fddf3c7da4c4f4.png?q=100"),
    new Category("c3", "Fashion", "https://rukminim2.flixcart.com/fk-p-flap/128/128/image/0d75b34f7d8fbcb3.png?q=100"),
    new Category("c4", "Electronics", "https://rukminim2.flixcart.com/flap/128/128/image/69c6589653afdb9a.png?q=100"),
    new Category("c5", "Home & Furnitures", "https://rukminim2.flixcart.com/flap/128/128/image/ab7e2b022a4587dd.jpg?q=100"),
    new Category("c6", "Appliances", "https://rukminim2.flixcart.com/flap/128/128/image/0ff199d1bd27eb98.png?q=100"),
    new Category("c7", "Travel", "https://rukminim2.flixcart.com/flap/128/128/image/71050627a56b4693.png?q=100"),
    new Category("c8", "Beauty,Toys & More", "https://rukminim2.flixcart.com/flap/128/128/image/dff3f7adcf3a90c6.png?q=100"),
    new Category("c9", "Two Wheelers", "https://rukminim2.flixcart.com/fk-p-flap/128/128/image/05d708653beff580.png?q=100"),


];

function CategoriesList({ categories: []}) {

  return (
  
    <div className='categoryList'>
      
      {categories.map((category) => (
        <CategoryWidget category={category} />
      ))} 
    </div>
  );
}

function CategoryWidget({ category} : {category: Category}){
  

  const [focused, setfocused] = useState(false);
  return (
    <div onMouseEnter={()=> setfocused(!focused)} onMouseLeave={()=> setfocused(!focused)}>
    <a href='#' className="categoryItem" key={category.id}>   
    <img src={category.imgUrl} alt='' /> {category.name} </a>
    
    <div className='floatingMenu' id={'menu'+category.id} style={{display: focused?"block":"none"}}>
     
     </div>
   </div>
  );
}


export  {CategoriesList, categories, Category};