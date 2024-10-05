import React from 'react';
import './buy.css'
import Footer from './footer';

const Card = ({ title, description, image,price,beds,baths,levels,sqft }) => {
  return (
    <>
    
    <div align='left' className="card">
      <img src={image} alt={title} />
    
      <div className="card-content">
        <h2>{title}</h2>
        <p className='buy-p'>{description}</p>
        <p className='buy-p1'>{price}</p>
        <div style={ {display:'flex'}}>
        <p className='buy-p'style={ {width:'20%'}} >Beds<br/>{beds}</p>
        <p className='buy-p'style={ {width:'20%'}}>Baths<br/>{baths}</p>
        <p className='buy-p'style={ {width:'20%'}}>Levels<br/>{levels}</p>
        <p className='buy-p'style={ {width:'20%'}}>Sqft<br/>{sqft}</p>
        </div>
        
      </div>
    </div>
    </>
  );
};

const Buy = () => {
  const cardsData = [
    {
      title: "17081 Perry Street",
      description: "San Francisco, CA, USA",
      image: ".././images/b2.webp",
      price:"$850,000",
      beds: 4,
      baths: 3,
      levels: 2,
      sqft: 2500
    },
    {
      title: "52591 Union Boulevard",
      description: "San Francisco, CA, USA",
      image: ".././images/b3.webp",
      price:"$580,000",
      beds: 4,
      baths: 3,
      levels: 2,
      sqft: 2500
    },
    {
      title: "33234 Washington Avenue",
      description: "San Francisco, CA, USA",
      image: ".././images/b4.webp",
      price:"$770,000",
      beds: 4,
      baths: 3,
      levels: 2,
      sqft: 2500
    },
    {
      title: "15066 Banks Street",
      description: "San Francisco, CA, USA",
      image: ".././images/b5.webp",
      price:"$700,000",
      beds: 4,
      baths: 3,
      levels: 2,
      sqft: 2500
    },
    {
      title: "15458 Lori Boulevard",
      description: "San Francisco, CA, USA",
      image: ".././images/b6.webp",
      price:"$680,000",
      beds: 4,
      baths: 3,
      levels: 2,
      sqft: 2500
    },
    {
      title: "25557 Grove Street",
      description: "San Francisco, CA, USA",
      image: ".././images/b7.webp",
      price:"$650,000",
      beds: 4,
      baths: 3,
      levels: 2,
      sqft: 2500
    }
  ];

  return (
    <>
    <div style={{ position: 'relative', width: '100%', display: 'inline-block' }}>
                <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(21, 34, 56, 0.5)', zIndex: 0 }}></div>
                <h2 style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', color: '#fff', zIndex: 1, fontFamily: 'Albertus' }}>OUR EXCLISIVE PROPERTIES</h2>
                <h2 style={{ position: 'absolute', top: '60%', left: '50%', transform: 'translate(-50%, -50%)', color: '#fff', zIndex: 1,fontSize:'40px' }}>BUY</h2>
                <img src=".././images/b1.webp" alt="Profile" style={{ width: '100%', display: 'block' }} />
            </div>
    <div align='center' className="card-list">
      {cardsData.map((card, index) => (
        <div key={index} className="card-wrapper">
          <Card title={card.title} description={card.description} image={card.image} price={card.price} beds={card.beds}
              baths={card.baths}
              levels={card.levels}
              sqft={card.sqft}/>
        </div>
      ))}
      
    </div>
    <Footer/>
    </>
  );
};

export default Buy;
