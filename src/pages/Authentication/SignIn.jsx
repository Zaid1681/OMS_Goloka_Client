import React, { useState } from "react";

const Login = () => {
  const [selectedRole, setSelectedRole] = useState("admin");

  // Handler function to update the selected role
  const handleRoleChange = (event) => {
    setSelectedRole(event.target.value);
  };

  return (
    <div className="bg-black h-screen lg:h-180">
      <section className="">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <img
            src="https://golokait.com/wp-content/uploads/2023/10/cropped-Screenshot_2023-10-15_030822-removebg-preview-1.png"
            alt=""
            className="w-20 lg:mt-15"
          />
          <h1 className="text-xl font-bold leading-tight tracking-tight text-white md:text-2xl dark:text-white text-center m-3">
            Welcome to <br />
            Onboarding Management System
          </h1>

          <div className="w-full bg-body rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-white md:text-2xl dark:text-white">
                Sign in to your account
              </h1>
              <form className="space-y-4 md:space-y-6" action="#">
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-lg font-medium text-white dark:text-white"
                  >
                    Your email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-grey dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="name@company.com"
                    required=""
                  />
                </div>
                <div>
                  <label
                    htmlFor="password"
                    className="block mb-2 text-lg font-medium text-white dark:text-white"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-grey-600 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required=""
                  />
                </div>
                <div>
                  <label
                    htmlFor="role"
                    className="block mb-2 text-lg font-medium text-white dark:text-white"
                  >
                    Select Role
                  </label>
                  <select
                    id="role"
                    name="role"
                    value={selectedRole}
                    onChange={handleRoleChange}
                    className="bg-gray-50 border border-gray-300 text-black sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-grey-600 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required=""
                  >
                    <option value="admin" className="text-black focus:text-black">Admin</option>
                    <option value="Hr" className="text-black">Hiring Team</option>
                    <option value="Tech" className="text-black">Technical Team</option>
                  </select>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="remember"
                        aria-describedby="remember"
                        type="checkbox"
                        className="w-4 h-4 cursor-pointer border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800  pointer-cursor"
                        required=""
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label
                        htmlFor="remember"
                        className="text-white text-sm cursor-pointer dark:text-gray-300"
                      >
                        Remember me
                      </label>
                    </div>
                  </div>
                  <a
                    href="#"
                    className="text-sm font-medium text-white hover:underline dark:text-primary-500"
                  >
                    Forgot password?
                  </a>
                </div>
                <a
                  href="/admin"
                  type="submit"
                  className="w-full text-white border-1 bg-primary hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 border border-sky-500 dark:focus:ring-primary-800"
                >
                  Sign in
                </a>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
