import React from 'react';

const About = () => {
  return (
    <div className="bg-black min-h-screen flex flex-col items-center justify-center py-16 px-4  p-6 relative overflow-hidden">
      <header className="mb-12 text-center">
        <h1 className="text-4xl font-bold text-gray-300 mb-4">About Us</h1>
        <p className="text-xl text-[#4678F5]">We're on a mission to make amazing products.</p>
      </header>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-300 mb-4">Our Story</h2>
        <p className="text-gray-300 mb-4">
          Founded in 2020, our company began with a simple idea: to create products that truly matter.
          What started as a small team working out of a garage has grown into a passionate group of
          individuals dedicated to innovation and quality.
        </p>
        <p className="text-gray-300">
          Today, we serve customers worldwide, but our mission remains the same - to deliver exceptional
          value through thoughtful design and craftsmanship.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-300 mb-4">Our Values</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-[#16162F] p-6 rounded-lg">
            <h3 className="text-xl font-medium text-gray-300 mb-2">Quality</h3>
            <p className="text-gray-300">We never compromise on the quality of our products or services.</p>
          </div>
          <div className="bg-[#16162F] p-6 rounded-lg">
            <h3 className="text-xl font-medium text-gray-300 mb-2">Innovation</h3>
            <p className="text-gray-300">We continuously explore new ideas and technologies.</p>
          </div>
          <div className="bg-[#16162F] p-6 rounded-lg">
            <h3 className="text-xl font-medium text-gray-300 mb-2">Integrity</h3>
            <p className="text-gray-300">We operate with honesty, transparency, and respect.</p>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-300 mb-4">Our Team</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-32 h-32 bg-gray-300 rounded-full mx-auto mb-4"></div>
            <h3 className="text-xl font-medium text-gray-300">Jane Doe</h3>
            <p className="text-gray-600">Co-Founder & CEO</p>
          </div>
          <div className="text-center">
            <div className="w-32 h-32 bg-gray-300 rounded-full mx-auto mb-4"></div>
            <h3 className="text-xl font-medium text-gray-300">John Smith</h3>
            <p className="text-gray-600">Co-Founder & CTO</p>
          </div>
          <div className="text-center">
            <div className="w-32 h-32 bg-gray-300 rounded-full mx-auto mb-4"></div>
            <h3 className="text-xl font-medium text-gray-300">Lisa Johnson</h3>
            <p className="text-gray-600">Head of Design</p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-300 mb-4">Contact Us</h2>
        <p className="text-gray-300 mb-6">
          We'd love to hear from you! Feel free to reach out with any questions or inquiries.
        </p>
        <div className="bg-[#16162F] p-6 rounded-lg">
          <p className="text-gray-300 mb-2">Email: contact@example.com</p>
          <p className="text-gray-300 mb-2">Phone: (555) 123-4567</p>
          <p className="text-gray-300">Address: 123 Main St, Anytown, USA</p>
        </div>
      </section>
    </div>
  );
};

export default About;