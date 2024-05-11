import './portfolio.scss';
import React, { useRef } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';


const items = [
    {
        id: 1,
        title: "Zyphr~Netflix",
        img: "/featured3.png",
        desc: "Zyphr~Netflix is a meticulously crafted Netflix clone developed using the React.js framework, designed to replicate the seamless streaming experience of the popular entertainment platform. With its intuitive user interface and responsive design.",
    },
    {
        id: 2,
        title: "Zyphr~Tribute to XXXTentacion",
        img: "/featured2.png",
        desc: "This website is a heartfelt dedication to the late artist, encapsulating his essence through its design and functionality. Through the simplicity and versatility of Vanilla JavaScript, allowing visitors to immerse themselves in XXXTentacion's world effortlessly. ",
    },
    {
        id: 3,
        title: "Sharp~Edge",
        img: "/featured1.png",
        desc: "Sharp Edge stands as a bespoke freelance project tailored for a legal services firm, meticulously crafted to elevate their online presence and streamline client interactions.",
    },
    // {
    //     id: 4,
    //     title: "Virtual Drum Kit",
    //     img: "https://i.postimg.cc/NjVzFB8g/drumkit.png",
    //     desc: "The Virtual Drum Kit is an interactive and fun web application that emulates a real drum kit. Developed using JavaScript, HTML, and CSS, this project provides an enjoyable and educational experience for music enthusiasts and drummers of all levels.",
    // }
];

const Single = ({ item }) => {
    const ref = useRef();
    const { scrollYProgress } = useScroll({ target: ref });
    const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

    return (
        <section>
            <div className="container">
                <div className="wrapper">
                    <div className="imageContainer" ref={ref}>
                        <img src={item.img} alt={item.title} />
                    </div>
                    <motion.div className="textContainer" style={{ y }}>
                        <h2>{item.title}</h2>
                        <p>{item.desc}</p>
                        <button><a href='https://github.com/CraZyphr?tab=repositories'>Visit Git!</a></button>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

function Portfolio() {
    const ref = useRef();
    const { scrollYProgress } = useScroll({ target: ref });
    const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

    return (
        <div className='portfolio' ref={ref}>
            <div className="progress">
                <h1>Featured Works</h1>
                <motion.div style={{ scaleX }} className="progressBar"></motion.div>
            </div>
            {items.map(item => (
                <Single item={item} key={item.id} />
            ))}
        </div>
    );
}

export default Portfolio;
