import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import {
  FaTwitter,
  FaLinkedin,
  FaGithub,
  FaFacebook,
  FaPhone,
  FaMailBulk,
} from "react-icons/fa";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  //

  //

  //

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        service_yj26peu,
        template_379tjq5,
        {
          from_name: form.name,
          to_name: "Dev Clinton",
          from_email: form.email,
          to_email: "confidinho@yahoo.com",
          message: form.message,
        },
        ex8hN7PDODmq5Ha5J
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };

  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>
        <div className=" xs:bottom-10 bottom-32 w-full flex justify-star">
          <div className="flex mt-4 gap-4 ">
            <a
              href="https://twitter.com/confidesm1?lang=en"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter className="text-4xl text-white bg-[#915eff] p-1 rounded-full" />
            </a>
            <a
              href="https://www.linkedin.com/in/dev-clinton/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="text-4xl text-white bg-[#915eff] p-1 rounded-full" />
            </a>
            <a
              href="https://github.com/Clinzho1996"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="text-4xl text-white bg-[#915eff] p-1 rounded-full" />
            </a>
            <a
              href="https://www.facebook.com/lifeofconfidence.clinton.5"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook className="text-4xl text-white bg-[#915eff] p-1 rounded-full" />
            </a>
            <a
              href="tel:/+2388125306092"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaPhone className="text-4xl text-white bg-[#915eff] p-1 rounded-full" />
            </a>
            <a
              href="mailto:confidinho@yahoo.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaMailBulk className="text-4xl text-white bg-[#915eff] p-1 rounded-full" />
            </a>
          </div>
        </div>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's your good name?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What's your web address?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Message</span>
            <textarea
              rows={7}
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What you want to say?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>

          <button
            type="submit"
            className="bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary"
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
