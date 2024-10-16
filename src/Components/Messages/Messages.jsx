import React from 'react'
import "slick-carousel/slick/slick.css";
import Slider from 'react-slick';
import "slick-carousel/slick/slick-theme.css";
import CustomLink from '../CustomLink/CustomLink';
const Messages = () => {
    const settings = {
        dots: true,
        customPaging: function (i) {
            return (
                <div className="custom-dot">
                    <div className="custom-dot-inner"></div>
                </div>
            );
        },
        dotsClass: "slick-dots custom-dots",
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };
    return (
        <div className='marginal'>
            <Slider {...settings} className="space-x-2">
                <div className='m-auto'>
                    <img src="./home/Group 3.png" className='m-auto' alt="" />
                    <CustomLink ctaLink='/chairman-message'/>
                </div>
                <div className='m-auto'>
                    <img src="./home/Group 5.png" className='m-auto' alt="" />
                    <CustomLink ctaLink='/non-exe-dir-message'/>
                </div>
                <div className='m-auto'>
                    <img src="./home/Group 4.png" className='m-auto' alt="" />
                    <CustomLink ctaLink='/exe-dir-message'/>
                </div>
            </Slider>
        </div>
    )
}

export default Messages