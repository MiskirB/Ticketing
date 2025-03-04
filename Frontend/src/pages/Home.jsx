import React from "react";
import { Link } from "react-router-dom";

function Home() {
  const features = [
    {
      title: "User-Friendly Interface",
      description:
        "Easily navigate and manage your tickets with our intuitive design.",
      image: "https://picsum.photos/300/200?random=1",
    },
    {
      title: "Real-Time Updates",
      description:
        "Stay informed with instant notifications and live ticket tracking.",
      image: "https://picsum.photos/300/200?random=2",
    },
    {
      title: "Secure Transactions",
      description:
        "Your data is protected with industry-standard security measures.",
      image: "https://picsum.photos/300/200?random=3",
    },
  ];

  const testimonials = [
    {
      text: `"This platform has revolutionized the way we handle ticketing. It's efficient and user-friendly!"`,
      name: "Abebe D.",
      image: "https://picsum.photos/100/100?random=4",
    },
    {
      text: `"Real-time updates keep us informed at all times. Highly recommend!"`,
      name: "Nejat S.",
      image: "https://picsum.photos/100/100?random=5",
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen font-sans">
      {/* Navbar */}
      <nav className="bg-violet-500 text-white p-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold">
            TicketMaster
          </Link>
          <div className="space-x-4">
            <Link to="/" className="hover:text-gray-300">
              Home
            </Link>
            <Link to="/signup" className="hover:text-gray-300">
              Register
            </Link>
            <Link to="/signin" className="hover:text-gray-300">
              Login
            </Link>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="container mx-auto p-8 text-center">
        <h1 className="text-5xl font-extrabold text-violet-700 mb-6">
          Welcome to the Ticketing System
        </h1>
        <p className="mb-6 text-lg text-gray-600">
          Manage your tickets efficiently with our platform.
        </p>

        {/* Features Section */}
        <section className="my-12">
          <h2 className="text-3xl font-semibold mb-6">Features</h2>
          <div className="flex flex-wrap justify-center gap-6">
            {features.map((feature, index) => (
              <div key={index} className="w-full sm:w-1/2 lg:w-1/3 p-4">
                <div className="bg-white shadow-lg rounded-lg p-6 transition-transform transform hover:scale-105">
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="rounded-lg mb-4 w-full"
                  />
                  <h3 className="text-xl font-semibold mb-2 text-violet-600">
                    {feature.title}
                  </h3>
                  <p className="text-gray-500">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Call-to-Action Buttons - Moved here below Features */}
        <div className="my-8">
          <h3 className="text-2xl font-semibold text-violet-600 mb-4">
            Get Started Today!
          </h3>
          <div className="space-x-4">
            <Link
              to="/signup"
              className="bg-violet-500 text-white px-6 py-2 rounded-full hover:bg-violet-600 transition duration-300"
            >
              Sign Up
            </Link>
            <Link
              to="/signin"
              className="bg-gray-500 text-white px-6 py-2 rounded-full hover:bg-green-600 transition duration-300"
            >
              Sign In
            </Link>
          </div>
        </div>

        {/* Testimonials Section */}
        <section className="my-12 bg-gray-100 py-8">
          <h2 className="text-3xl font-semibold mb-6">What Our Users Say</h2>
          <div className="flex flex-wrap justify-center gap-6">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="w-full sm:w-1/2 lg:w-1/3 p-4">
                <div className="bg-white shadow-lg rounded-lg p-6">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="rounded-full mx-auto mb-4 w-24 h-24"
                  />
                  <p className="italic text-gray-700">{testimonial.text}</p>
                  <p className="mt-2 font-semibold text-violet-600">
                    - {testimonial.name}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

export default Home;
