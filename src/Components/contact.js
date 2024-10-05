import React from "react";
import Footer from "./footer";

function Contact() {
    return (
        <>
            <div style={{ position: 'relative', width: '100vw', overflow: 'hidden', textAlign: 'center' }}>
                <div style={{ position: 'relative', display: 'inline-block' }}>
                    <img src=".././images/img_contact.jpeg" alt="Profile Image" style={{ width: '100%', display: 'block' }} />
                    <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', color: 'white', zIndex: '1', textAlign: 'center' }}>
                        <h2 style={{ fontStyle: 'italic', margin: '0', fontSize: '32px', letterSpacing: '2px', textTransform: 'uppercase', color: 'red' }}>Be in Touch</h2>
                        <h2 style={{ margin: '5px 0', fontStyle: 'italic', fontSize: '24px', letterSpacing: '1px', color: 'red' }}>Contact</h2>

                    </div>
                </div>
                <div style={{ display: 'flex', justifyContent: 'center', marginTop: '60px', textAlign: 'left', maxWidth: '900px', margin: '0 auto', padding: '60px' }}>
                    <div style={{ flex: '1', marginRight: '20px' }}>
                        <p style={ {color:'black'}}><strong>Our Office</strong></p>
                    </div>
                    <div style={{ flex: '1', marginRight: '20px' }}>
                        <p style={ {color:'black'}}>500 Terry Francine </p>
                        <p style={ {color:'black'}}>San Francisco </p>
                    </div>
                    <div style={{ flex: '1', marginRight: '20px' }}>
                        <p style={ {color:'black'}}>Tel: 123-456-7890</p>
                        <p style={ {color:'black'}}>Fax: 123-456-7890</p>
                    </div>
                    <div style={{ flex: '1' }}>
                        <p style={ {color:'black'}}>Email: info@mysite.com</p>
                    </div>
                </div>
                <div style={{ marginTop: '20px', width: '100%' }}>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11516.772470774165!2d-86.7776289072333!3d33.514811281259014!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88891a4f30419749%3A0xf6b8aece3396bdd9!2sDwell%20Properties%2C%20LLC!5e0!3m2!1sen!2sin!4v1709731216778!5m2!1sen!2sin" width="100%" height="450" style={{ border: '0', display: 'block', margin: '0 auto' }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
                <div align='center' style={{ marginTop: '20px', width: '100%', maxWidth: '900px', margin: '0 auto', padding: '20px' }}>
                    <h2><center>GET IN TOUCH</center></h2>
                    <p  style={ {color:'black',fontSize:'15px',marginLeft:'70px'}}>"Welcome to Ayvan Properties, your premier destination for finding the perfect home for rent or sale! We take pride in offering a diverse range of high-quality properties that cater to the unique preferences and needs of our clients. Whether you're in search of a cozy apartment nestled in the heart of the city, a spacious family home in the tranquil suburbs, or a luxurious beachfront villa, we have an extensive selection of rental and for-sale properties to choose from.

                        Our dedicated team is committed to providing exceptional service and guidance throughout your property journey. Whether you're renting for a short-term stay or looking to invest in your dream home, we're here to assist you every step of the way.

                        Explore our listings today and let Ayvan Properties help you find your perfect home. Welcome to the beginning of your next chapter!".</p>
                </div>
                <div style={{ marginTop: '20px', textAlign: 'left', margin: '0 auto', padding: '20px', backgroundColor: '#152238' }}>
                    <h2 style={{ textAlign: 'center', color: 'white', fontFamily: 'Albertus' }}><strong>CONTACT US</strong></h2>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <div style={{ flex: '1', marginRight: '10px', color: 'white' }}>
                            <h2 style={{ color: 'white' }}>FIND YOUR NEXT HOME</h2>
                            <p style={ {color:'white',fontSize:'15px',marginLeft:'40px'}}>"Welcome to Ayvan Properties, your premier destination for finding the perfect home for rent or sale! We take pride in offering a diverse range of high-quality properties that cater to the unique preferences and needs of our clients. Whether you're in search of a cozy apartment nestled in the heart of the city, a spacious family home in the tranquil suburbs, or a luxurious beachfront villa, we have an extensive selection of rental and for-sale properties to choose from"</p>
                        </div>
                        <div align='center' style={{ flex: '1', marginLeft: '20px', backgroundColor: '#152238', padding: '20px' }}>
                            <form>
                                <div style={{ marginBottom: '15px' }}>
                                    <label htmlFor="firstName" style={{ color: 'white' }}>First Name</label><br />
                                    <input type="email" id="email" name="email" placeholder="Enter your First Name" style={{ border: 'none', borderBottom: '3px solid white', width: '230px', background: 'transparent', color: 'white' }} />
                                </div>
                                <div style={{ marginBottom: '15px' }}>
                                    <label htmlFor="lastName" style={{ color: 'white' }}>Last Name</label><br />
                                    <input type="email" id="email" name="email" placeholder="Enter your last Name" style={{ border: 'none', borderBottom: '3px solid white', width: '230px', background: 'transparent', color: 'white' }} />
                                </div>
                                <div style={{ marginBottom: '15px' }}>
                                    <label htmlFor="email" style={{ color: 'white' }}>Email<span style={{ color: 'red' }}>*</span></label><br />
                                    <input type="email" id="email" name="email" placeholder="Enter your email" style={{ border: 'none', borderBottom: '3px solid white', width: '230px', background: 'none', color: 'black' }} />
                                </div>
                                <div style={{ marginBottom: '15px' }}>
                                    <label style={{ color: 'white' }}>Interested in:</label><br />
                                    <input type="radio" id="buy" name="interest" value="buy" />
                                    <label htmlFor="buy" style={{ color: 'white' }}>Buy</label>
                                    <input type="radio" id="rent" name="interest" value="rent" />
                                    <label htmlFor="rent" style={{ color: 'white' }}>Rent</label>
                                    <input type="radio" id="other" name="interest" value="other" />
                                    <label htmlFor="other" style={{ color: 'white' }}>Other</label>
                                </div>
                                <div style={{ marginBottom: '15px' }}>
                                    <label htmlFor="message" style={{ color: 'white' }}>Message</label><br />
                                    <textarea id="message" name="message" rows="4" placeholder="Enter your message"></textarea>
                                </div>
                                <button type="submit" style={{ color: 'white', backgroundColor: 'red' }}>Submit</button>
                            </form>
                        </div>
                    </div>
                </div>

            </div>
            <Footer/>

        </>

    );
}
export default Contact;