import React from 'react';
import emailjs from 'emailjs-com';
import './ContactForm.css';

const ContactForm = () => {
    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_id', 'template_id', e.target, 'user_id')
            .then((result) => {
                alert('Message sent successfully');
            }, (error) => {
                alert('Failed to send message');
            });
    };

    return (
        <section className="contact-form">
            <h2>Contact Me</h2>
            <form onSubmit={sendEmail}>
                <label>Name:</label>
                <input type="text" name="name" required />
                <label>Email:</label>
                <input type="email" name="email" required />
                <label>Message:</label>
                <textarea name="message" required></textarea>
                <button type="submit">Send</button>
            </form>
        </section>
    );
};

export default ContactForm;
