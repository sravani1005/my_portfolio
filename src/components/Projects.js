import React, { useState } from 'react';
import './Projects.css';

function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const projects = [
    {
      title: "Attendance Facial Recognition System",
      description: "Developed a  real-time attendance system using Python and OpenCV, automating classroom attendance through webcam image capture, facial detection, and matching against a student database with Firebase Integration for efficient data management, ensuring storage of attendance records. "
    },
    {
      title: "Expense Tracker Application",
      description: "Developed a Java-based Expense Tracker application using Swing GUI and integrated authentication mechanisms also Implemented features including expense addition, viewing total expenses, editing, and expenses, ensuring effective budget management."
    },
    {
      title: "Stroke Prediction",
      description: "Devloped a predictive model for stroke prediction by preprocessing healthcare data and applying logistic regression and k-nearest neighbor algorithm and Evaluated model performance using accuracy scores, confusion matrices, and classification reports to ensure accurate prediction of stroke incidences."
    },
  ];

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? projects.length - 1 : prevIndex - 1));
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex === projects.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <section id="projects" className="projects-section">
      <h2 className="section-title">My Projects</h2>
      <div className="projects-container">
        <button className="arrow left-arrow" onClick={handlePrevClick}>◀</button>
        <div className="project-card">
          <h3 className="project-title">{projects[currentIndex].title}</h3>
          <p className="project-description">{projects[currentIndex].description}</p>
        </div>
        <button className="arrow right-arrow" onClick={handleNextClick}>▶</button>
      </div>
    </section>
  );
}

export default Projects;
