import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Owner = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    email: '',
    phoneNumber: '',
    code: '',
  });
  const [showwindow, setshowwindow] = useState(false);
  const [showCodeInput, setShowCodeInput] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setshowwindow(true);
    console.log(formData);
  };

  const handleSendCode = () => {
    setShowCodeInput(true);
  };

  const handleConfirm = (e) => {
    e.preventDefault();
    console.log(formData);
    // Perform code verification or other actions here
  };

  const navigate = useNavigate();

  return (
    <>
      {!showwindow ? (
        <div className="rounded-s-lg bg-gradient-to-r from-cyan-500 to-blue-500 flex flex-col items-center justify-center bg-gray-200 h-100">
          <form className="flex flex-col items-center" onSubmit={handleSubmit}>
            <br />
            <h1 className="text-3xl text-white font-bold">Registration Owner!</h1>
            <br />
            <div className="mb-4">
              <label htmlFor="firstName" className="text-white mb-1">
                First Name:
              </label>
              <br />
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
                className="px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="text-white mb-1">
                Email:
              </label>
              <br />
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {!showCodeInput && (
                <button
                  type="button"
                  className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-600 mt-4 transition-colors duration-300"
                  onClick={handleSendCode}
                >
                  Send Code
                </button>
              )}
              {showCodeInput && (
                <>
                  <div className="mb-4">
                    <label htmlFor="code" className="text-white mb-1">
                      Code:
                    </label>
                    <br />
                    <input
                      type="text"
                      id="code"
                      name="code"
                      value={formData.code}
                      onChange={handleChange}
                      required
                      className="px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <button
                    type="submit"
                    className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-600 mt-4 transition-colors duration-300"
                    onClick={handleConfirm}
                  >
                    Confirm
                  </button>
                </>
              )}
            </div>
            <div className="mb-4">
              <label htmlFor="phoneNumber" className="text-white mb-1">
                Phone Number:
              </label>
              <br />
              <input
                type="tel"
                id="phoneNumber"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                required
                className="px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <button
              type="submit"
              className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-600 mt-4 transition-colors duration-300"
            >
              Owner Registration
            </button>
          </form>
          <br />
        </div>
      ) : (
        <div className="rounded-s-lg bg-gradient-to-r from-cyan-500 to-blue-500 flex flex-col items-center justify-center bg-gray-200 h-100">
          <div className="text-center">
            <div className="flex">
              <h2 className="text-2xl font-bold mb-4 text-white pt-5 pr-3">Add Your Organization</h2>
              <Link to="/business-registration">
                <button
                  className="p-6 pl-10 col-auto border-cyan-50"
                  onClick={() => {
                    navigate('/home');
                  }}
                >
                  X
                </button>
              </Link>
            </div>
            <Link to="/business-registration">
              <button
                className="bg-blue-200 before:text-black hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mt-4"
                onClick={() => {
                  navigate('/business-registration');
                }}
              >
                Add Organization
              </button>
            </Link>
          </div>
          <br />
        </div>
      )}
    </>
  );
};

export default Owner;
