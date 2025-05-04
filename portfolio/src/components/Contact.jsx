import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    fname: '',
    lname: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  return (
    <>
      <section className="section-sec" id="contact">
        <h1>Contact Form</h1>
      </section>
      <section className="section-form">
        <div className="dic-form">
          <form onSubmit={handleSubmit}>
            <input 
              type="text" 
              name="fname" 
              value={formData.fname}
              onChange={handleChange}
              placeholder="First Name" 
            />
            <input 
              type="text" 
              name="lname" 
              value={formData.lname}
              onChange={handleChange}
              placeholder="Last Name" 
            />
            <br />
            <input 
              type="email" 
              name="email" 
              value={formData.email}
              onChange={handleChange}
              placeholder="Email Address" 
            />
            <br />
            <input 
              type="text" 
              name="subject" 
              value={formData.subject}
              onChange={handleChange}
              placeholder="Subject of the message" 
            />
            <br />
            <textarea 
              name="message" 
              value={formData.message}
              onChange={handleChange}
              placeholder="Type your message here"
            ></textarea>
            <br /><br />
            <button type="submit" className="btn-primary btn">Send Message</button>
          </form>
        </div>
      </section>
    </>
  );
};

export default Contact;