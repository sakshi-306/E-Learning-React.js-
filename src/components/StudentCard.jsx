import React from "react";

const StudentCard = ({ student }) => (
  <div
    className="
      bg-gradient-to-br from-white to-gray-100
      rounded-2xl shadow-lg p-6 flex flex-col items-center
      text-center transition-transform duration-300 hover:scale-[1.05] hover:shadow-blue-300
    "
  >
    <div className="w-24 h-24 mb-4">
      <img
        src={student.avatar}
        alt={student.name}
        className="w-full h-full object-cover rounded-full border shadow-2xl border-blue-600"
      />
    </div>

    <h3 className="text-xl font-bold text-gray-900">{student.name}</h3>
    <p className="text-gray-500 mb-2">Age: {student.age}</p>
    <p className="text-blue-600 font-medium mb-4">{student.role}</p>

    <div className="flex items-center space-x-3 bg-white border rounded-xl px-4 py-2 w-full justify-center">
      <img
        src={student.companyLogo}
        alt={student.company}
        className="w-8 h-8 object-contain"
      />
      <div className="bg-white">
        <p className="text-gray-700 font-medium">{student.company}</p>
        <p className="text-gray-500 text-sm">{student.package}</p>
      </div>
    </div>
  </div>
);

export default StudentCard;
