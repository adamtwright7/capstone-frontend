import React from "react";

const ErrorPage = () => {
  return (
    <div>
      <body className="bg-blueSecondary max-h-screen">
        <div className="container mx-auto py-16 px-4">
          <div className="flex flex-col items-center justify-center">
            <img
              className="w-48 mb-8"
              src="https://www.secureideas.com/hubfs/Imported_Blog_Media/ld_preload_random_number-1.png"
              alt="Logo"
            ></img>
            <h1 className="text-5xl font-bold text-goldAccents mb-2">
              404 Page Not Found
            </h1>
            <p className="text-white text-lg mb-8">
              We're sorry, but the page you requested could not be found.
            </p>
            <a
              href="/"
              className="bg-goldAccents hover:bg-yellow-600 text-blueSecondary font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Go back to home
            </a>
          </div>
        </div>
      </body>
    </div>
  );
};

export default ErrorPage;
