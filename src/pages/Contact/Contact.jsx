import React from 'react';
import { motion } from 'framer-motion';
import './Contact.scss';
import { MdEmail, MdPhone } from 'react-icons/md';

const Contact = () => {


    return (
        <motion.section id='contact'
            initial={{ filter: "blur(15px)" }}
            animate={{ filter: "blur(0px)" }}
            exit={{ filter: "blur(15px)" }}
            transition={{ duration: 0.5, ease: "easeInOut" }}>
            <h1>Get in touch.</h1>
            <p>Got an idea for a website or mobile app, or need some tips on product design? Don't hesitate to get in touch. My schedule fills up fast, so the earlier you reach out, the better for both of us. </p>
            <div className="contact-links">
                <a href="mailto:paulo@gmail.com"><MdEmail />E-mail</a>
                <a href="tel:+1234567890"><MdPhone />Call</a>
            </div>
            <form className="contact-container" onClick={(e) => e.preventDefault()}>
                <div className="input-wrapper">
                    <input type="text" autoComplete='name' placeholder='Name' />
                    <input type="email" autoComplete='email' placeholder='E-mail' />
                </div>
                <textarea placeholder='Message'></textarea>
                <button>Send</button>

            </form>
            <h2>Avg. response: <span>24 hours</span></h2>
        </motion.section>
    );
}

export default Contact;
