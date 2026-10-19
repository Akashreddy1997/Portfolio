import { useState } from 'react';
import { profile } from '../data/profile';

// Sends the visitor's message to your email through Web3Forms (no backend needed).
export default function ContactForm() {
  const [status, setStatus] = useState('idle'); // idle | sending | sent | error

  async function handleSubmit(event) {
    event.preventDefault();
    const form = event.target;
    setStatus('sending');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: profile.contactFormKey,
          subject: `Portfolio message from ${form.name.value}`,
          name: form.name.value,
          email: form.email.value,
          message: form.message.value,
        }),
      });
      const result = await response.json();

      if (result.success) {
        setStatus('sent');
        form.reset();
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  }

  if (!profile.contactFormKey) return null; // no key yet: hide the form

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="form-row">
        <label>
          Name
          <input name="name" type="text" required autoComplete="name" />
        </label>
        <label>
          Email
          <input name="email" type="email" required autoComplete="email" />
        </label>
      </div>
      <label>
        Message
        <textarea name="message" rows="4" required />
      </label>

      <button className="btn btn-primary" type="submit" disabled={status === 'sending'}>
        {status === 'sending' ? 'Sending…' : 'Send message'}
      </button>

      {status === 'sent' && <p className="form-note form-ok">Thanks! Your message was sent. I'll reply soon.</p>}
      {status === 'error' && (
        <p className="form-note form-error">Sorry, that didn't go through. Please email me directly at {profile.email}.</p>
      )}
    </form>
  );
}
