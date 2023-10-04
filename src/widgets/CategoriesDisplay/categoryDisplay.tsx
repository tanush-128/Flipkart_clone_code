import React from 'react';
import '../../models/product_category';
import right from './right-arrow.png';
import './categoryDisplay.css';
import { Link } from 'react-router-dom';
import { ProductCategory } from '../../models/product_category';


function CategoryDisplay({ product_category }: { product_category: ProductCategory}) {
    const [counter, setCounter] = React.useState(1);

    const noOfSubCategories = product_category.subCategories.length;

    function handleLeftClick() {
        const subCategories = document.getElementById(
            'subCategories' + product_category.id
        );
        if (subCategories) {
            if (counter > 1) {
                setCounter(counter - 1);
                subCategories.style.transform = `translateX(${(-counter * 100)}%)`;
            } else {
                setCounter(noOfSubCategories);
                subCategories.style.transform = `translateX(${(-counter * 100)}%)`;
            }
        }
    }

    function handleRightClick() {
        const subCategories = document.getElementById(
            'subCategories' + product_category.id
        );
        if (subCategories) {
            if (counter < noOfSubCategories) {
                setCounter(counter + 1);
                subCategories.style.transform = `translateX(${(-counter * 100)}%)`;
            } else {
                setCounter(1);
                subCategories.style.transform = `translateX(${(-counter * 100)}%)`;
            }
        }
    }

    return (
        <div className="categoryDisplay">
            <div className="categoryDesc">
                {product_category.name}
                <button type="button">VIEW ALL</button>
                <img src={product_category.imgUrl} alt={product_category.name} />
          
            </div>
            <div className="subCategoryList">
                <div className="sub_controls">
                    <button
                        className="lr"
                        id="left"
                        onClick={handleLeftClick}
                        type="button"
                    >
                        <img src={right} alt="left" />
                    </button>
                    <button
                        className="lr"
                        id="right"
                        onClick={handleRightClick}
                        type="button"
                    >
                        <img src={right} alt="right" />
                    </button>
                </div>
                <div
                    className="subCategories"
                    id={'subCategories' + product_category.id}
                    key={product_category.id}
                >
                    {product_category.subCategories.map((subCategory) => (
                        <Link className="link" to="/products" key={subCategory.id}>
                            <div className="subCategory">
                                <img
                                    src={subCategory.imgUrl}
                                    alt={subCategory.name}
                                    title={subCategory.name}
                                />
                                <span className="subCategoryName">{subCategory.name}</span>
                                <a>{subCategory.description}</a>
                                <span className="subCategoryCompany">
                                    {subCategory.company}
                                </span>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default CategoryDisplay;

