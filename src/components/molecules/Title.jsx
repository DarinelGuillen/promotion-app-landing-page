import React, { useState } from 'react';

function Title() {
  const [count, setCount] = useState(0);

  return (
<>
<h1 className="mt-8 font-GA text-3xl">Vite + React</h1>
      <div className="bg-black shadow-md mt-4 p-4 rounded-lg card">
        <button
          className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-md text-white"
          onClick={() => setCount((count) => count + 1)}
        >
          count is {count}
        </button>
        <p className="mt-2">
          Edit <code className="text-gray-600">src/App.jsx</code> and save to test HMR
        </p>
      </div>
</>
   );
}

export default Title;