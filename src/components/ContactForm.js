// src/components/ContactForm.js
import React from 'react';
import '../styles/ContactForm.css'; // Corrige la ruta a la ubicación correcta

function ContactForm() {
  return (
    <form>
      <input type="text" placeholder="Name" />
      <input type="email" placeholder="Email" />
      <textarea placeholder="Message"></textarea>
      <button type="submit">Send</button>
    </form>
  );
}

export default ContactForm;
