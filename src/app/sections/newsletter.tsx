'use client'
import React from 'react';

const Newsletter = () => {
  const handleSubmit = (event: { preventDefault: () => void; }) => {
    event.preventDefault();
  };

  return (
    <div className="relative">
     <div className="newsletter-background font-extrabold text-9xl leading-151 text-gray-200 absolute -z-5 flex justify-center items-center left-1/2 -translate-x-1/2">
        Newsletter
      </div>
      <div className="newsletter px-8 py-10 flex flex-col justify-center items-center text-center relative z-10">
        <h1 className="font-bold text-2xl leading-40 text-gray-800 mb-4">Subscribe to our Newsletter</h1>
        <p className="text-gray-800 mb-8">Get the latest information and promo offers directly</p>
        <form className="flex justify-center items-center" onSubmit={handleSubmit}>
          <input type="email" placeholder="Input email address" className="p-2 pr-28 bg-gray-100 border border-gray-300" />
          <button type="submit" className="p-2 pl-4 pr-6 bg-black text-white font-semibold text-sm leading-16">Get Started</button>
        </form>
      </div>
    </div>
  );
};

export default Newsletter;
