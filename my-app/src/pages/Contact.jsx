import "./../css/contact.css";
import { useState } from "react";
import { databases } from "../lib/appwrite";

const Contact = () => {
    const [form, setForm] = useState({ name: "", email: "", phone: "", subject: "", message: "" });
    const [status, setStatus] = useState(null);

    const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus({ type: 'loading' });
        try {
            const dbId = import.meta.env.VITE_APPWRITE_DATABASE_ID;
            const collectionId = import.meta.env.VITE_APPWRITE_CONTACTS_COLLECTION_ID;
            if (!dbId || !collectionId) throw new Error('Database or Collection ID not configured in .env');

            await databases.createDocument(dbId, collectionId, 'unique()', {
                name: form.name,
                email: form.email,
                phone: form.phone,
                subject: form.subject,
                message: form.message,
                createdAt: new Date().toISOString()
            });

            setStatus({ type: 'success', message: 'Message sent. Thank you!' });
            setForm({ name: "", email: "", phone: "", subject: "", message: "" });
        } catch (err) {
            console.error(err);
            setStatus({ type: 'error', message: err.message || 'Failed to send message' });
        }
    };

  
    return (
      <main>
        <section className="contact-hero">
            <div className="container">
                <h1>Contact Us</h1>
                <p>We'd love to hear from you! Get in touch for reservations, questions, or feedback</p>
            </div>
        </section>

        <section className="contact-content">
            <div className="container">
                <div className="contact-layout">
                    <div className="contact-form-section">
                        <h2>Send Us a Message</h2>
                        <form className="contact-form" id="contactForm" onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="name">Full Name</label>
                                <input value={form.name} onChange={handleChange} type="text" id="name" name="name" required className="form-input" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email Address</label>
                                <input value={form.email} onChange={handleChange} type="email" id="email" name="email" required className="form-input" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="phone">Phone Number</label>
                                <input value={form.phone} onChange={handleChange} type="tel" id="phone" name="phone" className="form-input" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="subject">Subject</label>
                                <select value={form.subject} onChange={handleChange} id="subject" name="subject" required className="form-select">
                                    <option value="">Select a subject</option>
                                    <option value="reservation">Reservation</option>
                                    <option value="feedback">Feedback</option>
                                    <option value="catering">Catering Inquiry</option>
                                    <option value="general">General Question</option>
                                    <option value="complaint">Complaint</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label htmlFor="message">Message</label>
                                <textarea value={form.message} onChange={handleChange} id="message" name="message" rows="5" required className="form-textarea" placeholder="Tell us how we can help you..."></textarea>
                            </div>
                            <button type="submit" className="btn btn-primary">Send Message</button>
                        </form>
                        {status && status.type === 'loading' && <p>Sending...</p>}
                        {status && status.type === 'success' && <p style={{ color: 'green' }}>{status.message}</p>}
                        {status && status.type === 'error' && <p style={{ color: 'red' }}>{status.message}</p>}
                    </div>

                    <div className="contact-info-section">
                        <div className="contact-info">
                            <h2>Visit Us</h2>
                            
                            <div className="info-item">
                                <div className="info-icon">📍</div>
                                <div className="info-content">
                                    <h3>Address</h3>
                                    <p>12 Admiralty Way<br /> Lekki Phase 1, Lagos, Nigeria</p>
                                </div>
                            </div>

                            <div className="info-item">
                                <div className="info-icon">📞</div>
                                <div className="info-content">
                                    <h3>Phone</h3>
                                    <p>+234 809 123 4567</p>
                                </div>
                            </div>

                            <div className="info-item">
                                <div className="info-icon">✉️</div>
                                <div className="info-content">
                                    <h3>Email</h3>
                                    <p>info@bellavista.com</p>
                                </div>
                            </div>

                            <div className="hours-section">
                                <h3>Operating Hours</h3>
                                <div className="hours-list">
                                    <div className="hours-item">
                                        <span>Monday - Thursday</span>
                                        <span>11:00 AM - 10:00 PM</span>
                                    </div>
                                    <div className="hours-item">
                                        <span>Friday - Saturday</span>
                                        <span>11:00 AM - 11:00 PM</span>
                                    </div>
                                    <div className="hours-item">
                                        <span>Sunday</span>
                                        <span>12:00 PM - 9:00 PM</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="reservation-section">
                            <h3>Make a Reservation</h3>
                            <p>For immediate reservations, please call us at <a href="tel:+2348091234567">+234 809 123 4567</a></p>
                            <button className="btn btn-secondary">Call Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>
  );
};

export default Contact;