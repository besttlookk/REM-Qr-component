import React from "react";
import QRCode from "./images/image-qr-code.png";

function App() {
  return (
    <div class="bg-bg flex items-center justify-center min-h-screen ">
      <main>
        <div className="max-w-xs p-4 bg-white shadow-2xl rounded-2xl w-90w">
          {/* Image container */}
          <div className="overflow-hidden rounded-lg">
            <img
              src={QRCode}
              alt="QR-code"
              className="object-cover w-full h-full"
            />
          </div>

          <div className="px-3 pt-2 pb-5">
            <h2 className="mt-5 text-xl font-bold text-center text-blue-dark">
              Improve your front-end{" "}
              <span className="block">skills by building projects</span>
            </h2>

            <p className="mt-3 leading-5 text-center text-primary-size text-blue-gray">
              Scan the QR code to visit Frontend Mentor and take your coding
              skills to the next level
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
