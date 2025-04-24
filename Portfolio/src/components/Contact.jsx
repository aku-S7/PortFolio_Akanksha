import ScrollAnimationWrapper from "./ScrollAnimationWrapper"; 
import React from "react";

function Contact() {
  return (
    <ScrollAnimationWrapper>
      <section id="contact" className="py-20 bg-[rgba(243,238,234,1)]">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 font-[cursive]">
            Get in Touch
          </h2>

          <h2 className="text-3xl font-bold text-center mb-12 font-cursive ">Get in Touch</h2>

          <form className="max-w-lg mx-auto">
            <div className="mb-6">
              <label htmlFor="name" className="block mb-2 text-sm font-medium">
                Name
              </label>
              <input 
                type="text" 
                id="name" 
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-300 ease-in-out" 
                required 
              />
            </div>
            <div className="mb-6">
              <label htmlFor="email" className="block mb-2 text-sm font-medium">
                Email
              </label>
              <input 
                type="email" 
                id="email" 
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-300 ease-in-out" 
                required 
              />
            </div>
            <div className="mb-6">
              <label htmlFor="message" className="block mb-2 text-sm font-medium">
                Message
              </label>
              <textarea 
                id="message" 
                rows="4" 
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-300 ease-in-out" 
                required
              ></textarea>
            </div>
            <button 
              type="submit" 
              className="w-full bg-[rgb(127,87,67)] text-white font-medium py-2 px-4 rounded-lg transition duration-300 ease-in-out hover:bg-[rgba(243,238,234,1)] hover:text-[rgba(125,113,94,1)] hover:shadow-md"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

    </ScrollAnimationWrapper>
  );
}

export default Contact;

