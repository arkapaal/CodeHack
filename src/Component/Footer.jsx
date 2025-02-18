import React, { useState } from "react";

export const Footer = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    doubt: "",
    subscribe: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted successfully!");
    console.log(formData);
  };

  return (
    <div className="bg-gradient-to-r from-purple-300 to-blue-300 min-h-screen flex items-center justify-center">
      <div className="bg-white bg-opacity-50 p-8 rounded-lg shadow-lg max-w-4xl w-full flex flex-col md:flex-row">
        {/* Left Section */}
        <div className="md:w-1/2 p-4">
          <h1 className="text-4xl font-bold text-black mb-4">
            DOUBTS? Ask Away, We've Got Solutions!
          </h1>
          <p className="text-black mb-8">
            For any questions please email{" "}
            <a href="mailto:info@mysite.com" className="text-blue-500">
              info@mysite.com
            </a>
          </p>
          <p className="text-black font-bold">CodeHack10X</p>
          <div className="mt-8">
            
            <div className="flex space-x-4 mt-2">
              <a href="#" className="text-black">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="#" className="text-black">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-black">
                <i className="fab fa-linkedin"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Right Section - Form */}
        <div className="md:w-1/2 p-4">
          <h2 className="text-2xl font-bold text-black mb-4">
            Clarify Your Queries: Ask Anything, Get Answers
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-black mb-2" htmlFor="firstName">
                First name
              </label>
              <input
                className="w-full p-2 border border-gray-300 rounded"
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
              />
            </div>

            <div className="mb-4">
              <label className="block text-black mb-2" htmlFor="lastName">
                Last name
              </label>
              <input
                className="w-full p-2 border border-gray-300 rounded"
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
              />
            </div>

            <div className="mb-4">
              <label className="block text-black mb-2" htmlFor="email">
                Email *
              </label>
              <input
                className="w-full p-2 border border-gray-300 rounded"
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-4">
              <label className="block text-black mb-2" htmlFor="doubt">
                Your Doubt
              </label>
              <input
                className="w-full p-2 border border-gray-300 rounded"
                type="text"
                id="doubt"
                name="doubt"
                value={formData.doubt}
                onChange={handleChange}
              />
            </div>

            <div className="mb-4 flex items-center">
              <input
                className="mr-2"
                type="checkbox"
                id="subscribe"
                name="subscribe"
                checked={formData.subscribe}
                onChange={handleChange}
              />
              <label className="text-black" htmlFor="subscribe">
                Yes, subscribe me to your newsletter.
              </label>
            </div>

            <button
              className="bg-blue-500 text-white px-4 py-2 rounded"
              type="submit"
            >
              Done
            </button>
          </form>
        </div>
      </div>

      {/* Footer */}
      <footer className="text-center absolute bottom-4 text-black">
        <p>© 2025 by CodeHack10X. All Rights Reserved</p>
      </footer>
    </div>
  );
};

export default Footer;
