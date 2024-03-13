import './Home.css';
import React from "react";
import p1 from '../../../images/p1.jpg';
import p2 from '../../../images/p2.jpg';
import video from '../../../images/1.mp4'
function Home() {
    return (
        <>
            <div className='home_page'>
                <div className='main_home'>
                    <div className='home_video'>
                        <h3>Virtual Staging</h3>
                        <p>Virtual staging is the easiest way to make real estate stand out from the competition. Our<br /> professional designers help inspire buyers by digitally adding furniture to any photo.</p>
                    </div>
                    <div className='main_video'>
                        <video controls className='styled-video'>
                            <source src={video} type="video/mp4" />
                        </video>
                    </div>

                    <h3>Working with Virtual Staging Solutions <br />couldn't be easier.</h3>
                    <div className='contact_home'>
                        <div className='item_home'>
                            <img src={p1}></img>
                        </div>
                        <div className='item_home'>
                            <div className='text_home1'>
                                <h5>Send us your photos</h5>
                                <p>We can start from anywhere. Send us your photos vacant or occupied, floor plans, virtual tours, or any other materials you have.</p>
                            </div>
                        </div>
                    </div>
                    <div className='contact_home'>
                        <div className='item_home'>
                            <div className='text_home'>
                                <h5>Tell us about them</h5>
                                <p>Tell us about your project and
                                    any special requests.
                                    <br />
                                    Even select furniture if you'd like.</p>
                                <h5>Share and inspire</h5>
                                <p>Share your photos to inspire buyers to act. We understand a property sale is a big decision so we'll help you instill confidence and get results.</p>
                            </div>
                        </div>
                        <div className='item_home'>
                            <img src={p2}></img>
                        </div>
                    </div>
                </div>
                <div className='profile_home'>
                    <div className='text_profile'>
                        <div className='item_text'>
                            <h2>Amazing Features</h2>
                            <h4><i className="fa-solid fa-layer-group"></i> Interiors that look natural</h4>
                            <p>Real Home themes that provide various templates to fill the needs of real estate agents</p>
                            <h4><i className="fa-solid fa-layer-group"></i> Customer Care</h4>
                            <p>Premium consulting available 24/7</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
} export default Home;


