import React, { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="max-w-md mx-auto">
        <div className="bg-black shadow-md rounded px-8 py-6">
          <h1 className="font-bold text-4xl mb-5 text-center text-white italic">
            Counter App
          </h1>
          <h2 className="text-3xl text-center mb-4 text-white">{count}</h2>
          <div className="flex justify-center space-x-4">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded italic"
              onClick={() => setCount(count + 1)}
            >
              Increment
            </button>
            <button
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded italic"
              onClick={() => setCount(count - 1)}
            >
              Decrement
            </button>
            <button
              className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded italic"
              onClick={() => setCount(0)}
            >
              Restart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
