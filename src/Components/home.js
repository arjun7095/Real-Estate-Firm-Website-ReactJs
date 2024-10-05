import React from "react";
import './home.css';
import Footer from "./footer";
import { NavLink } from "react-router-dom";

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
function Home() {
    const cardsBuyData = [
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
        
      ];
      const cardsRentData = [
        {
          title: "11251 Terry Street",
          description: "San Francisco, CA, USA",
          image: ".././images/r2.webp",
          price:1500,
          beds: 4,
          baths: 3,
          levels: 2,
          sqft: 2500
        },
        {
          title: "22043 Columbus Avenue",
          description: "San Francisco, CA, USA",
          image: ".././images/r3.webp",
          price:1200,
          beds: 4,
          baths: 3,
          levels: 2,
          sqft: 2500
        },
        {
          title: "15878 Mulberry Street",
          description: "San Francisco, CA, USA",
          image: ".././images/r4.webp",
          price:1800,
          beds: 4,
          baths: 3,
          levels: 2,
          sqft: 2500
        },
        
      ];
    return (
        <>
            <div align='center' className="home" style={{
                backgroundImage: "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('.././images/img1.jpg')",
                backgroundSize: 'cover',
                width: '100%',
                height: '700px'
            }}>
                <div className="head">
                    <strong><span className="a">New Properties</span></strong> <br />
                    <span className="b">EXCLUSIVELY BY AYVAN</span>
                </div>
                <button type="button" className="home-btn"><NavLink className='link' to="/all">Explore</NavLink></button>

            </div>
            <div align='center' className="p1">WHAT ARE YOU LOOKING FOR ?</div>

            <div align='center' className="choice">
                <div className="left" style={{ backgroundImage: "linear-gradient(rgba(19, 251, 81, 0.7), rgba(19, 251, 81, 0.7)), url('.././images/h1.webp')" }}>
                    <button type="button" className="buy-btn"><NavLink className='link' to="/buy"><strong>BUY</strong></NavLink></button>
                </div>
                <div className="right" style={{ backgroundImage: "linear-gradient(rgba(220, 12, 195, 0.5), rgba(220, 12, 195, 0.5)), url('.././images/h2.webp')" }}>
                    <button type="button" className="buy-btn"><NavLink className='link' to="/rent"><strong>RENT</strong></NavLink></button>
                </div>
            </div>
            <div align='center' className="p1">New Properties<br />BUY</div>
            <div align='center' className="card-list">
                {cardsBuyData.map((card, index) => (
                    <div key={index} className="card-wrapper">
                        <Card title={card.title} description={card.description} image={card.image} price={card.price} beds={card.beds}
                            baths={card.baths}
                            levels={card.levels}
                            sqft={card.sqft} />
                    </div>
                ))}
                
            </div>
            <div align='center'>
                <button align='center' type="button" className="link-btn"><NavLink className='link' to="/buy">View All</NavLink></button>
            </div>
            <div align='center' className="p1">New Properties<br />RENT</div>
            <div align='center' className="card-list">
                {cardsRentData.map((card, index) => (
                    <div key={index} className="card-wrapper">
                        <Card title={card.title} description={card.description} image={card.image} price={card.price} beds={card.beds}
                            baths={card.baths}
                            levels={card.levels}
                            sqft={card.sqft} />
                    </div>
                ))}
                
            </div>
            <div align='center' style={ {marginBottom:'50px'}}>
                <button align='center' type="button" className="link-btn"><NavLink className='link' to="/rent">View All</NavLink></button>
            </div>
            <Footer />
        </>

    );
}

export default Home;
