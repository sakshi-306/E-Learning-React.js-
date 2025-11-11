import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Courses from "./components/Courses";
import Companies from "./components/Companies";
import Instructors from "./components/Instructors";
import Students from "./components/Students";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from "./pages/Register";
import Web from "./Web";
import Login from "./pages/Login";
import About from "./pages/About";
import CoursesMain from "./pages/CoursesMain";
import DataScience from "./pages/DataScience";
import CoursePlayer from "./components/CoursePlayer";

const App = () => (
  <div className="min-h-screen font-poppins">
    <Routes>
      <Route path="/" element={<Web />}></Route>
      <Route path="/Register" element={<Register />}></Route>
      <Route path="/Login" element={<Login />}></Route>
      <Route path="/About" element={<About />}></Route>
      <Route path="/Courses" element={<CoursesMain />}></Route>
      {/* Course detail pages */}
      <Route path="/:slug" element={<CoursePlayer />} />
      {/* <Route path="/data-science" element={<DataScience />} /> */}
    </Routes>
  </div>
);

export default App;
