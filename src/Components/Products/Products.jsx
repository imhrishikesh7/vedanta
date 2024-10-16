import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import { motion } from "framer-motion";
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
} from "@material-tailwind/react";
import React from 'react';
import CustomLink from "../CustomLink/CustomLink";

export function EcommerceCard() {
    const data = [
        { img: "/home/c1.png", title: "Zinc", icon: "/home/Zinc_1@3x.png", description: "₹ 279.25 billion" },
        { img: "/home/c2.png", title: "Aluminium", icon: "/home/Alumunium@3x.png", description: "₹ 483.71 billion" },
        { img: "/home/c3.png", title: "Copper", icon: "/home/Copper@3x.png", description: "₹ 197.3 billion" },
        { img: "/home/c4.png", title: "Iron ore & Steel", icon: "/home/Iron@3x.png", description: "₹ 90.69 billion (Iron Ore); \n ₹ 83 billion(Steel)" },
        { img: "/home/c5.png", title: "Power", icon: "/home/Power@3x.png", description: "₹ 61.53 billion" },
        { img: "/home/c6.png", title: "Oil & Gas", icon: "/home/Oil and Gas@3x.png", description: "₹ 178.37 billion" },
        { img: "/home/c7.png", title: "Nickel", icon: "/home/Nickel@3x.png", description: "₹ 4.55 billion" },
        { img: "/home/c8.png", title: "Ferro Chrome", icon: "/home/Ferro@3x.png", description: "₹ 8.09 billion" },
    ];

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
        slidesToShow: 3,
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

    // Animation Variants for smooth staggering
    const containerVariants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1, // Reduce the time between each card animation
                delayChildren: 0.1,   // Reduce the delay before the first card animates
            },
        },
    };
    
    const cardVariants = {
        hidden: { opacity: 0, y: 50 },
        show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeInOut' } }, // Reduce duration
    };

    return (
        <div className='marginal'>
            <motion.h1 className='md:text-6xl text-center mb-3 font-semibold bg-gradient-to-l from-[#0c61c8] to-[#06a499] w-fit m-auto text-transparent bg-clip-text'
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }} 
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: false }}
            >Our production portfolio</motion.h1>

            {/* Motion div for controlling stagger animations */}
            <motion.div
                initial="hidden"
                whileInView="show"  // Trigger animations when this comes into the viewport
                viewport={{ once: true }} // Ensure it animates only once per scroll
                variants={containerVariants} // Apply stagger to the container
            >
                <Slider {...settings} className="space-x-2">
                    {data.map((item, index) => (
                        <motion.div
                            key={index}
                            variants={cardVariants} // Apply individual card animation
                        >
                            <Card className="w-[320px] md:w-[400px] border-2 mx-auto border-grey my-[5%]">
                                <CardHeader shadow={false} floated={false} className="">
                                    <img
                                        src={item.img}
                                        alt="card-image"
                                        className="h-full w-full object-contain"
                                    />
                                </CardHeader>
                                <CardBody>
                                    <div className="mb-2 flex items-center justify-between">
                                        <Typography color="blue-gray" className="font-medium">
                                            {item.title}
                                        </Typography>
                                        <Typography color="blue-gray" className="font-medium w-[50px]">
                                            <img src={item.icon} className="w-full" alt="" />
                                        </Typography>
                                    </div>
                                    <Typography
                                        variant="small"
                                        color="gray"
                                        className="font-normal whitespace-pre-line md:whitespace-normal"
                                    >
                                        <span className='font-semibold '>Revenue: </span>{item.description}
                                    </Typography>
                                </CardBody>
                                <CardFooter className="pt-0">
                                    {/* <Button
                                        ripple={false}
                                        fullWidth={true}
                                        className="bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
                                    >
                                        Explore
                                    </Button> */}
                                </CardFooter>
                            </Card>
                        </motion.div>
                    ))}
                </Slider>
                <CustomLink ctaLink='/our-production-portfolio'/>
            </motion.div>
        </div>
    );
}
