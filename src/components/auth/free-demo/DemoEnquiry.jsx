

'use client';

import { useState } from 'react';
import '@/styles/auth/Enquiry.css';
import { useRouter } from 'next/navigation';
import Swal from 'sweetalert2';
import axios from 'axios';

const EnquiryForm = (props) => {
    const [formData, setFormData] = useState({
        fname: "",
        lname: "",
        email: "",
        phone: "",
        message: "",
    });

    const [errorMessages, setErrorMessages] = useState({
        fname: "",
        lname: "",
        email: "",
        phone: "",
        message: "",
    });

    const [isPopupVisible, setIsPopupVisible] = useState(true);
    const [showPopup, setShowPopup] = useState(false);
    const [popupMessage, setPopupMessage] = useState('');
    const router = useRouter();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });

        let errorMessage = "";
        switch (name) {
            case "fname":
            case "lname":
                const namePattern = /^[A-Za-z]+$/;
                errorMessage = !namePattern.test(value) ? "Should contain alphabetic characters only." : "";
                break;
            case "email":
                const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                errorMessage = !emailPattern.test(value) ? "Please enter a valid email address." : "";
                break;
            case "phone":
                const phonePattern = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
                errorMessage = !phonePattern.test(value) ? "Please enter a valid phone number." : "";
                break;
            default:
                break;
        }

        setErrorMessages({ ...errorMessages, [name]: errorMessage });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const { fname, lname, email, phone, message } = formData;

        const newErrorMessages = {
            fname: !fname ? "Please enter your first name." : "",
            lname: !lname ? "Please enter your last name." : "",
            email: !email ? "Please enter your email address." : "",
            phone: !phone ? "Please enter your phone number." : "",
            message: "" // No validation for the message field
        };

        setErrorMessages(newErrorMessages);

        if (Object.values(newErrorMessages).some(message => message !== "")) {
            return;
        }

        setIsPopupVisible(false); // Close the form immediately

        // Show the "Thank you" popup
        setPopupMessage('Thank you for submitting the form.');
        setShowPopup(true);
        setTimeout(() => setShowPopup(false), 5000); // Hide the popup after 5 seconds

        // Store form data in the backend
        try {
            const res = await fetch(`${props.link}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if (res.ok) {
                await axios.post("https://trafy-backend-m5es3qxgoq-uc.a.run.app/freedemo-form/submit", {
                    email: formData.email,
                    fname: formData.fname,
                    course: props.name
                }, { timeout: 15000 });

                setFormData({
                    fname: "",
                    lname: "",
                    email: "",
                    phone: "",
                    message: ""
                });
            } else {
                setPopupMessage(`Error: ${res.status}`);
                setShowPopup(true);
                setTimeout(() => setShowPopup(false), 5000); // Hide the popup after 5 seconds
            }
        } catch (error) {
            console.error('Error:', error);
            setPopupMessage(`Error: ${error.message}`);
            setShowPopup(true);
            setTimeout(() => setShowPopup(false), 5000); // Hide the popup after 5 seconds
        }
    };

    return (
        <>
            {isPopupVisible && (
                <div className="popup-overlay">
                    <div className="course-enquiry-form-contents">
                        <button className="close-popup-button" onClick={() => setIsPopupVisible(false)}>x</button>
                        <form className="enquiryform" onSubmit={handleSubmit} autoComplete="off" method="POST">
                            <div className="enquiryform-heading">
                                <h2>Get Started With</h2>
                                <h4>{props.name}</h4>
                            </div>
                            <div className="enquiryname">
                                <div className="enquiryfname">
                                    <input type="text" placeholder="First Name" name="fname" className="enquiry-fname" required onChange={handleChange} value={formData.fname} />
                                    {errorMessages.fname && <p className="error-message">{errorMessages.fname}</p>}
                                </div>
                                <div className="enquirylname">
                                    <input type="text" placeholder="Last Name" className="enquiry-lname" name="lname" required onChange={handleChange} value={formData.lname} />
                                    {errorMessages.lname && <p className="error-message">{errorMessages.lname}</p>}
                                </div>
                            </div>
                            <div className="enquiryemail">
                                <input type="email" placeholder="Email" required className="enquiry-email" name="email" onChange={handleChange} value={formData.email} />
                                {errorMessages.email && <p className="error-message">{errorMessages.email}</p>}
                            </div>
                            <div className="enquiryphone">
                                <input type="tel" placeholder="Phone Number" required className="enquiry-phone" name="phone" onChange={handleChange} value={formData.phone} />
                                {errorMessages.phone && <p className="error-message">{errorMessages.phone}</p>}
                            </div>
                            <div className="enquirymessage">
                                <textarea type="text" placeholder="Message" className="enquiry-message" name="message" style={{ width: "100%" }} value={formData.message} onChange={handleChange} />
                            </div>
                            <button type="submit" className="course-enquiry-button">Submit</button>
                        </form>
                    </div>
                </div>
            )}
            {showPopup && (
                <div className="popup">
                    <span>{popupMessage}</span>
                    <button className="close-popup" onClick={() => setShowPopup(false)}>&#x1F5D9;</button>
                </div>
            )}
        </>
    );
}

export default EnquiryForm;
