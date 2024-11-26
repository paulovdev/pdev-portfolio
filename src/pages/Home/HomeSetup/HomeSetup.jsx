import React, { useState, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import './HomeSetup.scss';

const HomeSetup = () => {
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [visibleItems, setVisibleItems] = useState(8);
    const swiperRef = useRef(null);

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
        <div className="home-setup">
            <div className="home-setup-sticky">
                <h1>Setup</h1>
                <p>Here you will find the main equipment I use in my setup.</p>
            </div>
            <div className="categories">
                <Swiper
                    spaceBetween={15}
                    slidesPerView={4}
                    onSwiper={(swiper) => (swiperRef.current = swiper)}
                    touchStartPreventDefault={false}
                    preventClicks={false}
                >
                    {categories.map((category, index) => (
                        <SwiperSlide key={index}>
                            <button
                                key={category}
                                className={selectedCategory === category ? 'active' : ''}
                                onClick={() => setSelectedCategory(category)}
                            >
                                {category.charAt(0).toUpperCase() + category.slice(1)}
                            </button>
                        </SwiperSlide>
                    ))}
                </Swiper>
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
        </div>
    );
};

export default HomeSetup;
