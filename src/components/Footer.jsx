import React from "react";
import { motion } from "framer-motion";

const Footer = () => (
  <motion.footer
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 1 }}
    className="text-center text-gray-400 text-sm mt-10"
  >
    Designed for NASA Hackathon • Made with 💜 by Sanjay Raja
  </motion.footer>
);

export default Footer;
