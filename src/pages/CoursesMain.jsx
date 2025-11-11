import React from "react";
import CourseCard from "../components/CourseCard";
import { courses } from "../data/courses";
import Header from "../components/Header";
import Footer from "../components/Footer";

const CoursesMain = () => {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-gray-100 py-10 px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Our Courses</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {courses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CoursesMain;
