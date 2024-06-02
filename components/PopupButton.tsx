// components/PopupButton.tsx
'use client';

import { useState } from 'react';

const PopupButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button onClick={togglePopup} className="p-4 bg-blue-500 text-white rounded">
        Open Popup
      </button>
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center backdrop-blur-sm">
          <div className="bg-white p-8 rounded shadow-lg">
            <h2 className="text-xl mb-4">LOGIN</h2>
           
            <form action="">
            <div className="mb-4">
              <label className="block text-gray-700 mb-2" htmlFor="email">Emai</label>
              <input type="email" id='email' name='email' placeholder='Enter your email' required className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500" />
              </div>
              <div className="mb-4">
              <label className="block text-gray-700 mb-2" htmlFor="password">Password</label>
              <input type="passwor" id='password' name='password' placeholder='Enter your password' required className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500" />
              </div>
              <button type="submit" className="w-full p-3 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">Login</button>
            </form>
            <div className="mt-4 text-center">
               <a href="#" className="text-blue-500 hover:underline"> Forgot Password ?</a>
            </div>
            
            <button onClick={togglePopup} className="p-2 bg-red-500 text-white rounded mt-8">
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default PopupButton;
