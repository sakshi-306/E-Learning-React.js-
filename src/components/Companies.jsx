import React from "react";
import { motion } from "framer-motion";
import tataLogo from "../assets/tata.jpg";
import infosysLogo from "../assets/infosys.png";
import relianceLogo from "../assets/reliance.png";
import wiproLogo from "../assets/wipro.png";
import hclLogo from "../assets/hcl.png";

const companies = [
  { id: 1, name: "Tata Technologies", logo: tataLogo },
  { id: 2, name: "Infosys", logo: infosysLogo },
  { id: 3, name: "Reliance Industries", logo: relianceLogo },
  { id: 4, name: "Wipro", logo: wiproLogo },
  { id: 5, name: "HCL Technologies", logo: hclLogo },
  { id: 6, name: "Tata Technologies", logo: tataLogo },
  { id: 7, name: "Infosys",  logo: infosysLogo },
  { id: 8, name: "Reliance Industries", logo: relianceLogo },
  { id: 9, name: "Wipro", logo: wiproLogo },
  { id: 10, name: "HCL Technologies", logo: hclLogo },
];

const Companies = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">Our Partner Companies</h2>

        <div className="overflow-hidden">
          <motion.div
            className="flex gap-6"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
          >
            {companies.map((company, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center flex-shrink-0 w-52 h-52"
                whileHover={{ scale: 1.1 }}
              >
                <img
                  src={company.logo}
                  alt={company.name}
                  className="w-20 h-20 object-contain mb-4 rounded-full"
                />
                <span className="text-lg font-semibold text-gray-800">{company.name}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Companies;
