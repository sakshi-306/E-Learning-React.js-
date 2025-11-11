import React, { useState } from "react";
import { useParams } from "react-router-dom";
import v1 from "../assets/v1.mp4";
import Header from "./Header";
import Footer from "./Footer";

const courseVideos = {
  "advanced-react-development": {
    title: "Advanced React Development",
    videos: [
      { title: "React Hooks Deep Dive", src: v1 },
      { title: "Context API and Reducers", src: v1 },
      { title: "Advanced Patterns", src: v1 },
    ],
  },
  "full-stack-javascript": {
    title: "Full Stack JavaScript",
    videos: [
      { title: "Introduction to Full Stack", src: v1 },
      { title: "Frontend with React", src: v1 },
      { title: "Backend with Node.js", src: v1 },
    ],
  },
  "python-for-data-science": {
    title: "Python for Data Science",
    videos: [
      { title: "Intro to Python", src: v1 },
      { title: "Pandas & NumPy", src: v1 },
      { title: "Data Visualization", src: v1 },
    ],
  },
  "machine-learning-with-python": {
    title: "Machine Learning with Python",
    videos: [
      { title: "Intro to Machine Learning", src: v1 },
      { title: "Supervised Learning", src: v1 },
      { title: "Model Evaluation", src: v1 },
    ],
  },
  "ui-ux-design-fundamentals": {
    title: "UI/UX Design Fundamentals",
    videos: [
      { title: "Introduction to UI/UX", src: v1 },
      { title: "Wireframing & Prototyping", src: v1 },
      { title: "User Testing", src: v1 },
    ],
  },
  "digital-marketing-mastery": {
    title: "Digital Marketing Mastery",
    videos: [
      { title: "SEO Basics", src: v1 },
      { title: "Social Media Marketing", src: v1 },
      { title: "Content Strategy", src: v1 },
    ],
  },
  "android-app-development": {
    title: "Android App Development",
    videos: [
      { title: "Kotlin Basics", src: v1 },
      { title: "Building UI", src: v1 },
      { title: "Publishing App", src: v1 },
    ],
  },
  "cybersecurity-essentials": {
    title: "Cybersecurity Essentials",
    videos: [
      { title: "Introduction to Cybersecurity", src: v1 },
      { title: "Threats & Vulnerabilities", src: v1 },
      { title: "Network Security", src: v1 },
    ],
  },
};

const CoursePlayer = () => {
  const { slug } = useParams();
  const course = courseVideos[slug];

  if (!course) {
    return (
      <div className="p-6 text-center text-red-600 text-xl font-semibold">
        Course not found ⚠️
      </div>
    );
  }

  const [unlocked, setUnlocked] = useState([0]);

  const handleEnd = (index) => {
    if (index + 1 < course.videos.length) {
      setUnlocked((prev) => [...new Set([...prev, index + 1])]);
    }
  };

  return (
    <>
      <Header />
      <div className="p-6">
        <h1 className="text-3xl font-bold text-indigo-600 mb-6 text-center">
          {course.title}
        </h1>

        {course.videos.map((v, i) => (
          <div key={i} className="border p-4 rounded mb-4">
            <h3 className="font-semibold mb-2">{v.title}</h3>

            {unlocked.includes(i) ? (
              <video width="100%" controls onEnded={() => handleEnd(i)}>
                <source src={v.src} type="video/mp4" />
              </video>
            ) : (
              <p className="text-red-500">
                Locked. Watch previous video first.
              </p>
            )}
          </div>
        ))}
      </div>
      <Footer />
    </>
  );
};

export default CoursePlayer;
