import { useState } from "react";
import { Resend } from "resend";

function Contact() {
    const resend = new Resend('re_Z4nViAvM_7zu9K5nvUjoTQbcpfsLQL7Aj');
    (async function () {
        const { data, error } = await resend.emails.send({
            from
        })
    })


    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });

    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState('');

    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const validateForm = () => {
        const newErrors = {};

        if (!formData.name.trim()) {
            newErrors.name = 'Name is required';
        } else if (formData.name.trim().length < 2) {
            newErrors.name = 'Name must be at least 2 characters';
        }

        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!validateEmail(formData.email)) {
            newErrors.email = 'Please enter a valid email address';
        }

        if (!formData.subject.trim()) {
            newErrors.subject = 'Subject is required';
        } else if (formData.subject.trim().length < 5) {
            newErrors.subject = 'Subject must be at least 5 characters';
        }

        if (!formData.message.trim()) {
            newErrors.message = 'Message is required';
        } else if (formData.message.trim().length < 10) {
            newErrors.message = 'Message must be at least 10 characters';
        }

        return newErrors;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
        if (errors[name]) {
            setErrors(prevErrors => ({
                ...prevErrors,
                [name]: ''
            }));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formErrors = validateForm();

        if (Object.keys(formErrors).length > 0) {
            setErrors(formErrors);
            return;
        }
        setIsSubmitting(true);
        setErrors({});
        setSubmitStatus('');
        try {
            console.log('Sending form data:', formData);

            await new Promise(resolve => setTimeout(resolve, 2000))
            setSubmitStatus('success');
            setFormData({
                name: '',
                email: '',
                subject: '',
                message: '',
            });
        }
        catch (error) {
            console.error('Error submitting form:', error);
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <>
            <h1>Contact</h1>
            <br />
            <h2>So you wish to get in touch ? I'm honored.</h2>
            {submitStatus === 'success' && (
                <div className="success-message">
                    Thank you! Your message has been sent successfully. I'll get back to you ASAP.
                </div>
            )}
            {submitStatus === 'error' && (
                <div className="error-message">
                    Sorry, there was an error sending your message. Please try again :/
                </div>
            )}
            <div className="contact-form">
                <form onSubmit={handleSubmit}>
                    <div className="form-element">
                        <label htmlFor="name">Name * </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            placeholder="Your full name"
                            className={errors.name ? "error" : ''}
                        />
                        {errors.name && <span className="error-text">{errors.name}</span>}
                    </div>
                    <br />
                    <div className="form-element">
                        <label htmlFor="email">Email * </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            placeholder="email@example.com"
                            className={errors.email ? "error" : ''}
                        />
                        {errors.email && <span className="error-text">{errors.email}</span>}
                    </div>
                    <br />
                    <div className="form-element">
                        <label htmlFor="subject">Subject * </label>
                        <input
                            type="subject"
                            id="subject"
                            name="subject"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            placeholder="What's this about ?"
                            className={errors.subject ? "error" : ''}
                        />
                        {errors.subject && <span className="error-text">{errors.subject}</span>}
                    </div>
                    <br />
                    <div className="form-element">
                        <label htmlFor="message">Message * </label>
                        <input
                            type="message"
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                            placeholder="Tell me more..."
                            className={errors.message ? "error" : ''}
                        />
                        {errors.message && <span className="error-text">{errors.message}</span>}
                    </div>
                    <br />
                    <button type="submit" className="submit" disabled={isSubmitting}>
                        {isSubmitting ? 'Sending...' : 'Send Message'}
                    </button>
                </form>
            </div>
        </>
    )
};

export default Contact;