import React from 'react';
import './Library.css';
import l1 from '../../../images/l1.jpg';
import l2 from '../../../images/l2.jpg';
import l3 from '../../../images/l3.jpg';
import l4 from '../../../images/l4.jpg';
import l5 from '../../../images/l5.jpg';
import l6 from '../../../images/l6.jpg';
import out1 from '../../../images/out1.jpg';
import out2 from '../../../images/out2.jpg';
import out3 from '../../../images/out3.jpg';
import out4 from '../../../images/out4.jpg';
import qr from '../../../images/qr.png';

function Carousel({ id, images }) {
    return (
        <div id={`carousel-${id}`} className="carousel slide" data-ride="carousel" data-interval="2000">
            <ol className="carousel-indicators">
                {images.map((_, index) => (
                    <li key={index} data-target={`#carousel-${id}`} data-slide-to={index} className={index === 0 ? 'active' : ''}></li>
                ))}
            </ol>
            <div className="carousel-inner">
                {images.map((image, index) => (
                    <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
                        <img className="d-block w-100" src={image} alt={`Slide ${index + 1}`} />
                    </div>
                ))}
            </div>
            <a className="carousel-control-prev" href={`#carousel-${id}`} role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href={`#carousel-${id}`} role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
            </a>
        </div>
    );
}

function Library() {
    const carousel1Images = [l1, l2, l3, l4, l5, l6];
    const carousel2Images = [out1, out2, out3, out4];

    return (
        <div className="library">
            <h2>These designs are highly appreciated and used by many customers</h2>
            <div className="library_main">
                <Carousel id="1" images={carousel1Images} />
                <Carousel id="2" images={carousel2Images} />
            </div>
            <h3>There are also many other extremely unique designs</h3>
            <div className='qr_library'>
                <a href='https://drive.google.com/drive/folders/1CRETFYy_d3XrjBa0wCOfsbTI5GLaohPL?fbclid=IwAR1AYnj_cP1a3bOuHY9rv41veDtHKV8_sEqO8HTrL7CCxOkloM9-L4nGEeE'>
                    <img src={qr}></img>
                </a>
            </div>
        </div>
    );
}

export default Library;
