import React from 'react';

const TermsPage = () => {
  return (
    <div id="terms" className="min-h-screen text-gray-800 px-6 py-10">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-8">
        <h1 className="text-5xl font-bold text-center mb-6 text-gray-900">Terms and Conditions</h1>
        <p className="text-gray-700 mb-4">
          Welcome to FitHub! By using our workout set tracker application, you agree to the following terms and conditions. Please read them carefully.
        </p>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2 text-gray-900">1. Acceptance of Terms</h2>
          <p className="text-gray-700">
            By accessing and using the FitHub application, you accept and agree to be bound by these terms. If you do not agree to these terms, you may not use our services.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2 text-gray-900">2. User Responsibilities</h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>You agree to provide accurate and up-to-date information when using FitHub.</li>
            <li>You are solely responsible for the accuracy of the workout data you log into the application.</li>
            <li>You will not misuse the application or attempt to compromise its functionality or security.</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2 text-gray-900">3. Data Collection and Storage</h2>
          <p className="text-gray-700">
            FitHub stores your workout data, including exercise names, repetitions, and other related information, in our database to provide you with a personalized experience. We are committed to safeguarding your data and will not share it with third parties without your consent.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2 text-gray-900">4. Limitations of Liability</h2>
          <p className="text-gray-700">
            FitHub is provided "as is" and without warranties of any kind. We are not liable for any inaccuracies in the data you provide or any consequences resulting from the use of our application.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2 text-gray-900">5. Updates and Modifications</h2>
          <p className="text-gray-700">
            We reserve the right to update or modify these terms at any time. Changes will be effective upon posting, and continued use of FitHub constitutes your acceptance of the revised terms.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2 text-gray-900">6. Contact Us</h2>
          <p className="text-gray-700">
            If you have any questions or concerns about these terms, please contact us at <a href="mailto:support@fithub.com" className="text-blue-500 underline">support@fithub.com</a>.
          </p>
        </section>

        <p className="text-center text-gray-800 mt-6">Thank you for choosing FitHub to track your fitness journey!</p>
      </div>
    </div>
  );
};

export default TermsPage;
