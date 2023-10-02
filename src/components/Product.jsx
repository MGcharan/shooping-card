// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';



// eslint-disable-next-line react/prop-types
function Product({cardData, setCartValue }) {
  const [toggle, setToggle] = useState(true);

  return (
    
    // <div className='bg-secondary'>
  
    <div className="card m-4  ">
      
        
        {/* Card img */}
     {cardData.img1 &&(
         <img
         src="/images/chick2.webp"
         className="card-img-top "
         alt="Product"
       />
     )}
     {cardData.img2 &&(
         <img
         src="/images/mut2.jpg"
         className="card-img-top"
         alt="Product"
       />
     )}
     {cardData.img3 &&(
         <img
         src="/images/beef2.jfif"
         className="card-img-top "style={{height:'195px'}}
         alt="Product"
       />
     )}
     {cardData.img4 &&(
         <img
         src="/images/veg2.webp"
         className="card-img-top "style={{height:'195px'}}
         alt="Product"
       />
     )}
     {cardData.img5 &&(
         <img
         src="/images/egg2.jpg"
         className="card-img-top"style={{height:'195px'}}
         alt="Product"
       />
     )}
     {cardData.img6 &&(
         <img
         src="/images/prawn.jpg "
         className="card-img-top "
         alt="Product"
       />
     )}
     {cardData.img7 &&(
         <img
         src="/images/mush1.webp"
         className="card-img-top "style={{height:'300px'}}
         alt="Product"
       />
     )}
     {cardData.img8 &&(
         <img
         src="/images/panner.jfif"
         className="card-img-top"
         alt="Product"
       />
     )}

{cardData.img9 &&(
         <img
         src="/images/kola.jfif"
         className="card-img-top"style={{height:'300px'}}
         alt="Product"
       />
     )}




      <div className="card-body p-4 text-center">
        <h5 className="card-title">{cardData.name}</h5>
        <p className="card-text">
           {cardData.price}
        </p>
      </div>
      <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
        <div className="text-center">
          {toggle ? (
            <button
              className="btn btn-outline-dark mt-auto"
              onClick={() => {
                setCartValue((value) => value + 1);
                setToggle(false);
              }}
            >
              Add To Cart
            </button>
          ) : (
            <button
              className="btn btn-outline-dark mt-auto"
              onClick={() => {
                setCartValue((value) => value - 1);
                setToggle(true);
              }}
            >
              Remove from Cart
            </button>
          )}
        </div>
      </div>
    </div>
    // </div>
  );
}

// eslint-disable-next-line react/prop-types
function CardGrid({ setCartValue }) {
  const cardData = [
    { name: 'Chicken Briyani',  price: '₹ 120',img1:true },
    { name: 'Mutton Briyani',  price: '₹ 220', img2:true},
    { name: 'Beef Briyani',  price: '₹ 280',img3:true },
    { name: 'Veg Briyani',  price:'₹ 80',img4:true },
    { name: 'Egg Briyani',price:'₹ 100' ,img5:true },
    { name: ' Prawn Briyani',price:'₹ 150' ,img6:true },
    { name: ' Mushroom Briyani',price:'₹ 180' ,img7:true },
    { name: 'Panner Briyani',price:'₹ 150' ,img8:true },
    { name: 'Kola Briyani',price:'₹ 200' ,img9:true }
    
  ];

  return (
    <div>
      <div className="container ">
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3">
          {cardData.map((card, index) => (
            <div key={index} className="col-mb-4">
              <Product cardData={card} setCartValue={setCartValue} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CardGrid;