import React from "react";
import { LogInIcon } from "lucide-react";
function LoginPage() {
  return (
    <div className="min-h-screen w-full relative">
      {/* Radial Gradient Background */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background:
            "radial-gradient(125% 125% at 50% 10%, #fff 40%, #6366f1 100%)",
        }}
      />
      <div className=" absolute w-full">
        <div className="max-w-lg shadow-lg bg-gray-200 rounded mt-10 mx-auto px-8 py-4 ">
          {/* header */}
          <div className="flex flex-col gap-2 ">
            <LogInIcon size={35} />
            <h1 className="text-xl font-bold text-gray-800">Login Here !</h1>
            <p className="text-gray-500">
              Fill username password correctly, you have limited attempts.
            </p>
          </div>

          {/* form */}

          <form action="" className="mt-5 flex flex-col gap-3">
            {/* email */}

            <div>
              <label className="text-gray-700 pl-2" htmlFor="">
                Your Email
              </label>
              <input
                type="email"
                className=" mt-1 w-full px-3 py-3 rounded-2xl bg-gray-300"
                placeholder="Enter here"
              />
            </div>

            {/* password */}

            <div>
              <label className="text-gray-700 pl-2" htmlFor="">
                Your Password
              </label>
              <input
                type="password"
                className=" mt-1 w-full px-3 py-3 rounded-2xl bg-gray-300"
                placeholder="Enter here"
              />
            </div>

            {/* button */}
            <div className="flex justify-center ">
              <button className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
                Login
              </button>
              <button className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
                Clear
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
