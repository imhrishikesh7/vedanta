import React from 'react';
import './Footer.css'; // Assuming you have a separate CSS file for styling

const Footer = () => {
    return (
        <footer className="site-footer bg-gradient-to-r from-[#114380] to-[#11817a] text-[#ffff]">
            <div className="footer-content">
                {/* Logo Column */}
                <div className="logo-column bg-white !w-fit m-auto p-3 rounded">
                    <a href="">
                    <img className='footer-logo' src="./home/vedanta-logo.svg" alt="" />
                    </a>
                </div>
                <div className="footer-info second-column w-fit m-auto">
                    <h2 className="footer-business-name">© Vedanta Limited</h2>
                    <p className="footer-business-address text-white">
                    Annual Report 2023-24
                    </p>
                </div>
                {/* Navigation and Info Column */}
                <div className="footer-info third-column">
                    {/* <h2 className="footer-business-name">© Pitti Engineering Limited</h2> */}

                    <p className="footer-business-address text-white">
                    Developed By: 
                    </p>
                    <a href="https://kalolwala.com" target='_blank'><img className='w-[40px]' src="./home/k&a logo.svg" alt="" /></a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
