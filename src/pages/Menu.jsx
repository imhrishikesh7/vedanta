import React from 'react';
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/solid";

const Menu = () => {
    const linkData = [
        {
            title: "Chairman's Message",
            link: "/chairman-message",
        },
        {
            title: "Non-Executive Director’s Message",
            link: "/non-exe-dir-message",
        },
        {
            title: "Executive Director’s Message",
            link: "/exe-dir-message",
        },
        {
            title: "About Vedanta",
            link: "/about-vedanta",
        },
        {
            title: "Our Presence",
            link: "/our-presence",
        },
        {
            title: "Our production portfolio",
            link: "/our-production-portfolio",
        },
        {
            title: "Value Chain",
            link: "/value-chain",
        },
        {
            title: "Sustainability in Action, Progress in Motion",
            link: "/sustainability-in-action",
        },
        {
            title: "Sustainability Strategy",
            link: "/sustainability-strategy",
        },
    ];

    return (
        <div className="container mx-auto py-10 px-4">
            {linkData.map(({ title, link }, index) => (
                <motion.div
                    key={index}
                    className="w-full md:w-[40%] mb-6"
                    whileHover={{ scale: 1.05, x: 5 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <Link
                        to={link}
                        className="menu-link flex items-center text-xl md:text-2xl justify-between py-3 px-5 bg-transparent text-gray-800 font-semibold transition-all duration-300 hover:text-blue-600 border-b border-gray-300 hover:border-blue-600"
                    >
                        <span>{title}</span>
                        <ArrowTopRightOnSquareIcon className="w-6 h-6" />
                    </Link>
                </motion.div>
            ))}
        </div>
    );
};

export default Menu;
