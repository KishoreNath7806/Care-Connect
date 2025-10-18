"use client";

import React from "react";
import { Button } from "@/components/ui/button";

const SupportForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const email = "kishorekabilnath@gmail.com";
    const subject = formData.get("subject");
    const message = formData.get("message");

    window.location.href = `mailto:${email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(message)}`;
  };

  return (
    <div className="bg-[rgba(62,161,255,0.04)] rounded-lg p-8">
      <h2 className="text-2xl font-bold text-center text-gray-700 mb-6">
        Have Questions About Our Plans?
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label
            htmlFor="subject"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Subject
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            required
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1560bd] focus:border-transparent"
            placeholder="Enter subject"
          />
        </div>
        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Your Message
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={4}
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1560bd] focus:border-transparent"
            placeholder="Type your question here..."
          />
        </div>
        <Button
          type="submit"
          className="w-full bg-[#1560bd] hover:bg-[#1560bd]/90 text-white"
        >
          Send Email
        </Button>
      </form>
      <p className="text-sm text-gray-500 text-center mt-4">
        Our support team typically responds within 24 hours on business days.
      </p>
    </div>
  );
};

export default SupportForm;
