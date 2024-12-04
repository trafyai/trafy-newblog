import React, {useState} from 'react'

const BlogNewsletter = () => {

  const [userData, setUserData] = useState({ email: "" });
  const [errorMessage, setErrorMessage] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserData({ ...userData, [name]: value });
  };


  const handleSubmit = async (event) => {
    event.preventDefault();

    const { email } = userData;

    if (!email) {
      setErrorMessage("Please fill in the required fields.");
      return;
    }

    const options = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(userData)
    };

    try {
      const response = await fetch('https://newsletter-form-9e6c9-default-rtdb.firebaseio.com/NewsLetterForm.json', options);

      if (response.ok) {
        setSubscribed(true);
        setErrorMessage("");
        setUserData({ email: "" });
      } else {
        setErrorMessage("Error submitting the form. Please try again later.");
      }

      const emailRes = await fetch('http://localhost:5002/newsletter/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email })
      });

      if (!emailRes.ok) {
        throw new Error('Error sending email');
      }
    } catch (error) {
      console.error("Error submitting the form:", error);
      setErrorMessage("Error submitting the form. Please try again later.");
    }
  };

  const renderFormOrMessage = () => {
    if (subscribed) {
      return (
        <div className="blog-newsletter-form-thankyou">
          <h3>Thank you for subscribing to our newsletter!</h3>
        </div>
      );
    } else {
      return (
        <div className="blog-newsletter-container-inner">
          <div className="blog-newsletter-heading">
            <h3>Subscribe to our newsletter</h3>
          </div>
          <div className="blog-newsletter-form">
            <form onSubmit={handleSubmit}>
              <input
                type="email"
                placeholder="Email"
                value={userData.email}
                onChange={handleInputChange}
                required
                autoComplete="off"
                name="email"
                className="blog-newsletter-email"
              />
              {errorMessage && <p className="error-message">{errorMessage}</p>}
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      );
    }
  };

  return (
           <section className="blog-newsletter">
            <div className="blog-newsletter-container">
              {renderFormOrMessage()}
            </div>
          </section>
  )
}

export default BlogNewsletter