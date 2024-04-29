import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
    setFormData({ name: "", email: "", contact: "" });
  };
  return (
    <div>
      {" "}
      <div className="home-main-wrapper">
        <h2>Contact Us</h2>
        <h4>Please give your valueable feedback</h4>
        <form onSubmit={handleSubmit}>
          <div className="form-grp mb-3">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-grp mb-3">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-grp mb-3">
            <label htmlFor="contact">contact</label>
            <textarea
              id="contact"
              name="contact"
              value={formData.contact}
              onChange={handleInputChange}
              placeholder="leave your message"
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
