import React, { useState } from 'react';
import { CgClose } from 'react-icons/cg';
import "./HomeSetup.scss";

const HomeSetup = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [visibleItems, setVisibleItems] = useState(8);

    const setupItems = [
        { title: 'Processor', description: 'Intel Core i7-12700K, 3.6GHz, 12-core, 20-threads' },
        { title: 'RAM', description: 'Team Group T-Force Vulcan Pichau, (2x32GB)' },
        { title: 'Graphics Card', description: 'RX 6600 CLD 8GB ASRock AMD Radeon' },
        { title: 'Motherboard', description: 'ASUS Prime H610M-E D4 LGA 1700' },
        { title: 'Storage', description: 'SSD NVME 2 SSD 480GB XrayDisk' },
        { title: 'Mouse', description: 'Logitech G Pro' },
        { title: 'Keyboard', description: 'Logitech G Pro' },
        { title: 'Monitor', description: 'AOC 21.5" LED Full HD' },
        { title: 'Case', description: 'Pichau HX300 Glass' },
        { title: 'Headset', description: 'Havit, 50mm' },
        { title: 'Line Filter', description: 'DPS Clamper Energia 8 Black, 013000' },
        { title: 'Gamer Cabinet', description: 'Pichau HX300 Glass Black, PG-HX3-G01' },
        { title: 'Cooler for Processor', description: 'Cooler Master Hyper H410R 92mm Red Led, RR-H410-20PK-R1' },
        { title: 'Gamer Chair', description: 'TGT Heron TX, Black and Gray, TGT-HRTX-BK01' },
        { title: 'Speakers', description: 'Logitech Z333' },
        { title: 'Webcam', description: 'Logitech C920' },
        { title: 'Power Supply', description: 'Corsair CV550, 550W' },
        { title: 'Extra Storage', description: 'Seagate 2TB External HDD' },
        { title: 'Router', description: 'TP-Link Archer C6' },
        { title: 'Microphone', description: 'Blue Yeti USB Microphone' },
        { title: 'VR Headset', description: 'Oculus Rift S' }
    ];

    const filteredItems = setupItems.filter(item =>
        item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.description.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const clearSearch = () => {
        setSearchTerm('');
    };

    const showMoreItems = () => {
        setVisibleItems(prevVisibleItems => prevVisibleItems + 8);
    };

    return (
        <div className="home-setup">
            <div className="home-setup-sticky">
                <h1>Setup</h1>
                <p>Here you will find the main equipment I use in my setup.</p>
                <div className="filters">
                    <input
                        type="text"
                        placeholder="Search by title or description..."
                        value={searchTerm}
                        onChange={e => setSearchTerm(e.target.value)}
                    />
                    <button onClick={clearSearch}><CgClose /></button>
                </div>
            </div>

            <ul>
                {filteredItems.length > 0 ? filteredItems.slice(0, visibleItems).map((item, index) => (
                    <li key={index}>
                        <strong>{item.title}</strong>
                        <p>{item.description}</p>
                    </li>
                )) : <p>No results for your search</p>
                }
            </ul>
            {visibleItems < filteredItems.length && (
                <div className="show-more">
                    <button onClick={showMoreItems}>Show more</button>
                </div>
            )}
        </div>
    );
};

export default HomeSetup;
