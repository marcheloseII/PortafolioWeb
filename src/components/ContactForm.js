import React from 'react';
import '../styles/ContactForm.css'; // Ensure this path is correct

function ContactForm() {
  return (
    <div className="contact-form-container">
      <h2 className="contact-form-title">Contact Form</h2>
      <p className="contact-info">
        <strong>Email:</strong> Chelosegura_95@hotmail.com<br />
        <strong>Phone:</strong> +506 8731-9323<br />
        <strong>Website:</strong> <a href="http://www.CyberAMSEDevelopment.com" target="_blank" rel="noopener noreferrer">www.CyberAMSEDevelopment.com</a><br />
        <strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/asdrubal-marcelo-segura-esquivel-518b30224/" target="_blank" rel="noopener noreferrer">Asdrubal Marcelo Segura Esquivel</a><br />
        <strong>GitHub:</strong> <a href="https://github.com/marchelose" target="_blank" rel="noopener noreferrer">marchelose</a>
      </p>
      <form>
        <input type="text" placeholder="Name" required />
        <input type="email" placeholder="Email" required />
        <input type="tel" placeholder="Phone Number" />
        <input type="text" placeholder="Subject" required />
        <select required>
          <option value="">Select Inquiry Type</option>
          <option value="consultation">Consultation</option>
          <option value="project">Project Proposal</option>
          <option value="partnership">Partnership</option>
          <option value="other">Other</option>
        </select>
        <textarea placeholder="Message" rows="5" required></textarea>
        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default ContactForm;
