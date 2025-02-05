import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import '../styles/contact-form.css';

function ContactForm() {
  // Hook useForm con il tuo ID di Formspree
  const [state, handleSubmit] = useForm("manqbyvz");

  // Mostra un messaggio di successo se il modulo è stato inviato correttamente
  if (state.succeeded) {
    return <p>Thanks for your message!</p>;
  }

  return (
    <form onSubmit={handleSubmit} className="contact-form">
      <div className="title">Contact Me</div>
      
      {/* Campo email */}
      <label htmlFor="email">Email Address</label>
      <input
        id="email"
        type="email"
        name="email"
        placeholder="e-mail"
      />
      <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
      
      {/* Campo messaggio */}
      <label htmlFor="message">Message</label>
      <textarea
        id="message"
        name="message"
        placeholder="Your message here"
      />
      <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
      
      {/* Bottone di invio */}
      <button type="submit" disabled={state.submitting}>
        {state.submitting ? 'Submitting...' : 'Submit'}
      </button>
    </form>
  );
}

function App() {
  return (
    <ContactForm />
  );
}

export default App;
