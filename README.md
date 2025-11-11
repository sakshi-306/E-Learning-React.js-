# 🎓 Online Learning Platform (React + Tailwind)

A modern and responsive e-learning platform where users can browse courses and watch lessons with progressive unlocking.  
Each course opens in a **single dynamic Course Player** that updates based on the selected course.

## 🚀 Features

- 📚 Beautiful course browsing UI
- 🧭 React Router based navigation
- 🎥 Video-based course learning module
- 🔒 Progressive video unlocking (Watch next only after completing previous)
- 🧑‍🏫 Single **CoursePlayer** component for all courses (No code duplication)
- 💳 Enroll Now UI designed for future payment integration
- 🎨 Styled using **Tailwind CSS**
- ⚡ Fast & optimized with Vite

## 🛠️ Tech Stack

| Technology | Purpose |
|-----------|---------|
| **React.js** | Frontend UI |
| **Vite** | Fast development server & build |
| **Tailwind CSS** | Styling |
| **React Router DOM** | Page Routing |
| **Lucide React** | Icons |

## 📂 Project Structure

```
src/
│
├── components/
│   ├── CourseCard.jsx
│   └── CoursePlayer.jsx
│
├── pages/
│   ├── CoursesMain.jsx
│   ├── Login.jsx
│   ├── Register.jsx
│   ├── About.jsx
│   └── Web.jsx (Landing Page)
│
├── assets/
│   └── v1.mp4 (Sample video file)
│
└── App.jsx
```

## 🧠 How Course Player Works

Instead of making separate pages for each course (like DataScience.jsx, WebDev.jsx, etc.),  
this project uses **one dynamic page**:

```
/course/:slug
```

- Clicking a course card sends a slug (ex: `data-science`)
- The CoursePlayer loads correct title + video list based on slug
- Cleaner, scalable, and easier to maintain ✅

## 🔗 URL Examples

| Course Name | URL Path |
|------------|----------|
| Data Science | `/course/data-science` |
| Web Development | `/course/web-development` |
| Full Stack JS | `/course/full-stack-javascript` |

## ⚙️ Setup Instructions

Clone the project:

```bash
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name
```

Install dependencies:

```bash
npm install
```

Start development server:

```bash
npm run dev
```

Open browser at:

```
http://localhost:5173
```

## ⭐ Future Enhancements (Planned)

- ✅ Save course progress in localStorage
- ✅ Generate completion certificates
- 🔐 Login required before watching videos
- 💳 Payment gateway integration

## 📄 License

This project is **open-source** and available under the MIT License.
