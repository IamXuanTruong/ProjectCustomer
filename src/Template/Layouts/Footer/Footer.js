import './Footer.css';
function Footer(params) {
    return (
        <>
            <div className="footer">
                <div className="footer_main">
                    <div className="text_footer">
                        <h3>IN ADDITION, THE COMPANY HAS MANY EDIT SERVICES ACCOMPANYING</h3>
                        <p>edit: HDR - FLASH - DAY TO DUCK - VIRTUAL TWILIGHT - VIDEO EDITING</p>
                    </div>
                    <div className='box_main'>
                        <div className='box_price'>
                            <h3>VIRTUAL RENOVATION</h3>
                            <h2>$25</h2>
                        </div>
                        <div className='box_price2'>
                            <h3>VIRTUAL STAGE</h3>
                            <h2>$15</h2>
                        </div>
                        <div className='box_price'>
                            <h3>3D FLOOR</h3>
                            <h2>$30</h2>
                        </div>

                    </div>
                    <div className='content_footer'>
                        <div className='box_content'>
                            <div className='text_content'>
                                <p className='item_context'>Change color & materials</p>
                                <p className='item_context'>Existing object removal</p>
                                <p className='item_context'>2 free edits</p>
                            </div>
                            <div className='item_content'>
                                <a href=''>CALL TO ACTION</a>
                            </div>
                        </div>
                        <div className='box_content2'>
                            <div className='text_content'>
                                <p className='item_context'>Change color & materials</p>
                                <p className='item_context'>Existing object removal</p>
                                <p className='item_context'>2 free edits</p>
                            </div>
                            <div className='item_content'>
                                <a href=''>CALL TO ACTION</a>
                            </div>
                        </div>
                        <div className='box_content'>
                            <div className='text_content'>
                                <p className='item_context'>Change color & materials</p>
                                <p className='item_context'>Existing object removal</p>
                                <p className='item_context'>2 free edits</p>
                            </div>
                            <div className='item_content'>
                                <a href=''>CALL TO ACTION</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Footer;