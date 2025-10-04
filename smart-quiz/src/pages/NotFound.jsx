import { Rabbit } from "lucide-react";
import React from "react";

function NotFound() {
  return (
    <div className="p-10 gap-3 flex justify-center flex-col items-center h-screen">
      <Rabbit size={50} />
      <h1 className="text-3xl font-bold">Page not found</h1>
      <button
        type="button"
        class="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Go to Home page
      </button>
    </div>
  );
}

export default NotFound;
