
import { useState, Component } from 'react';
import './offers.css';
import right from './right-arrow.png';
import { render } from '@testing-library/react';
class offer{
    constructor(id, imgUrl) {
        this.id = id;
        this.imgUrl = imgUrl 
      }
}

const offers = [ 
new offer("o1", "https://rukminim2.flixcart.com/fk-p-flap/3376/560/image/11b9c0d2db5c2ab1.jpg?q=50"),
new offer("o2", "https://rukminim2.flixcart.com/fk-p-flap/3376/560/image/05cdea6dbe08c481.jpg?q=50"),
new offer("o3","https://rukminim2.flixcart.com/fk-p-flap/3376/560/image/34ea3229ae1d5d5a.jpg?q=50"),
];

function OffersList({offers})  {

   
  function handleLeftClick() {
    // const slider = document.querySelector('.product-list');
    const slider = document.querySelector('.offers-list');
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
    const slider = document.querySelector('.offers-list');


    const direction = 1;
    if (slider) {
        const scrollAmount = slider.clientWidth * direction;
        slider.scrollBy({
         
            left: scrollAmount,
            behavior: 'smooth'
        });
    }
}

  
 
  return (
    

     <div className='category-display'>
            <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@48,400,0,0" />
            <div className='container'>
                <div className='slider-wrapper'>
                    <button id="prev-slide" className="slide-button material-symbols-rounded" onClick={handleLeftClick}>
                        chevron_left
                    </button>
                    <div className='offers-list'>
                        {offers.map(
        (offer) => (
        <a href='#' className="offerItem" key={offer.id}> <img src={offer.imgUrl} className='offerImg' /> </a>
      )
      )}
                    </div>
                    <button id="next-slide" className="slide-button material-symbols-rounded" onClick={handleRightClick}>
                        chevron_right
                    </button>
                </div>
            </div>
        </div>
  
   


  );
      
}




export  {OffersList, offers, offer};