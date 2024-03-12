import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import './Contact.css';

function Contact() {
    const form = useRef();
    const [message, setMessage] = useState("");
    const [messageType, setMessageType] = useState("");

    const sendEmail = (e) => {
        e.preventDefault();

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const nameRegex = /^[A-Za-z\s]+$/;

        if (!form.current.to_name.value || !form.current.from_name.value || !form.current.message.value) {
            setMessage("Please fill in all required fields.");
            setMessageType("error");
            return;
        }

        if (!emailRegex.test(form.current.from_name.value)) {
            setMessage("Please enter a valid email address.");
            setMessageType("error");
            return;
        }

        if (!nameRegex.test(form.current.to_name.value)) {
            setMessage("Please enter a valid name.");
            setMessageType("error");
            return;
        }

        emailjs.sendForm("service_e20y35k", "template_lxq2ghu", form.current, "U4hNx_fPtyyw9ylHb")
            .then((result) => {
                setMessage("Message sent successfully!");
                setMessageType("success");
                setTimeout(() => { setMessage(""); }, 3000); // Clear message after 3 seconds
            }, (error) => {
                setMessage("Failed to send the message. Please try again.");
                setMessageType("error");
                setTimeout(() => { setMessage(""); }, 3000); // Clear message after 3 seconds
            });
    };

    return (
        <>
            <div className="contact">
                <div className="contact_main">
                    <div className="form_contact">
                        <h2>SUBSCRIBE TO OUR NEWSLETTER</h2>
                        <form ref={form} onSubmit={sendEmail} id="emailForm">
                            <input type="text" name="to_name" placeholder="Enter your name" required pattern="^[A-Za-z\s]+$" title="Please enter a valid name." />
                            <input type="email" name="from_name" placeholder="Enter your email" required pattern="^[^\s@]+@[^\s@]+\.[^\s@]+$" title="Please enter a valid email address." />
                            <textarea name="message" placeholder="Leave your message" rows="6" cols="50" required />
                            <button type="submit" value="Send">SUBMIT</button>
                        </form>
                        {message && <div className={`alert ${messageType}`}>{message}</div>}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Contact;
