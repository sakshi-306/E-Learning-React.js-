import React from "react";
import { Star } from "lucide-react";
import { useNavigate } from "react-router-dom";

const CourseCard = ({ course }) => {
  const navigate = useNavigate();

  const openCourse = () => {
    navigate(`/${course.title.toLowerCase().replace(/ /g, "-")}`);
  };

  return (
    <div
      onClick={openCourse}
      className="bg-white rounded-2xl shadow-lg overflow-hidden group cursor-pointer transition-transform duration-300 hover:scale-[1.03] hover:-translate-y-1"
    >
      <div className="relative overflow-hidden">
        <img
          src={course.image}
          alt={course.title}
          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 text-sm font-semibold text-blue-600">
          {course.level}
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2">{course.title}</h3>
        <p className="text-gray-600 mb-4 line-clamp-2">{course.description}</p>

        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-1">
            <Star className="h-4 w-4 text-yellow-400 fill-current" />
            <span className="text-sm font-medium">{course.rating}</span>
            <span className="text-sm text-gray-500">({course.students})</span>
          </div>
          <div className="text-sm text-gray-500">{course.duration}</div>
        </div>

        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold text-blue-600">{course.price}</div>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-transform duration-200 hover:scale-105 active:scale-95 hover:bg-blue-700">
            Enroll Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
