import React from 'react';
import Footer from './footer';

function News() {
    return (
        <>
        <div style={{ marginBottom:'30px'}}>
            <div style={{ position: 'relative', width: '100%', display: 'inline-block' }}>
                <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(21, 34, 56, 0.5)', zIndex: 0 }}></div>
                <h2 style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', color: '#fff', zIndex: 1, fontFamily: 'Albertus' }}>OUR UPDATES</h2>
                <h2 style={{ position: 'absolute', top: '60%', left: '50%', transform: 'translate(-50%, -50%)', color: '#fff', zIndex: 1 }}>NEWS</h2>
                <img src=".././images/img_contact.jpeg" alt="Profile Image" style={{ width: '100%', display: 'block' }} />
            </div>
            <div style={{ display: 'flex', marginTop: '50px', marginLeft: '100px',width:'60%',marginRight:'30px' }}>
                <div style={{ textAlign: 'left', marginRight: '50px', padding: '0 30px',border:'1px solid black' }}>
                    <div>
                        <p style={ {color:'black',marginLeft:'10px'}}>Nov 1, 2035</p>
                        <h2><strong>Choosing Your Next Apartment</strong></h2>
                        <p style={ {color:'black',marginLeft:'10px'}}>By Mike Helman</p>
                    </div>
                    <img src=".././images/photo7.jpeg" alt="Profile Image" style={{ width: '550px', height: '300px' }} />
                    <div>

                        <p style={ {color:'black',fontSize:'20px',width:'100%',marginLeft:'20px'}}>This item is connected to a text field in your content collection. Double click what you want to edit and then select "Change Content" to add your own content to the collection. Want to view and manage all your collections? Click the Content Manager icon on the add panel to your left. In the Content Manager, you can update items, add new fields, create dynamic pages and more.
                            Your content collection is already set up with fields and content. Add your own by editing each field, or import CSV files to your content collection. You can create fields for rich content, images, videos and more.</p>

                        <h2 style={{ color: 'red' }}>Red More</h2>
                    </div>
                </div>

                <div style={{ textAlign: 'left', marginRight: '50px', padding: '0 30px',border:'1px solid black' }}>
                    <div>
                        <p style={ {color:'black',marginLeft:'10px'}}>Oct 1, 2035</p>
                        <h2><strong>10 Tips for Students to Pay Rent</strong></h2>
                        <p style={ {color:'black',marginLeft:'10px'}}>By Gregory Jems</p>
                    </div>
                    <img src=".././images/photo8.jpeg" alt="Profile Image" style={{ width: '550px', height: '300px' }} />
                    <div>

                        <p style={ {color:'black',fontSize:'20px',width:'100%',marginLeft:'20px'}}>This item is connected to a text field in your content collection. Double click what you want to edit and then select "Change Content" to add your own content to the collection. Want to view and manage all your collections? Click the Content Manager icon on the add panel to your left. In the Content Manager, you can update items, add new fields, create dynamic pages and more.
                            Your content collection is already set up with fields and content. Add your own by editing each field, or import CSV files to your content collection. You can create fields for rich content, images, videos and more.</p>

                        <h2 style={{ color: 'red' }}>Red More</h2>
                    </div>
                </div>

            </div>
            <div style={{ display: 'flex', marginTop: '50px', marginLeft: '100px' }}>
                <div style={{ textAlign: 'left', marginRight: '50px', padding: '0 30px',border:'1px solid black' }}>
                    <div>
                        <p style={ {color:'black',marginLeft:'10px'}}>Sep 1, 2035</p>
                        <h2><strong>Find Your Next Vacation House</strong></h2>
                        <p style={ {color:'black',marginLeft:'10px'}}>By Gerry Grossman</p>
                    </div>
                    <img src=".././images/photo9.jpeg" alt="Profile Image" style={{ width: '550px', height: '300px' }} />
                    <div>

                        <p style={ {color:'black',fontSize:'20px',width:'100%',marginLeft:'20px'}}>This item is connected to a text field in your content collection. Double click what you want to edit and then select "Change Content" to add your own content to the collection. Want to view and manage all your collections? Click the Content Manager icon on the add panel to your left. In the Content Manager, you can update items, add new fields, create dynamic pages and more.
                            Your content collection is already set up with fields and content. Add your own by editing each field, or import CSV files to your content collection. You can create fields for rich content, images, videos and more.</p>

                        <h2 style={{ color: 'red' }}>Red More</h2>
                    </div>
                </div>
                <div style={{ textAlign: 'left', marginRight: '50px', padding: '0 30px',border:'1px solid black' }}>
                    <div>
                        <p style={ {color:'black',marginLeft:'10px'}}>Aug 1, 2035</p>
                        <h2><strong>5 Things to Keep in Mind When Buying a New Home</strong></h2>
                        <p style={ {color:'black',marginLeft:'10px'}}>By Don White</p>
                    </div>
                    <img src=".././images/photo10.jpeg" alt="Profile Image" style={{ width: '550px', height: '300px' }} />
                    <div>

                        <p style={ {color:'black',fontSize:'20px',width:'100%',marginLeft:'20px'}}>This item is connected to a text field in your content collection. Double click what you want to edit and then select "Change Content" to add your own content to the collection. Want to view and manage all your collections? Click the Content Manager icon on the add panel to your left. In the Content Manager, you can update items, add new fields, create dynamic pages and more.
                            Your content collection is already set up with fields and content. Add your own by editing each field, or import CSV files to your content collection. You can create fields for rich content, images, videos and more.</p>

                        <h2 style={{ color: 'red' }}>Read More</h2>
                    </div>
                </div>

            </div>
            <div style={{ display: 'flex', marginTop: '50px', marginLeft: '100px' }}>
                <div style={{ textAlign: 'left', marginRight: '50px', padding: '0 30px',border:'1px solid black' }}>
                    <div>
                        <p style={ {color:'black',marginLeft:'10px'}}>Jul 1, 2035</p>
                        <h2><strong>Baily’s Project Raises $40M</strong></h2>
                        <p style={ {color:'black',marginLeft:'10px'}}>By Britney Bails</p>
                    </div>
                    <img src=".././images/photo11.jpeg" alt="Profile Image" style={{ width: '550px', height: '300px' }} />
                    <div>

                        <p style={ {color:'black',fontSize:'20px',width:'100%',marginLeft:'20px'}}> This item is connected to a text field in your content collection. Double click what you want to edit and then select "Change Content" to add your own content to the collection. Want to view and manage all your collections? Click the Content Manager icon on the add panel to your left. In the Content Manager, you can update items, add new fields, create dynamic pages and more.
                            Your content collection is already set up with fields and content. Add your own by editing each field, or import CSV files to your content collection. You can create fields for rich content, images, videos and more..</p>

                        <h2 style={{ color: 'red' }}>Red More</h2>
                    </div>
                </div>
                <div style={{ textAlign: 'left', marginRight: '50px', padding: '0 30px',border:'1px solid black' }}>
                    <div>
                        <p style={ {color:'black',marginLeft:'10px'}}>Jun 1, 2035</p>
                        <h2><strong>USA’s New Construction Law</strong></h2>
                        <p style={ {color:'black',marginLeft:'10px'}}>By Brenda Rogers</p>
                    </div>
                    <img src=".././images/photo12.jpeg" alt="Profile Image" style={{ width: '550px', height: '300px' }} />
                    <div>

                        <p style={ {color:'black',fontSize:'20px',width:'100%',marginLeft:'20px'}}>This item is connected to a text field in your content collection. Double click what you want to edit and then select "Change Content" to add your own content to the collection. Want to view and manage all your collections? Click the Content Manager icon on the add panel to your left. In the Content Manager, you can update items, add new fields, create dynamic pages and more.
                            Your content collection is already set up with fields and content. Add your own by editing each field, or import CSV files to your content collection. You can create fields for rich content, images, videos and more.</p>

                        <h2 style={{ color: 'red' }}>Read More</h2>
                    </div>
                </div>

            </div>

        </div>
        <Footer/>
        </>
    );
}

export default News;