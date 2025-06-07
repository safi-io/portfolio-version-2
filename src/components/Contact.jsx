import React from "react";
import Button from "@mui/material/Button";
import { motion } from "framer-motion";

export default function Contact() {
  const handleClick = () => {
    alert(
      "Backend Integration Soon, You can mail at m.safi.ullah@outlook.com"
    );
  };

  const inputVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  const formFields = [
    { label: "Name", type: "text", name: "Name", required: true },
    { label: "Phone Number", type: "tel", name: "Number", required: false },
    { label: "E-mail", type: "email", name: "E-mail", required: true },
    { label: "Subject", type: "text", name: "Subject", required: true }
  ];

  return (
    <section className="maxWidth text-white px-5 pt-16 lg:pt-0">
      {/* Header */}
      <motion.div
        className="text-left mb-12"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, type: "spring", stiffness: 100 }}
      >
        <h1 className="lg:text-5xl text-3xl font-medium mb-4">
          Connect with Me
        </h1>
        <p className="text-gray-300 text-lg max-w-2xl mx-auto lg:mx-0">
          Let's start a conversation. I'd love to hear from you.
        </p>
      </motion.div>

      {/* Main Content */}
      <div className="flex flex-col lg:flex-row items-start justify-between gap-12 mb-20">
        
        {/* Contact Form */}
        <motion.div 
          className="w-full lg:w-1/2"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <form className="space-y-8">
            {/* Regular Input Fields */}
            {formFields.map((field, index) => (
              <motion.div
                key={field.name}
                className="group"
                variants={inputVariants}
                initial="hidden"
                animate="visible"
                transition={{ duration: 0.6, delay: 0.1 * index }}
              >
                <label 
                  htmlFor={field.name}
                  className="block text-sm font-semibold text-gray-200 mb-2 uppercase tracking-wide"
                >
                  {field.label} {field.required && <span className="text-red-400">*</span>}
                </label>
                <input
                  id={field.name}
                  name={field.name}
                  type={field.type}
                  required={field.required}
                  className="w-full h-12 px-4 text-lg bg-transparent border-b-2 border-gray-400 
                           text-white placeholder-gray-400 caret-white focus:outline-none 
                           focus:border-white transition-colors duration-300 group-hover:border-gray-300"
                  placeholder={`Enter your ${field.label.toLowerCase()}`}
                />
              </motion.div>
            ))}

            {/* Message Textarea */}
            <motion.div
              className="group"
              variants={inputVariants}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <label 
                htmlFor="Message"
                className="block text-sm font-semibold text-gray-200 mb-2 uppercase tracking-wide"
              >
                Message <span className="text-red-400">*</span>
              </label>
              <textarea
                id="Message"
                name="message"
                required
                rows={5}
                className="w-full px-4 py-3 text-lg bg-transparent border-2 border-gray-400 
                         text-white placeholder-gray-400 caret-white focus:outline-none 
                         focus:border-white transition-colors duration-300 resize-none 
                         group-hover:border-gray-300 rounded-md text-left"
                placeholder="Write your message here..."
              />
            </motion.div>

            {/* Submit Button */}
            <motion.div
              className="pt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <Button
                variant="contained"
                onClick={handleClick}
                className="!bg-gradient-to-r !from-blue-500 !to-purple-600 hover:!from-blue-600 
                         hover:!to-purple-700 !text-white !font-semibold !py-3 !px-8 !rounded-lg 
                         !shadow-lg hover:!shadow-xl !transition-all !duration-300 !transform 
                         hover:!scale-105"
                size="large"
              >
                Send Message
              </Button>
            </motion.div>
          </form>
        </motion.div>

        {/* Map Section */}
        <motion.div 
          className="w-full lg:w-1/2 flex justify-center lg:justify-end"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-600 
                          rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000"></div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9379.033345789698!2d73.1530186627538!3d30.636014066332674!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3922b6e4dde0c501%3A0xc37ea3d85326203!2sCOMSATS%20University%20Islamabad%20-%20Sahiwal%20Campus!5e0!3m2!1sen!2s!4v1700269484567!5m2!1sen!2s"
              className="relative w-full h-64 sm:w-96 sm:h-96 lg:w-[500px] lg:h-[500px] 
                       rounded-lg shadow-2xl border-2 border-gray-700"
              loading="lazy"
              title="COMSATS University Location"
            />
          </div>
        </motion.div>
      </div>

      {/* Contact Info Footer */}
      <motion.div 
        className="text-center py-8 border-t border-gray-700"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <p className="text-gray-300">
          Or reach out directly at{" "}
          <a 
            href="mailto:m.safi.ullah@outlook.com"
            className="text-blue-400 hover:text-blue-300 transition-colors duration-300 
                     underline decoration-dotted underline-offset-4"
          >
            m.safi.ullah@outlook.com
          </a>
        </p>
      </motion.div>
    </section>
  );
}