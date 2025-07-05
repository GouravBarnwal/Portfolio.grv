import React from "react";
import "../projects.css";

const Projects = () => {
  return (
    <div className="projects-page-bg" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', position: 'relative' }}>
      <a href="/" className="projects-home-btn">Home</a>
      <div className="projects-heading-box">
        <h1 className="projects-heading">My Projects</h1>
      </div>
      <div className="projects-btn-group">
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <a href="/clock" target="_blank" rel="noopener noreferrer" className="btn project-btn">Clock</a>
          <div className="project-desc">
            <p>
              The Clock project is a simple yet elegant digital clock built with React. It displays the current time in real-time, updating every second. The design is clean and responsive, making it suitable for both desktop and mobile devices. This project demonstrates the use of React hooks and dynamic rendering.
            </p>
          </div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <a href="/todo" target="_blank" rel="noopener noreferrer" className="btn project-btn">To-Do-List</a>
          <div className="project-desc">
            <p>
              The To-Do-List project is a productivity tool built with React. It allows users to add, delete, and manage daily tasks efficiently. The interface is intuitive and user-friendly, supporting real-time updates and persistent storage. This project highlights state management and interactive UI design in React.
            </p>
          </div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <a href="/textutils" className="btn project-btn">TextUtils</a>
          <div className="project-desc">
            <p>
              TextUtils is a versatile text utility tool built with React. It allows users to manipulate and analyze text, including changing case, removing extra spaces, counting words and characters, and more. The interface is clean and interactive, making it a handy tool for everyday text processing tasks.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects; 