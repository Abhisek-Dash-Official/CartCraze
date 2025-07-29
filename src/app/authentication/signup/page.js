"use client";
import { useState } from "react";
import Image from "next/image";
import { ToastContainer, toast } from "react-toastify";
import { useRouter } from "next/navigation";

const Signup = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    contactNumber: "",
  });

  const router = useRouter();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    if (
      !formData.username ||
      !formData.email ||
      !formData.password ||
      !formData.contactNumber
    ) {
      toast.error("Please fill in all fields");
      return;
    }

    if (!formData.email.includes("@")) {
      toast.error("Invalid email, please enter a valid email");
      return;
    }

    const hasDigit = /\d/.test(formData.password);
    const hasChar = /[a-zA-Z]/.test(formData.password);

    if (!hasDigit || !hasChar) {
      toast.error("Password must contain at least one digit and one character");
      return;
    }

    if (
      !(
        /^\d+$/.test(formData.contactNumber) &&
        formData.contactNumber.length === 10
      )
    ) {
      console.log(
        "contact number is: ",
        formData.contactNumber,
        "\ntype of :",
        typeof formData.contactNumber
      );
      toast.error("Invalid Contact number!");
      return;
    }

    // Store user data in localStorage (overwrite existing data)
    localStorage.setItem("userData", JSON.stringify(formData));

    toast.success("Account created successfully!");

    setFormData({
      username: "",
      email: "",
      password: "",
      contactNumber: "",
    });

    setTimeout(() => {
      router.push("/authentication/login");
    }, 2000);
  };

  return (
    <section className="text-gray-600 body-font min-h-screen">
      <div className="container px-5 py-24 mx-auto flex flex-wrap items-center">
        <div className="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
          <div className="relative mb-8">
            <Image
              src="/login.jpg"
              alt="Login illustration"
              width={600}
              height={400}
              className="rounded-lg shadow-lg object-cover w-full h-80"
            />
          </div>
          <h1 className="title-font font-medium text-3xl text-gray-900">
            Join Our Community Today
          </h1>
          <p className="leading-relaxed mt-4">
            Create your account to access exclusive features and connect with
            like-minded individuals. Start your journey with us today and unlock
            endless possibilities.
          </p>
        </div>

        <div className="lg:w-2/6 md:w-1/2 bg-white rounded-lg shadow-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 border border-gray-200">
          <h2 className="text-gray-900 text-lg font-medium title-font mb-5">
            Create Account
          </h2>

          <div>
            <div className="relative mb-4">
              <label
                htmlFor="username"
                className="leading-7 text-sm text-gray-600"
              >
                Username
              </label>
              <input
                type="text"
                id="username"
                name="username"
                value={formData.username}
                onChange={handleInputChange}
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                placeholder="Enter your username"
              />
            </div>

            <div className="relative mb-4">
              <label
                htmlFor="email"
                className="leading-7 text-sm text-gray-600"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                placeholder="Enter your email"
              />
            </div>

            <div className="relative mb-4">
              <label
                htmlFor="password"
                className="leading-7 text-sm text-gray-600"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                placeholder="Enter your password"
              />
            </div>

            <div className="relative mb-4">
              <label
                htmlFor="contactNumber"
                className="leading-7 text-sm text-gray-600"
              >
                Contact Number
              </label>
              <input
                type="tel"
                id="contactNumber"
                name="contactNumber"
                value={formData.contactNumber}
                onChange={handleInputChange}
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                placeholder="Enter your contact number"
              />
            </div>

            <button
              onClick={handleSubmit}
              className="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg w-full transition duration-200 ease-in-out transform hover:scale-105"
            >
              Sign Up
            </button>
          </div>

          <div className="mt-4 text-center">
            <p className="text-sm text-gray-600">
              Already have an account?{" "}
              <a
                href="/authentication/login"
                className="text-indigo-500 hover:text-indigo-600 font-medium transition duration-200"
              >
                Login here
              </a>
            </p>
          </div>
        </div>
      </div>

      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </section>
  );
};

export default Signup;
