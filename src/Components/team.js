import React from 'react';
import Footer from './footer';

function Team() {
    return (
        <>
        <div>
            <div style={{ position: 'relative', width: '100%', display: 'inline-block' }}>
                <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(21, 34, 56, 0.5)', zIndex: 0 }}></div>
                <h2 style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', color: '#fff', zIndex: 1, fontFamily: 'Albertus' }}>OUR TEAM</h2>
                <h2 style={{ position: 'absolute', top: '60%', left: '50%', transform: 'translate(-50%, -50%)', color: '#fff', zIndex: 1 }}>Agents</h2>
                <img src=".././images/img_team.jpeg" alt="Profile Image" style={{ width: '100%', display: 'block' }} />
            </div>
            <div style={{ display: 'flex', marginTop: '100px', marginLeft: '110px' }}>
                <div style={{ textAlign: 'left', marginRight: '50px', boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.5)', padding: '0 30px' }}>
                    <div>
                        <h2><strong>Gregory Jems</strong></h2>
                        <p style={ {color:'black',marginLeft:'10px'}}>Realtor # 123.456.78</p>
                    </div>
                    <img src=".././images/photo1.jpeg" alt="Profile Image" style={{ width: '300px', height: '300px' }} />
                    <div>
                        <h3>Email:</h3>
                        <p style={ {color:'black',marginLeft:'10px'}}>info@mysite.com</p>
                        <h3>Phone:</h3>
                        <p style={ {color:'black',marginLeft:'10px'}}>123-456-7890</p>
                        <h2 style={{ color: 'red' }}>Linkedin</h2>
                    </div>
                </div>

                <div style={{ textAlign: 'left', marginRight: '50px', boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.5)', padding: '0 30px' }}>
                    <div>
                        <h2><strong>Britney Bails</strong></h2>
                        <p style={ {color:'black',marginLeft:'10px'}}>Realtor # 123.456.78</p>
                    </div>
                    <img src=".././images/photo2.jpeg" alt="Profile Image" style={{ width: '300px', height: '300px' }} />
                    <div>
                        <h3>Email:</h3>
                        <p style={ {color:'black',marginLeft:'10px'}}>info@mysite.com</p>
                        <h3>Phone:</h3>
                        <p style={ {color:'black',marginLeft:'10px'}}>123-456-7890</p>
                        <h2 style={{ color: 'red' }}>Linkedin</h2>
                    </div>
                </div>
                <div style={{ textAlign: 'left', boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.5)', padding: '0 30px' }}>
                    <div>
                        <h2><strong>Gerry Grossman</strong></h2>
                        <p style={ {color:'black',marginLeft:'10px'}}>Realtor # 123.456.78</p>
                    </div>
                    <img src=".././images/photo3.jpeg" alt="Profile Image" style={{ width: '300px', height: '300px' }} />
                    <div>
                        <h3>Email:</h3>
                        <p style={ {color:'black',marginLeft:'10px'}}> info@mysite.com</p>
                        <h3>Phone:</h3>
                        <p style={ {color:'black',marginLeft:'10px'}}>123-456-7890</p>
                        <h2 style={{ color: 'red' }}>Linkedin</h2>
                    </div>
                </div>
            </div>
            <div style={{ display: 'flex', marginTop: '50px', marginLeft: '110px',marginBottom:'50px' }}>
                <div style={{ textAlign: 'left', marginRight: '50px', boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.5)', padding: '0 30px' }}>
                    <div>
                        <h2><strong>Don White</strong></h2>
                        <p style={ {color:'black',marginLeft:'10px'}}>Realtor # 123.456.78</p>
                    </div>
                    <img src=".././images/photo4.jpeg" alt="Profile Image" style={{ width: '300px', height: '300px' }} />
                    <div>
                        <h3>Email:</h3>
                        <p style={ {color:'black',marginLeft:'10px'}}>info@mysite.com</p>
                        <h3>Phone:</h3>
                        <p style={ {color:'black',marginLeft:'10px'}}>123-456-7890</p>
                        <h2 style={{ color: 'red' }}>Linkedin</h2>
                    </div>
                </div>
                <div style={{ textAlign: 'left', marginRight: '50px', boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.5)', padding: '0 30px' }}>
                    <div>
                        <h2><strong>Brenda Rogers</strong></h2>
                        <p style={ {color:'black',marginLeft:'10px'}}>Realtor # 123.456.78</p>
                    </div>
                    <img src=".././images/photo5.jpeg" alt="Profile Image" style={{ width: '300px', height: '300px' }} />
                    <div>
                        <h3>Email:</h3>
                        <p style={ {color:'black',marginLeft:'10px'}}>info@mysite.com</p>
                        <h3>Phone:</h3>
                        <p style={ {color:'black',marginLeft:'10px'}}>123-456-7890</p>
                        <h2 style={{ color: 'red' }}>Linkedin</h2>
                    </div>
                </div>
                <div style={{ textAlign: 'left', boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.5)', padding: '0 30px' }}>
                    <div>
                        <h2><strong>Mike Helman</strong></h2>
                        <p style={ {color:'black',marginLeft:'10px'}}>Realtor # 123.456.78</p>
                    </div>
                    <img src=".././images/photo6.jpeg" alt="Profile Image" style={{ width: '300px', height: '300px' }} />
                    <div>
                        <h3>Email:</h3>
                        <p style={ {color:'black',marginLeft:'10px'}}>info@mysite.com</p>
                        <h3>Phone:</h3>
                        <p style={ {color:'black',marginLeft:'10px'}}>123-456-7890</p>
                        <h2 style={{ color: 'red' }}>Linkedin</h2>
                    </div>
                </div>
            </div>

        </div>
        <Footer/>
        </>
        
    );
}

export default Team;