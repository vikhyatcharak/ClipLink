import React from 'react';

const AboutUs = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center p-6 max-w-3xl mx-auto">
      <h1 className="text-4xl font-extrabold text-white mb-4">About ClipLink</h1>
      <p className="text-lg text-gray-200 mb-6">
        At <span className="font-bold">ClipLink</span>, we believe in making url management simple, secure, and efficient.
        Our platform allows you to shorten lengthy urls while maintaining the highest standards of security.
      </p>
      
      <h2 className="text-2xl font-bold text-white mb-3">Why Choose ClipLink?</h2>
      <ul className="text-gray-200 flex flex-col items-start text-lg list-disc list-inside mb-6">
        <li>🔐 <span className="font-semibold">Secure:</span> We prioritize your privacy and use encryption to keep your data safe.</li>
        <li>⚡ <span className="font-semibold">Fast & Easy:</span> Shorten your urls in seconds with our seamless interface.</li>
        <li>🖱️ <span className="font-semibold">User-Friendly:</span> No complicated setup and no SignUp – just shorten and use.</li>
      </ul>
      
      <h2 className="text-2xl font-bold text-white mb-3">Our Mission</h2>
      <p className="text-lg text-gray-200 mb-6">
        We aim to simplify url management for everyone by providing a fast, intuitive, and secure solution.
        Your security is our priority, and we constantly improve our platform to offer the best experience.
      </p>
      
      <h2 className="text-2xl font-bold text-white mb-3">Get in Touch</h2>
      <p className="text-lg text-gray-200">
        Have questions or feedback? Reach out to us via our <a href="/Contact" className="text-yellow-300 hover:underline">Contact Page</a>.
      </p>
    </div>
  );
};

export default AboutUs;
