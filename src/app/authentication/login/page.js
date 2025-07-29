"use client";
import { useState } from "react";
import Image from "next/image";
import { ToastContainer, toast } from "react-toastify";
import { useRouter } from "next/navigation";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
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
    // Check if fields are filled
    if (!formData.email || !formData.password) {
      toast.error("Please fill in all fields");
      return;
    }

    // Get user data from localStorage
    const storedUserData = localStorage.getItem("userData");

    if (!storedUserData) {
      toast.error("No account found. Please sign up first!");
      return;
    }

    const userData = JSON.parse(storedUserData);

    // Match email and password
    if (
      userData.email === formData.email &&
      userData.password === formData.password
    ) {
      toast.success("Login successful! Welcome back!");

      // Reset form
      setFormData({
        email: "",
        password: "",
      });

      // Redirect to home page after 1.5 seconds
      setTimeout(() => {
        router.push("/");
      }, 1500);
    } else {
      toast.error("Invalid email or password!");
    }
  };

  return (
    <section className="bg-gradient-to-br from-blue-50 to-indigo-100 min-h-screen flex items-center justify-center">
      <div className="container px-5 mx-auto">
        <div className="max-w-4xl mx-auto flex flex-wrap lg:flex-nowrap items-center bg-white rounded-2xl shadow-2xl overflow-hidden">
          {/* Left side - Login Form */}
          <div className="lg:w-1/2 w-full bg-gradient-to-br from-blue-500 to-indigo-600 p-8 lg:p-12 text-white">
            <div className="h-full flex flex-col justify-center">
              <div className="mb-8">
                <Image
                  src="/login.jpg"
                  alt="Login illustration"
                  width={400}
                  height={300}
                  className="rounded-xl shadow-lg object-cover w-full h-64 opacity-90"
                />
              </div>

              <div className="text-center lg:text-left">
                <h2 className="text-3xl font-bold mb-4">Ready to Continue?</h2>
                <p className="text-blue-100 text-lg leading-relaxed">
                  Access your dashboard and continue where you left off. Your
                  journey awaits with all the tools and features you need.
                </p>

                <div className="mt-8 flex justify-center lg:justify-start space-x-4">
                  <div className="w-16 h-1 bg-white rounded-full opacity-60"></div>
                  <div className="w-8 h-1 bg-white rounded-full opacity-40"></div>
                  <div className="w-4 h-1 bg-white rounded-full opacity-20"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Image and Info */}
          <div className="lg:w-1/2 w-full p-8 lg:p-12">
            <div className="text-center mb-8">
              <h1 className="text-4xl font-bold text-gray-900 mb-2">
                Welcome Back!
              </h1>
              <p className="text-gray-600">
                Sign in to continue to your account
              </p>
            </div>

            <div className="space-y-6">
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold text-gray-700 mb-2"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full bg-gray-50 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:bg-white text-base outline-none text-gray-700 py-3 px-4 leading-8 transition-all duration-200 ease-in-out hover:border-gray-300"
                  placeholder="Enter your email"
                />
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-semibold text-gray-700 mb-2"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  className="w-full bg-gray-50 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:bg-white text-base outline-none text-gray-700 py-3 px-4 leading-8 transition-all duration-200 ease-in-out hover:border-gray-300"
                  placeholder="Enter your password"
                />
              </div>

              <button
                onClick={handleSubmit}
                className="w-full text-white bg-gradient-to-r from-blue-500 to-blue-600 border-0 py-3 px-8 focus:outline-none hover:from-blue-600 hover:to-blue-700 rounded-xl text-lg font-semibold transition-all duration-200 ease-in-out transform hover:scale-[1.02] shadow-lg hover:shadow-xl"
              >
                Sign In
              </button>

              <div className="text-center pt-4">
                <p className="text-gray-600">
                  Don't have an account?{" "}
                  <a
                    href="/authentication/signup"
                    className="text-blue-500 hover:text-blue-600 font-semibold transition duration-200 hover:underline"
                  >
                    Create one here
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
