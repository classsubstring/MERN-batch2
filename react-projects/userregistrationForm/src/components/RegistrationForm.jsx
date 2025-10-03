import React, { useState } from "react";

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    userName: "",
    email: "",
    password: "",
    gender: "",
  });

  function handleChange(e) {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  }

  function handleForm(e) {
    e.preventDefault();
    console.log(formData);
  }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center border border-red-400">
      <div className="flex items-center justify-center w-[80%]  flex-col border">
        <h2 className="text-2xl text-red-300">User Registration form</h2>
        <form onSubmit={handleForm}>
          <div>
            <label className="block text-xl p-2 " htmlFor="name">
              Enter Your name
            </label>
            <input
              className="bg-gray-300  text-xl rounded-xl p-2 focus:bg-amber-200"
              type="text"
              name="userName"
              id=""
              value={formData.userName}
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div>
            <label className="block text-xl p-2 " htmlFor="email">
              Enter Your email
            </label>
            <input
              className=" bg-gray-300  text-xl rounded-xl p-2 focus:bg-amber-200"
              type="text"
              name="email"
              value={formData.email}
              onChange={(e) => handleChange(e)}
              id=""
            />
          </div>
          <div>
            <label className="block text-xl p-2 " htmlFor="password">
              Enter Your password
            </label>
            <input
              className=" bg-gray-300  text-xl rounded-xl p-2 focus:bg-amber-200"
              type="text"
              name="password"
              id=""
              value={formData.password}
              onChange={(e) => handleChange(e)}
            />
          </div>

          <div className="flex gap-2 text-2xl">
            <label htmlFor="male">male</label>
            <input
              type="radio"
              name="gender"
              value="male"
              id=""
              checked={formData.gender === "male"}
              onChange={(e) => handleChange(e)}
            />
            <label htmlFor="female">Female</label>
            <input
              type="radio"
              name="gender"
              value="female"
              id=""
              checked={formData.gender === "female"}
              onChange={(e) => handleChange(e)}
            />
          </div>

          <button
            type="submit"
            className="bg-blue-600 rounded-2xl text-2xl p-2 m-2"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegistrationForm;
