import './Header.css';
function Header() {
    const scrollToForm = () => {
        const formElement = document.getElementById('emailForm');
        if (formElement) {
            formElement.scrollIntoView({ behavior: 'smooth' });
        }
    };


    return (
        <>
            <div className="header">
                <div className="main_header">
                    <div className='text_title pt-3'>
                        <div className='title_phone'>
                            <p>whatsapp: +84398946681</p>
                        </div>
                        <div className='title_date'>
                            <p>
                                <i class="fa-solid fa-calendar-check"></i>
                            </p>
                            <p>T2-T7 08:00-21:00</p>
                        </div>
                        <div className='title_location'>
                            <p>
                                <i class="fa-solid fa-location-dot"></i>
                            </p>
                            <p>
                                Hanoi-VN
                            </p>
                        </div>
                    </div>
                    <div className='text_banner'>
                        <p className='text_banner1'>WE CAN SERVE YOU</p>
                        <p className='text_banner2'>VIRTUAL STAGE</p>
                        <p className='text_banner3'>I offer virtual staging with virtual furniture and virtual renovation</p>
                    </div>
                    <hr className='decoration_banner' ></hr>
                    <div className='banner_job'>
                        <div className='job1'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 29 32" version="1.0" fit="" height="50px" width="50px"
                                preserveAspectRatio="xMidYMid meet" style={{ 'pointer-events': 'none', 'display': 'inline - block' }}
                                fill="rgba(244,67,54,1)">
                                <path d="M0 3.2v25.6h28.8V3.2H0zm1.067 1.067h2.667v23.467H1.067V4.267zm26.666 23.466H4.8V4.266h22.933v23.467z">
                                </path>
                                <path
                                    d="M16.533 26.133c5.6 0 10.133-4.533 10.133-10.133S22.133 5.867 16.533 5.867C10.933 5.867 6.4 10.4 6.4 16s4.533 10.133 10.133 10.133zm0-19.2c5.013 0 9.067 4.053 9.067 9.067s-4.053 9.067-9.067 9.067c-5.013 0-9.067-4.053-9.067-9.067s4.053-9.067 9.067-9.067z">
                                </path>
                                <path
                                    d="M16.533 19.2c1.76 0 3.2-1.44 3.2-3.2s-1.44-3.2-3.2-3.2c-1.76 0-3.2 1.44-3.2 3.2s1.44 3.2 3.2 3.2zm0-5.333c1.173 0 2.133.96 2.133 2.133s-.96 2.133-2.133 2.133S14.4 17.173 14.4 16s.96-2.133 2.133-2.133z">
                                </path>
                                <path d="M17.067 16c0 .295-.24.533-.533.533S16 16.293 16 16c0-.295.24-.533.534-.533s.533.24.533.533z"></path>
                            </svg>
                            <p>STAGE ALL EMPTY ROOMS/AREAS OF THE HOUSE</p>
                        </div>
                        <div className='job2'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" version="1.0" fit="" height="50px" width="50px"
                                preserveAspectRatio="xMidYMid meet" style={{ 'pointer-events': 'none', 'display': 'inline - block' }}
                                fill="rgba(244,67,54,1)">
                                <path
                                    d="M16 2.672C8.637 2.672 2.67 8.64 2.67 16.002S8.638 29.327 16 29.327c7.36 0 13.328-5.966 13.328-13.327S23.36 2.673 15.998 2.673zm12.248 12.796h-9.562c.102-3.663 1.248-7.144 3.337-10.142 3.575 2.026 6.037 5.793 6.225 10.142zm-12.25-11.73c1.802 0 3.51.394 5.053 1.093-2.16 3.15-3.34 6.803-3.44 10.637h-3.22c-.1-3.835-1.28-7.487-3.442-10.636 1.542-.7 3.25-1.092 5.05-1.092zM9.977 5.326c2.09 2.997 3.235 6.478 3.337 10.142H3.75c.187-4.35 2.65-8.117 6.226-10.142zM3.752 16.534h9.572c-.102 3.666-1.246 7.15-3.336 10.147-3.58-2.023-6.05-5.793-6.236-10.146zM16 28.262c-1.8 0-3.51-.393-5.052-1.093 2.162-3.15 3.34-6.8 3.442-10.635h3.22c.1 3.837 1.28 7.486 3.44 10.634-1.54.7-3.25 1.092-5.05 1.092zm6.01-1.58c-2.09-2.997-3.233-6.48-3.334-10.148h9.572c-.187 4.354-2.656 8.124-6.24 10.148z">
                                </path>
                            </svg>
                            <p>OFFERING 7+ STYLES OF FURNITURE</p>
                        </div>
                        <div className='job3'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 29 32" version="1.0" fit="" height="50px" width="50px"
                                preserveAspectRatio="xMidYMid meet" style={{ 'pointer-events': 'none', 'display': 'inline - block' }} fill="rgba(244,67,54,1)">
                                <path
                                    d="M5.867 15.467c-1.173 0-2.133.96-2.133 2.133s.96 2.133 2.133 2.133S8 18.773 8 17.6s-.96-2.133-2.133-2.133zm0 3.2c-.587 0-1.067-.48-1.067-1.067s.48-1.067 1.067-1.067 1.067.48 1.067 1.067-.48 1.067-1.067 1.067zM22.933 15.467c-1.173 0-2.133.96-2.133 2.133s.96 2.133 2.133 2.133 2.133-.96 2.133-2.133-.96-2.133-2.133-2.133zm0 3.2c-.587 0-1.067-.48-1.067-1.067s.48-1.067 1.067-1.067S24 17.013 24 17.6s-.48 1.067-1.067 1.067z">
                                </path>
                                <path
                                    d="M25.12 11.2l-.907-4.267c-.373-1.387-1.44-2.133-2.88-2.133H7.466c-1.493 0-2.347.747-2.773 2.133l-.96 4.267H0v1.067h3.467v.053c-1.653.107-2.933 1.493-2.933 3.2v7.413h1.6v1.6c0 1.493 1.173 2.667 2.667 2.667s2.668-1.173 2.668-2.667v-1.6h13.867v1.6c0 1.493 1.173 2.667 2.667 2.667s2.667-1.173 2.667-2.667v-1.6h1.6V15.52c0-1.653-1.28-3.04-2.88-3.2v-.053H28.8V11.2h-3.68zM5.707 7.253c.32-.96.8-1.387 1.76-1.387h13.867c1.013 0 1.6.427 1.867 1.333l1.068 5.12H4.535L5.708 7.25zm.693 17.28c0 .907-.693 1.6-1.6 1.6s-1.6-.693-1.6-1.6v-1.6h3.2v1.6zm19.2 0c0 .907-.693 1.6-1.6 1.6s-1.6-.693-1.6-1.6v-1.6h3.2v1.6zm1.6-9.013v6.347H1.6V15.52c0-1.173.96-2.133 2.133-2.133h21.333c1.173 0 2.133.96 2.133 2.133z">
                                </path>
                            </svg>
                            <p>HIGHEST QUALITY AND MOST PHOTO-REALISTIC</p>
                        </div>
                    </div>
                    <div className='button_contact'>
                        <button onClick={scrollToForm}>CONTACT NOW</button>
                    </div>
                </div>

            </div>
        </>
    )
}
export default Header;