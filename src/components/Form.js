import React from 'react';

const Form = () => (
  <form className="bg-white px-8 pt-6 pb-8 mb-4">
    <h2 className="text-xl font-bold">Sign up for our mailing list.</h2>
    <div className="mb-4">
      <label
        className="block text-gray-700 text-sm font-bold mb-2"
        htmlFor="name"
      >
        Name
      </label>
      <input
        className="appearance-none border w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
        style={{ backgroundColor: '#efefef' }}
        id="name"
        type="text"
        placeholder="John Doe"
      />
    </div>
    <div className="mb-4">
      <label
        className="block text-gray-700 text-sm font-bold mb-2"
        htmlFor="email"
      >
        Email
      </label>
      <input
        className="appearance-none border w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
        style={{ backgroundColor: '#efefef' }}
        id="email"
        type="text"
        placeholder="john.doe@email.com"
      />
    </div>
    <div className="flex items-center justify-between">
      <button
        className="px-3 py-2 inline-block bg-black text-white uppercase tracking-loose text-sm"
        type="button"
      >
        Submit
      </button>
    </div>
  </form>
);

export default Form;
