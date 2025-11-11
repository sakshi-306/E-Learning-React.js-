import React from "react";
import InstructorCard from "./InstructorCard";
import Img1 from "../assets/man1.jpg"
import Img2 from "../assets/man2.jpg"
import Img3 from "../assets/man3.jpg"

const instructors = [
  {
    id: 1,
    name: "Sujal Patel",
    title: "Senior Developer",
    company: "Logicwind",
    image: Img1,
    description: "Experienced full-stack developer.",
    rating: 4.9,
    students: 1200,
    duration: "45h",
  },
  {
    id: 2,
    name: "Devang Patel",
    title: "Data Scientist",
    company: "Morphsync Tech",
    image: Img2,
    description: "Expert in machine learning and data analysis.",
    rating: 4.7,
    students: 950,
    duration: "60h",
  },
  {
    id: 3,
    name: "Harshil Patel",
    title: "Front-end Developer",
    company: "Codesdot Solutions",
    image: Img3,
    description: "Experienced in React Js, HTML, CSS, JavaScript,Tailwind CSS",
    rating: 4.8,
    students: 1500,
    duration: "30h",
  },
];

const Instructors = () => (
  <section className="py-16 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-12">Our Instructors</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {instructors.map((inst, index) => (
          <InstructorCard key={inst.id} instructor={inst} index={index} />
        ))}
      </div>
    </div>
  </section>
);

export default Instructors;
