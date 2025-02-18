import React, { useState } from "react";

const Body = () => {
  const [code, setCode] = useState("");

  const handleSend = () => {
    alert("Code snippet sent: \n" + code);
  };

  return (
    <div className="bg-black text-white min-h-screen flex justify-center items-center">
      <div className="w-full min-h-screen  p-8 bg-gradient-to-r bg-linear-to-r/longer from-indigo-500 to-teal-400 shadow-lg">
        <h1 className="text-center text-3xl font-bold mb-6">INSERT CODE SNIPPET</h1>
        
        <textarea
          className="w-full h-64 p-4 bg-gray-800 text-white rounded-lg shadow-inner focus:outline-none focus:ring-2 focus:ring-purple-600"
          placeholder="Enter your code here..."
          value={code}
          onChange={(e) => setCode(e.target.value)}
        />

        <div className="flex justify-center mt-6">
          <button
            className="px-6 py-2 bg-blue-500 text-white font-semibold rounded-full shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600"
            onClick={handleSend}
          >
            SEND
          </button>
        </div>
      </div>
    </div>
  );
};

export default Body;
