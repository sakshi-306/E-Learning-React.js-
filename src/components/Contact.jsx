import React, { useState } from "react";
import { FaLinkedin, FaTwitter, FaEnvelope, FaPhone, FaGlobe } from "react-icons/fa";

const Contact = () => {
  // Step 1: Create a state for form data
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  // Step 2: Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Step 3: Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Get existing messages from localStorage
    const existingData = JSON.parse(localStorage.getItem("contactMessages")) || [];

    // Add new message to the list
    const updatedData = [...existingData, formData];

    // Store updated list back into localStorage
    localStorage.setItem("contactMessages", JSON.stringify(updatedData));

    // Optional: clear the form after submission
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: ""
    });

    alert("Your message has been saved successfully!");
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 px-4 py-16">
      <div className="max-w-6xl w-full bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col md:flex-row">
        
        {/* Left - Form */}
        <div className="md:w-1/2 p-8 md:p-12">
          <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
          <p className="text-gray-600 mb-8">
            We'd love to hear from you! Fill out the form and we'll get in touch shortly.
          </p>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <textarea
              name="message"
              placeholder="Message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Right - Contact Info */}
        <div className="md:w-1/2 bg-gradient-to-br from-blue-600 to-purple-600 text-white p-8 md:p-12 flex flex-col justify-center space-y-6">
          <h2 className="text-3xl font-bold mb-4">Get In Touch</h2>
          <p className="text-gray-200">
            You can reach us via the following channels:
          </p>

          <div className="space-y-4 text-gray-100">
            <div className="flex items-center gap-4">
              <FaEnvelope className="text-2xl" />
              <span>info@abccollege.edu.in</span>
            </div>
            <div className="flex items-center gap-4">
              <FaPhone className="text-2xl" />
              <span>+91 99xxxxxxxx</span>
            </div>
            <div className="flex items-center gap-4">
              <FaGlobe className="text-2xl" />
              <span>www.abccollege.edu.in</span>
            </div>
            <div className="flex items-center gap-4">
              <FaLinkedin className="text-2xl" />
              <span>linkedin.com/abccollege</span>
            </div>
            <div className="flex items-center gap-4">
              <FaTwitter className="text-2xl" />
              <span>twitter.com/abccollege</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Contact;
