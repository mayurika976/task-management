import React from "react";
import OTPInput from "./OTPInput";
import Footer from "./Footer";

const Dashboard = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="p-5 bg-gray-100">
        <h1 className="text-center text-xl font-bold">Task Management Dashboard</h1>
      </header>
      <main className="flex-grow flex items-center justify-center">
        <div className="w-full max-w-md">
          <h2 className="text-center mb-4">Enter OTP</h2>
          <OTPInput length={4} />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Dashboard;
