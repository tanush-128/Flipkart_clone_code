import React, { ReactNode } from 'react';
import '../../models/product_category';
import right from './right-arrow.png';
import './categoryDisplay.css';
import { Link } from 'react-router-dom';
import { ProductCategory } from '../../models/product_category';
import { JsxElement } from 'typescript';


function CategoryDisplay({ product_category }: { product_category: ProductCategory}){
 
function handleLeftClick() {
    // const slider = document.querySelector('.product-list');
    const slider = document.getElementById(product_category.id);
    const direction = -1;
    if (slider) {
        const scrollAmount = slider.clientWidth * direction;
        slider.scrollBy({
          
            left: scrollAmount,
            behavior: 'smooth'
        });
    }
}

function handleRightClick() {
    // const slider = document.querySelector('.product-list');
    const slider = document.getElementById(product_category.id);

    const direction = 1;
    if (slider) {
        const scrollAmount = slider.clientWidth * direction;
        slider.scrollBy({
         
            left: scrollAmount,
            behavior: 'smooth'
        });
    }
}


    return(
        <div className='category-display'>
            <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@48,400,0,0" />
            <div className='container'>
                <div className='slider-wrapper'>
                    <button id="prev-slide" className="slide-button material-symbols-rounded" onClick={handleLeftClick}>
                        chevron_left
                    </button>
                    <div className='product-list' key={product_category.id} id={product_category.id}>
                        {product_category.subCategories.map((subCategory) => (
                            <Link className="link" to="/products" key={subCategory.id}>
                                <div className="subCategory">
                                    <div>
                                    <img
                                        src={subCategory.imgUrl}
                                        alt={subCategory.name}
                                        title={subCategory.name}
                                    />
                                    </div>
                                   

                                    <div className="subCategoryName">{subCategory.name}</div>
                                    <div className='subCategoryDesc'>
                                        {subCategory.description}
                                    </div>
                                    <div className="subCategoryCompany">{subCategory.company}</div>

                                </div>
                            </Link>
                        ))}
                    </div>
                    <button id="next-slide" className="slide-button material-symbols-rounded" onClick={handleRightClick}>
                        chevron_right
                    </button>
                </div>
            </div>
        </div>
    );
}

        





export default CategoryDisplay;

