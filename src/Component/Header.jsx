import React from "react";

export const Header= () => {
  return (
    <div className="bg-black text-white min-h-screen flex items-center justify-center">
      <div className="container mx-auto p-4">
        <div className="flex flex-col md:flex-row items-center">
          {/* Left Section - Image */}
          <div className="md:w-1/2 p-4">
            <img
              src="https://storage.googleapis.com/a1aa/image/SElR1H8GgMUyNnrfpgNRj7isn5tQ_s0st8hlhHKw7qQ.jpg"
              alt="Coding languages like Python, JavaScript, PHP, and C++ displayed in a purple theme"
              className="w-full"
              width="600"
              height="400"
            />

          </div>
          
          <div className="md:w-1/2 p-4">
            <h1 className="text-3xl font-bold mb-4">
              Level up your coding skills with live doubt-solving.
            </h1>
            <h2 className="text-xl font-semibold mb-2">
              Ctrl+Alt+Help: Your Programming Lifeline
            </h2>
            <p className="mb-4">
              Tired of hitting roadblocks in your learning journey? Our doubt-solving forum is your dedicated space to conquer those frustrating hurdles and unlock your full potential. Whether you're wrestling with a complex equation, grappling with a tricky coding concept, or simply seeking clarification on a perplexing idea, our vibrant community is here to help. Connect with fellow learners, share your questions, and receive insightful answers from experienced programmers.
            </p>
          </div>
        </div>

        {/* Bottom Image */}
        <div className="flex justify-center mt-4">
          <img
            src="https://storage.googleapis.com/a1aa/image/fOtuVTOZ6IpB6pB8SnsmnHhmsKj2jP0KtfM4sGXDFDo.jpg"
            alt="A screen displaying code in a blue theme"
            className="w-full md:w-1/2"
            width="600"
            height="400"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
