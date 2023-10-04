
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

    var counter =1;
    var noOfOffers = offers.length;
    var screenWidth =  window.screen.width;
    function handleLeftClick() {
    var offersList = document.getElementById("offerList");
      
      counter--;
      if(counter <1){
        counter = noOfOffers;
      }
      offersList.style.transform = `translateX(-${screenWidth * (counter-1) }px)`;
    
  
      console.log("left");
    }
    function handleRightClick() {
    var offersList = document.getElementById("offerList");

      counter++;
      if(counter >noOfOffers){
        counter = 1;
      }
      offersList.style.transform =`translateX(-${screenWidth *( counter-1)}px)`;
      console.log("right");
    }
    console.log(screenWidth);

  
 
  return (
    
  <div className='banner'>
    
    <div className='controls'>
    
     <button  className='lr' id="left" onClick={handleLeftClick}><img src={right} /></button> 
     <button  className='lr' id="right" onClick={handleRightClick} > <img src={right} /></button>  
    
    </div>
   
    <div className='offers'>
     
     <div className='offersList' id='offerList'>
      { 
      offers.map(
        (offer) => (
        <a href='#' className="offerItem" key={offer.id}> <img src={offer.imgUrl} className='offerImg' /> </a>
      )
      )
      } 
    </div>
    </div>
    </div>

  );
      
}

export  {OffersList, offers, offer};