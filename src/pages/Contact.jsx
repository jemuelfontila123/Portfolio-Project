import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Contact = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    contactNumber: "",
    email: "",
    message: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previousData) => ({
      ...previousData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log("Contact Form:", formData);

    // Store the Data temporarily for now just to show I can get the data

    localStorage.setItem("contactForm", JSON.stringify(formData));
    
    // Print the Data 
    console.log(JSON.parse(localStorage.getItem("contactForms")));
        // THEN redirect
    navigate("/");


  };

  return (
    <section className="container page-section">
      <div className="section-heading">
        <p className="eyebrow">CONTACT</p>
        <h1>Let's Work Together</h1>
        <p>
          Have a question or want to discuss a project? Send me a message.
        </p>
      </div>

      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-row">

          <div className="form-group">
            <label htmlFor="firstName">First Name</label>
            <input
              id="firstName"
              name="firstName"
              type="text"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="lastName">Last Name</label>
            <input
              id="lastName"
              name="lastName"
              type="text"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </div>

        </div>

        <div className="form-group">
          <label htmlFor="contactNumber">Contact Number</label>
          <input
            id="contactNumber"
            name="contactNumber"
            type="tel"
            placeholder="+905-123-4567"
            value={formData.contactNumber}
            onChange={handleChange}
            pattern="\[0-9]{3}-[0-9]{3}-[0-9]{4}"
            title="Enter a phone number in the format 905-123-4567"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email Address</label>
          <input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            rows="6"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Send Message
        </button>
      </form>
    </section>
  );
};

export default Contact;