import React, { useState } from "react";
import { getChatGPTResponse } from "./OpenAi";


function Body() {
    const [input, setInput] = useState('');
    const [response, setResponse] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const aiResponse = await getChatGPTResponse(input);
        setResponse(aiResponse);
    
    };

  return (
    <div className="bg-black text-white min-h-screen flex justify-center items-center">
      <div className="w-full min-h-screen  p-8 bg-gradient-to-r bg-linear-to-r/longer from-indigo-500 to-teal-400 shadow-lg">
        <h1 className="text-center text-3xl font-bold mb-6">INSERT CODE SNIPPET</h1>
        
        <form onSubmit={handleSubmit} className="mb-4">
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Ask something..."
                    className="w-full p-8 border rounded mb-2 text-black"
                />
                <button 
                    type="submit" 
                    className="bg-blue-700 font-bold text-white px-4 py-2 rounded"
                >           
                    Send
                </button>
            </form>
            
            <div className="bg-gray-100 p-8 rounded text-black">
                <h2 className="font-semibold">Response:</h2>
                <p>{response}</p>
            </div>
      </div>
    </div>
  );
};

export default Body;
