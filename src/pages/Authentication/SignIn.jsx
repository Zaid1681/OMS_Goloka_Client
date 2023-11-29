import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const Login = () => {
  const [selectedRole, setSelectedRole] = useState('admin');

  // Handler function to update the selected role
  const handleRoleChange = (event) => {
    setSelectedRole(event.target.value);
  };

  const [credentials, setCredentials] = useState({
    email: undefined,
    password: undefined,
  });
  const handleChange = (e) => {
    //mapping a value of input using thier id name
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const navigate = useNavigate();
  const handleClick = async (e) => {
    e.preventDefault();

    // dispatch({ type: 'LOGIN_START' });
    try {
      const res = await axios.post(
        // "https://bookingappbackend.onrender.com/api/auth/login",
        'http://localhost:8000/api/auth/login',
        credentials
      );
      console.log('user logged in sucessfully');
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Login Sucessfully',
        showConfirmButton: false,
        timer: 2500,
      });
      navigate('/admin');
    } catch (error) {
      console.log('Error :', error);
      Swal.fire({
        icon: 'error',
        title: 'Error uploading file:',
        text: 'Something went wrong!',
      });
    }

    //handleClick
  };

  return (
    <div className="h-screen bg-black lg:h-180">
      <section className="">
        <div className="mx-auto flex flex-col items-center justify-center px-6 py-8 md:h-screen lg:py-0">
          <img
            src="https://golokait.com/wp-content/uploads/2023/10/cropped-Screenshot_2023-10-15_030822-removebg-preview-1.png"
            alt=""
            className="w-20 lg:mt-15"
          />
          <h1 className="m-3 text-center text-xl font-bold leading-tight tracking-tight text-white dark:text-white md:text-2xl">
            Welcome to <br />
            Onboarding Management System
          </h1>

          <div className="dark:bg-gray-800 dark:border-gray-700 w-full rounded-lg bg-body shadow dark:border sm:max-w-md md:mt-0 xl:p-0">
            <div className="space-y-4 p-6 sm:p-8 md:space-y-6">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-white dark:text-white md:text-2xl">
                Sign in to your account
              </h1>
              <form className="space-y-4 md:space-y-6" action="#">
                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-lg font-medium text-white dark:text-white"
                  >
                    Your email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    onChange={handleChange}
                    className="bg-gray-50 border-gray-300 text-gray-900 focus:ring-primary-600 focus:border-primary-600 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-grey dark:focus:ring-blue-500 dark:focus:border-blue-500 block w-full rounded-lg border p-2.5 sm:text-sm"
                    placeholder="name@company.com"
                    required=""
                  />
                </div>
                <div>
                  <label
                    htmlFor="password"
                    className="mb-2 block text-lg font-medium text-white dark:text-white"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    onChange={handleChange}
                    className="bg-gray-50 border-gray-300 text-gray-900 focus:ring-primary-600 focus:border-primary-600 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-grey-600 dark:focus:ring-blue-500 dark:focus:border-blue-500 block w-full rounded-lg border p-2.5 sm:text-sm"
                    required=""
                  />
                </div>
                <div>
                  <label
                    htmlFor="role"
                    className="mb-2 block text-lg font-medium text-white dark:text-white"
                  >
                    Select Role
                  </label>
                  <select
                    id="role"
                    name="role"
                    value={selectedRole}
                    onChange={handleRoleChange}
                    className="bg-gray-50 border-gray-300 focus:ring-primary-600 focus:border-primary-600 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-grey-600 dark:focus:ring-blue-500 dark:focus:border-blue-500 block w-full rounded-lg border p-2.5 text-black sm:text-sm"
                    required=""
                  >
                    <option
                      value="admin"
                      className="text-black focus:text-black"
                    >
                      Admin
                    </option>
                    <option value="Hr" className="text-black">
                      Hiring Team
                    </option>
                    <option value="Tech" className="text-black">
                      Technical Team
                    </option>
                  </select>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-start">
                    <div className="flex h-5 items-center">
                      <input
                        id="remember"
                        aria-describedby="remember"
                        type="checkbox"
                        className="border-gray-300 bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800 pointer-cursor h-4 w-4 cursor-pointer rounded  border"
                        required=""
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label
                        htmlFor="remember"
                        className="dark:text-gray-300 cursor-pointer text-sm text-white"
                      >
                        Remember me
                      </label>
                    </div>
                  </div>
                  <a
                    href="#"
                    className="dark:text-primary-500 text-sm font-medium text-white hover:underline"
                  >
                    Forgot password?
                  </a>
                </div>
                <button
                  // href="/admin"
                  type="submit"
                  onClick={handleClick}
                  className="border-1 hover:bg-primary-700 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 border-sky-500 dark:focus:ring-primary-800 w-full rounded-lg border bg-primary px-5 py-2.5 text-center text-sm font-medium text-white focus:outline-none focus:ring-4"
                >
                  Sign in
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
