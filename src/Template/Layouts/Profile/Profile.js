import './Profile.css';
import avt from "../../../images/1.jpg";
function Profile() {
    return (
        <>
            <div className="profile">
                <div className="profile_main">
                    <h2>REAL ESTATE AGENT</h2>
                    <p>Call or text us directly 24/7</p>
                </div>
                <div className='my_profile'>
                    <div className='image_profile'>
                        <img src={avt}></img>
                    </div>
                    <div className='name_profile'>
                        <h2>Trần Văn Hưng</h2>
                        <p>operator</p>
                    </div>
                    <div className='phone_profile'>
                        <i class="fa-solid fa-mobile-screen-button"></i>
                        <p>Tel: +84398946681</p>
                    </div>
                    <div className='media_profile'>
                        <a href=''>
                            <i class="fa-brands fa-telegram"></i>
                        </a>
                        <a href=''>
                            <i class="fa-brands fa-skype"></i>
                        </a>
                        <a href='https://www.facebook.com/giovohinh.nguoivotinh.9'>
                            <i class="fa-brands fa-facebook"></i>
                        </a>
                    </div>
                </div>
            </div >
        </>
    )
} export default Profile;