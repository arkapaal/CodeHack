import React from 'react';
// import 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css';
// import 'https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap';

export const Banner = () => {
  return (
    <div className="bg-black text-white" style={{ fontFamily: 'Inter, sans-serif' }}>
      <header className="flex justify-between items-center p-4">
        <div className="text-xl font-bold">CodeHack 10X</div>
        <nav className="space-x-4">
          <a className="hover:underline" href="#">AI</a>
          <a className="hover:underline" href="#">About</a>
          <a className="hover:underline" href="#">Support</a>
          <a className="hover:underline" href="#">Topics</a>
          <a href="https://discord.com/"><i className="fa-solid fa-coffee"></i></a>
        </nav>
        <div className="flex items-center space-x-4">
          <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white">A</div>
          <button className="border border-white px-4 py-1 rounded hover:bg-white hover:text-black">SIGN IN</button>
        </div>
        
      </header>
      
      <main className="flex flex-col md:flex-row items-start justify-center h-screen p-4">
        <div className="flex-1">
          <h1 className="text-6xl md:text-8xl font-bold leading-tight">
            Debugging Den: Your Go-To for Code Clarity
          </h1>
        </div>
        <div className="mt-8 md:mt-0 h-1/2 md:ml-8 p-4 bg-violet-700 rounded-lg w-full md:w-1/3">
          <h2 className="text-2xl font-bold mb-4">Hot Topics</h2>
          <ul className="space-y-2">
            <li className="hover:underline">
              <a href="#">Understanding Async/Await</a>
            </li>
            <li className="hover:underline">
              <a href="#">Mastering CSS Grid</a>
            </li>
            <li className="hover:underline">
              <a href="#">JavaScript ES6 Features</a>
            </li>
            <li className="hover:underline">
              <a href="#">Debugging Tips and Tricks</a>
            </li>
            <li className="hover:underline">
              <a href="#">Understanding React Hooks</a>
            </li>
          </ul>
        </div>
      </main>
    </div>
  );
};

export default Banner;
