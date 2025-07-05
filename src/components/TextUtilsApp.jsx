import React, { useEffect } from 'react';
import './TextUtils/App.css';
import Navbar from './TextUtils/components/Navbar';
import TextForm from './TextUtils/components/TextForm';
import Alert from './TextUtils/components/Alert';
import About from './TextUtils/components/About';
import { Routes, Route, useLocation } from 'react-router-dom';
// Ensure Bootstrap is loaded
import 'bootstrap/dist/css/bootstrap.min.css';

const TextUtilsApp = () => {
  const [mode, setMode] = React.useState("light");
  const [alert, setAlert] = React.useState(null);
  const location = useLocation();
  
  // Log when component mounts to verify it's being rendered
  useEffect(() => {
    console.log('TextUtilsApp component mounted');
  }, []);

  React.useEffect(() => {
    if (mode === "dark") {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }

    // Cleanup function
    return () => {
      document.body.classList.remove("dark-mode");
      document.body.style.backgroundColor = "";
    };
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
    <div className="App" style={{ position: 'relative', zIndex: 1, width: '100%', minHeight: '100vh' }}>
      <Navbar title="TextUtils" aboutText="About" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container my-3" style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 5, backgroundColor: mode === 'light' ? '#ffffff' : '#333333' }}>
        <Routes>
          <Route
            path=""
            element={
              <TextForm
                showAlert={showAlert}
                heading="Try Textutils - Word Counter, Character Counter, Remove Extra Spaces\n(Now also available in dark mode)"
                mode={mode}
              />
            }
          />
          <Route path="about" element={<About mode={mode} />} />
        </Routes>
      </div>
    </div>
  );
};

export default TextUtilsApp;