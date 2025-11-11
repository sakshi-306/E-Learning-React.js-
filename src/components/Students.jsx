import React from "react";
import StudentCard from "./StudentCard";
import TataLogo from "../assets/tata.jpg"
import InfosysLogo from "../assets/infosys.png"
import WiproLogo from "../assets/wipro.png"
import Sujal from "../assets/sujal.jpg"
import Harshil from "../assets/harshil.jpg"
import Devang from "../assets/devang.jpg"

const students = [
  {
    id: 1,
    name: "Sujal Patel",
    age: 21,
    role: "React Developer",
    avatar: Sujal,
    company: "Tata Consultancy",
    companyLogo: TataLogo,
    package: "3 LPA"
  },
  {
    id: 2,
    name: "Harshil Patel",
    age: 21,
    role: "React Developer",
    avatar: Harshil,
    company: "Infosys",
    companyLogo: InfosysLogo,
    package: "3.5 LPA"
  },
  {
    id: 3,
    name: "Devang Patel",
    age: 21,
    role: "React Developer",
    avatar: Devang,
    company: "Wipro",
    companyLogo: WiproLogo,
    package: "4 LPA"
  }
];

const Students = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">Top Placed Students</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {students.map(student => (
            <StudentCard key={student.id} student={student} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Students;
