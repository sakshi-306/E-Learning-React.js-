import React from "react";
import { Star } from "lucide-react";

const InstructorCard = ({ instructor }) => (
  <div
    className="
      bg-white rounded-2xl shadow-lg overflow-hidden group cursor-pointer
      transition-transform duration-300 ease-in-out transform
      hover:scale-[1.03] hover:-translate-y-2
    "
  >
    <div className="flex justify-center mt-6">
      <img
        src={instructor.image}
        alt={instructor.name}
        className="w-24 h-24 rounded-full object-cover border border-blue-600 transition-transform duration-300 group-hover:scale-105"
      />
    </div>

    <div className="p-6 text-center">
      <h3 className="text-xl font-bold text-gray-900 mb-1">{instructor.name}</h3>
      <p className="text-sm font-medium text-gray-700">{instructor.title}</p>
      <p className="text-sm text-gray-500 mb-4">{instructor.company}</p>

      <div className="flex items-center justify-center gap-4 mb-4 text-sm text-gray-500">
        <div className="flex items-center space-x-1">
          <Star className="h-4 w-4 text-yellow-400 fill-current" />
          <span className="font-medium text-gray-700">{instructor.rating}</span>
          <span>({instructor.students} Students)</span>
        </div>
        <div>{instructor.duration}</div>
      </div>

      <div className="mt-2">
        <button
          className="
            bg-blue-600 text-white px-6 py-2 rounded-lg text-sm font-medium
            transition-all duration-300 hover:bg-blue-700
            hover:scale-[1.05] active:scale-[0.95]
          "
        >
          View Profile
        </button>
      </div>
    </div>
  </div>
);

export default InstructorCard;
