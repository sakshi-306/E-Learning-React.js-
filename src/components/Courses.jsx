import React from "react";
import CourseCard from "./CourseCard";
import { courses } from "../data/courses";
import Header from "./Header";
import Footer from "./Footer";
import { Link } from "react-router-dom";

const Courses = () => {
  return (
    <>
      {/* <Header /> */}
      <section id="courses" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Featured Courses
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Master in-demand skills with our expertly crafted courses designed
              for real-world success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {courses.map((course) => (
              <div
                key={course.id}
                className="transform transition-transform duration-300 hover:scale-105"
              >
                <Link to={`/${course.slug}`}>
                  <CourseCard course={course} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* <Footer /> */}
    </>
  );
};

export default Courses;
