import React from 'react';
import { motion } from "framer-motion";

const HelpSupportPage = () => {
  return (
    <div id="help" className="min-h-screen mt-16 text-gray-800 px-6 py-10">
      <motion.div 
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-8">
        <h1 className="text-5xl font-bold text-center mb-6 text-gray-900">Help & Support</h1>
        <p className="text-gray-700 mb-4">
          Welcome to the FitHub Help & Support page! We're here to assist you with any issues or questions you may have regarding our workout set tracker application.
        </p>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2 text-gray-900">1. Frequently Asked Questions</h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li><strong>How do I log my workouts?</strong> Use the workout tracker feature to input your exercise, repetitions, and sets.</li>
            <li><strong>Can I edit my workout data?</strong> Yes, you can modify your workout logs anytime from your dashboard.</li>
            <li><strong>How I delete my whole workouts?</strong> Hold the card you want to select to delete.</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2 text-gray-900">2. Technical Support</h2>
          <p className="text-gray-700">
            If you encounter any technical issues, please reach out to our support team. Provide a detailed description of the issue, including screenshots if possible.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2 text-gray-900">3. Contact Us</h2>
          <p className="text-gray-700">
            For further assistance, feel free to contact us:
          </p>
          <ul className="list-none space-y-2 text-gray-700">
            <li>Email: <a href="mailto:projecta245@gmail.com" className="text-blue-500 underline">projecta245@gmail.com</a></li>
            <li>Phone: <a href="tel:+1234567890" className="text-blue-500 underline">+1 234 567 890</a></li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2 text-gray-900">4. Community Support</h2>
          <p className="text-gray-700">
            Join our user community to exchange tips and get help from other users. Visit our forums or social media channels for more support.
          </p>
        </section>

        <p className="text-center text-gray-800 mt-6">Thank you for choosing FitHub! We're here to support you on your fitness journey.</p>
      </motion.div>
    </div>
  );
};

export default HelpSupportPage;
