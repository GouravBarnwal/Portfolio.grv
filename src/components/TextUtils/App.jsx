import React, { useState, useEffect } from "react";
import "./App.css";
import About from "./components/About.jsx";
import Navbar from "./components/Navbar.jsx";
import TextForm from "./components/TextForm.jsx";
import Alert from "./components/Alert.jsx";
import { Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  useEffect(() => {
    if (mode === "dark") {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [mode]);

  const showAlert = (message, type) => {
    setAlert({ msg: message, type: type });
    setTimeout(() => setAlert(null), 1500);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#333";
      showAlert("Dark mode has been enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
    }
  };

  return (
    <div className="App" style={{ position: 'relative', zIndex: 1 }}>
      <Navbar title="TextUtils" aboutText="About" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container my-3" style={{ position: 'relative', zIndex: 10 }}>
        <Routes>
          <Route
            index
            element={
              <TextForm
                showAlert={showAlert}
                heading="Try Textutils - Word Counter, Character Counter, Remove Extra Spaces (Now also available in dark mode)"
                mode={mode}
              />
            }
          />
          <Route path="about" element={<About mode={mode} />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
