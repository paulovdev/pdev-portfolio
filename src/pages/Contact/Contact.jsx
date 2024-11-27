import React from 'react';

import './Contact.scss';

const Contact = () => {


    return (
        <section id='contact'>
            <h1>Work with me</h1>
            <p>Got an idea for a website or mobile app, or need some tips on product design? Don't hesitate to get in touch. My schedule fills up fast, so the earlier you reach out, the better for both of us. </p>

            <div className="contact-container">
                <div className="input-wrapper">
                    <input type="text" placeholder='Name' />
                    <input type="text" placeholder='E-mail' />
                </div>
                <textarea placeholder='Message'></textarea>
            </div>
            <h2>Avg. response: <span>24 hours</span></h2>
        </section>
    );
}

export default Contact;
