import { useRef, useLayoutEffect, useState } from 'react';
import { motion } from 'framer-motion';



import './HomeSetup.scss';

const HomeSetup = () => {
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [visibleItems, setVisibleItems] = useState(8);
    const containerRef = useRef(null);
    const [constraints, setConstraints] = useState({ left: 0, right: 0 });

    useLayoutEffect(() => {
        if (containerRef.current) {
            setConstraints({
                left: -containerRef.current.scrollWidth + containerRef.current.clientWidth,
                right: 0
            });
        }
    }, [containerRef.current]);

    const setupItems = [
        { title: 'Processor', description: 'Intel Core i7-12700K, 3.6GHz, 12-core, 20-threads', category: 'components' },
        { title: 'RAM', description: 'Team Group T-Force Vulcan Pichau, (2x32GB)', category: 'components' },
        { title: 'Graphics Card', description: 'RX 6600 CLD 8GB ASRock AMD Radeon', category: 'components' },
        { title: 'Motherboard', description: 'ASUS Prime H610M-E D4 LGA 1700', category: 'components' },
        { title: 'Storage', description: 'SSD NVME 2 SSD 480GB XrayDisk', category: 'components' },
        { title: 'Mouse', description: 'Logitech G Pro', category: 'peripherals' },
        { title: 'Keyboard', description: 'Logitech G Pro', category: 'peripherals' },
        { title: 'Monitor', description: 'AOC 21.5" LED Full HD', category: 'peripherals' },
        { title: 'Case', description: 'Pichau HX300 Glass', category: 'components' },
        { title: 'Headset', description: 'Havit, 50mm', category: 'peripherals' },
        { title: 'Line Filter', description: 'DPS Clamper Energia 8 Black, 013000', category: 'accessories' },
        { title: 'Gamer Cabinet', description: 'Pichau HX300 Glass Black, PG-HX3-G01', category: 'components' },
        { title: 'Cooler for Processor', description: 'Cooler Master Hyper H410R 92mm Red Led, RR-H410-20PK-R1', category: 'components' },
        { title: 'Gamer Chair', description: 'TGT Heron TX, Black and Gray, TGT-HRTX-BK01', category: 'furniture' },
        { title: 'Speakers', description: 'Logitech Z333', category: 'peripherals' },
        { title: 'Webcam', description: 'Logitech C920', category: 'peripherals' },
        { title: 'Power Supply', description: 'Corsair CV550, 550W', category: 'components' },
        { title: 'Extra Storage', description: 'Seagate 2TB External HDD', category: 'components' },
        { title: 'Router', description: 'TP-Link Archer C6', category: 'network' },
        { title: 'Microphone', description: 'Blue Yeti USB Microphone', category: 'peripherals' },
        { title: 'VR Headset', description: 'Oculus Rift S', category: 'peripherals' }
    ];

    const categories = ['all', 'components', 'peripherals', 'accessories', 'furniture', 'network'];

    const showMoreItems = () => {
        setVisibleItems(prevVisibleItems => prevVisibleItems + 8);
    };

    return (
        <motion.div className="home-setup"
            initial={{ opacity: 0 }}
            whileInView={{
                opacity: 1,
                transition: {
                    duration: 0.3,
                    delay: 0.3,
                    ease: [0.455, 0.03, 0.515, 0.955]
                }
            }}
            viewport={{ once: true }}
        >
            <div className="home-setup-sticky">
                <h1>Setup</h1>
                <p>Here you will find the main equipment I use in my setup.</p>
            </div>
            <div className="categories-container" ref={containerRef}>
                <motion.div
                    className="categories"
                    drag="x"
                    dragConstraints={constraints}
                >
                    {categories.map((category, index) => (
                        <motion.button
                            key={index}
                            className={selectedCategory === category ? 'active' : ''}
                            onClick={() => setSelectedCategory(category)}
                            whileTap={{ scale: 0.95 }}
                        >
                            {category.charAt(0).toUpperCase() + category.slice(1)}
                        </motion.button>
                    ))}
                </motion.div>
            </div>
            <ul>
                {setupItems
                    .filter(item => selectedCategory === 'all' || item.category === selectedCategory)
                    .slice(0, visibleItems)
                    .map((item, index) => (
                        <li key={index}>
                            <strong>{item.title}</strong>
                            <p>{item.description}</p>
                        </li>
                    ))}
            </ul>
            {visibleItems < setupItems.length && (
                <div className="show-more">
                    <button onClick={showMoreItems}>Show more</button>
                </div>
            )}
        </motion.div>
    );
};

export default HomeSetup;
