import React from "react";
import Button from "@mui/material/Button";
import { motion } from "framer-motion";

export default function Contact() {
  const handleClick = () => {
    alert(
      "Backend Integeration Soon, You can mail at m.safi.ullah@outlook.com"
    );
  };

  return (
    <section className="maxWidth text-white px-5">
      <motion.h1
        className="lg:text-5xl text-2xl font-medium mb-10"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, type: "spring", stiffness: 100 }}
      >
        Connect with Me
      </motion.h1>

      <div className="flex flex-col lg:flex-row items-center justify-between mb-20">
        <form className="flex flex-col items-center">
          <div className="mt-5">
            <p className=" font-bold">Name</p>
            <input
              className="h-[30px] w-full sm:w-[400px] mt-[10px] text-[18px] bg-transparent border-b-solid border-b-white border-b-[1px] caret-white focus:outline-none text-center"
              required
              type="text"
              name="Name"
              id="Name"
            />
          </div>

          <div className="mt-5">
            <p className="font-bold">Phone Number:</p>
            <input
              className="h-[30px] w-full sm:w-[400px] mt-[10px] text-[18px] bg-transparent border-b-solid border-b-white border-b-[1px] caret-white focus:outline-none text-center"
              type="number"
              name="Number"
              id="Number"
            />
          </div>

          <div className="mt-5">
            <p className="font-bold">E-mail</p>
            <input
              className="h-[30px] w-full sm:w-[400px] mt-[10px] text-[18px] bg-transparent border-b-[1px] border-b-white border-b-solid focus:outline-none text-center caret-white"
              required
              type="email"
              name="E-mail"
              id="E-mail"
            />
          </div>

          <div className="mt-5">
            <p className="font-bold">Subject</p>
            <input
              className="h-[30px] w-full sm:w-[400px] mt-[10px] text-[18px] bg-transparent border-b-[1px] border-b-white border-b-solid caret-white focus:outline-none text-center"
              type="text"
              name="Subject"
              id="Subject"
              required
            />
          </div>

          <div className="mt-5">
            <p className="font-bold">Write Your Message</p>
            <textarea
              className="h-[100px] w-full sm:w-[400px] mt-[10px] text-[18px] bg-transparent border-b-[1px] border-b-white border-b-solid caret-white focus:outline-none text-center"
              required
              name="message"
              id="Message"
            ></textarea>
          </div>

          <Button variant="contained" onClick={handleClick}>
            Send Message
          </Button>
        </form>

        <div className="mt-10 lg:mt-0">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9379.033345789698!2d73.1530186627538!3d30.636014066332674!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3922b6e4dde0c501%3A0xc37ea3d85326203!2sCOMSATS%20University%20Islamabad%20-%20Sahiwal%20Campus!5e0!3m2!1sen!2s!4v1700269484567!5m2!1sen!2s"
            className="sm:w-[500px] sm:h-[500px] w-[350px] h-[300px]"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
