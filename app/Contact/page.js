import React from 'react';

const ContactUs = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center p-6 max-w-3xl mx-auto">
      <h1 className="text-4xl font-extrabold text-white mb-4">Contact Us</h1>
      <p className="text-lg text-gray-200 mb-6">
        Have questions or feedback? We'd love to hear from you! Reach out to us using the form below or connect with us through our social media.
      </p>
      
      <form className="w-full max-w-md bg-amber-800 p-6 rounded-lg shadow-lg">
        <div className="mb-4">
          <label className="block text-white text-left text-lg font-semibold mb-2">Name</label>
          <input type="text" className="w-full p-2 rounded " placeholder="Enter your name" required />
        </div>
        <div className="mb-4">
          <label className="block text-white text-left text-lg font-semibold mb-2">Email</label>
          <input type="email" className="w-full p-2 rounded " placeholder="Enter your email" required />
        </div>
        <div className="mb-4">
          <label className="block text-white text-left text-lg font-semibold mb-2">Message</label>
          <textarea className="w-full p-2 rounded " rows="4" placeholder="Write your message" required></textarea>
        </div>
        <button type="submit" className="bg-yellow-400 hover:bg-yellow-500  font-bold py-2 px-4 rounded-full w-full">Send Message</button>
      </form>
      
      <div className="mt-6">
        <h2 className="text-2xl font-bold text-white mb-3">Follow Us</h2>
        <p className="text-lg text-gray-200">Stay connected with us on social media:</p>
        <div className="flex gap-4 mt-3">
          <a target='_blank' href="https://www.linkedin.com/in/vikhyat-charak/" className="text-yellow-300 hover:underline">LinkedIn</a>
          <a target='_blank' href="https://github.com/vikhyatcharak" className="text-yellow-300 hover:underline">GitHub</a>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
