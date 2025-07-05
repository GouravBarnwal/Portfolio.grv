import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Portfolio from "./components/Portfolio";
import Clock from "./components/Clock";
import ToDoList from "./components/ToDoList";
import Projects from "./components/Projects";
import TextUtilsApp from "./components/TextUtilsApp";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Portfolio />} />
        <Route path="/clock" element={<Clock />} />
        <Route path="/todo" element={<ToDoList />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/textutils" element={<TextUtilsApp />} />
      </Routes>
    </Router>
  );
}

export default App;
