import React, { useState } from 'react';
import axios from 'axios';

function RegistrationForm() {
  const [tables, setTables] = useState([]);
  const [registrationData, setRegistrationData] = useState(null);

  const handleTableChange = (index, event) => {
    const { name, value } = event.target;
    const updatedTables = [...tables];
    updatedTables[index] = {
      ...updatedTables[index],
      [name]: parseInt(value),
    };
    setTables(updatedTables);
  };

  const handleAddTable = () => {
    setTables([...tables, { seats: 0 }]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Filter out tables with 0 seats
    const validTables = tables.filter((table) => table.seats > 0);

    // Create registration object
    const registration = {
      tables: validTables,
    };

    // Set registration data for console and POST request
    setRegistrationData(registration);
    console.log(registration);

    // Send the POST request to the server
    axios
      .post('/api/registration', registration)
      .then((response) => {
        // Handle the response if needed
        console.log(response.data);
      })
      .catch((error) => {
        // Handle the error if needed
        console.error(error);
      });

    // Display formatted registration data in the console
    const formattedData = validTables.reduce((acc, table, index) => {
      acc[`Table ${index + 1}`] = table.seats;
      return acc;
    }, {});
    console.log("Registration Data:", formattedData);
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Registration Form</h2>
      <form onSubmit={handleSubmit} className="flex flex-wrap">
        {tables.map((table, index) => (
          <div key={index} className="flex items-center mb-4 w-1/3">
            <label htmlFor={`tableSeats-${index}`} className="w-24">
              Table {index + 1} Seats:
            </label>
            <input
              id={`tableSeats-${index}`}
              type="number"
              name="seats"
              value={table.seats}
              onChange={(event) => handleTableChange(index, event)}
              className="w-24 p-2 rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        ))}

        <button
          type="button"
          onClick={handleAddTable}
          className="w-20 h-40 bg-blue-500 hover:bg-blue-700 text-white font-bold rounded"
        >
          Add Table
        </button>
        
        <button
          type="submit"
          className="w-full h-10 bg-blue-400 hover:bg-blue-700 text-white font-bold rounded mt-4"
        >
          Register
        </button>
      </form>
    </div>
  );
}

export default RegistrationForm;
