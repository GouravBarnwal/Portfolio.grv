import React, { useEffect } from "react";
import "../clock.project2.css";

const Clock = () => {
  useEffect(() => {
    const hr = document.getElementById("hrs");
    const mn = document.getElementById("min");
    const sc = document.getElementById("sec");
    const dateDisplay = document.getElementById("date-display");
    const hour = document.getElementById("hour");
    const minute = document.getElementById("minutes");
    const seconds = document.getElementById("seconds");
    const ampm = document.getElementById("ampm");

    const updateClock = () => {
      // Date display
      if (dateDisplay) {
        const date = new Date();
        const options = { weekday: "long", year: "numeric", month: "long", day: "numeric" };
        dateDisplay.innerHTML = date.toLocaleDateString("en-US", options);
      }
      // Analog clock
      const day = new Date();
      const hh = day.getHours() * 30;
      const mm = day.getMinutes() * 6;
      const ss = day.getSeconds() * 6;
      if (hr) hr.style.transform = `rotateZ(${hh + mm / 12}deg)`;
      if (mn) mn.style.transform = `rotateZ(${mm}deg)`;
      if (sc) sc.style.transform = `rotateZ(${ss}deg)`;
      // Digital clock
      let h = day.getHours();
      let m = day.getMinutes();
      let s = day.getSeconds();
      let am = h >= 12 ? "PM" : "AM";
      if (h > 12) h = h - 12;
      h = h < 10 ? "0" + h : h;
      m = m < 10 ? "0" + m : m;
      s = s < 10 ? "0" + s : s;
      if (hour) hour.innerHTML = h;
      if (minute) minute.innerHTML = m;
      if (seconds) seconds.innerHTML = s;
      if (ampm) ampm.innerHTML = am;
    };
    const interval = setInterval(updateClock, 1000);
    updateClock();
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="clock-container">
      <div id="date-display"></div>
      <div className="clock">
        <div className="numbers">
          <div className="circle" id="sec" style={{ "--clr": "#04fc43" }}><i></i></div>
          <div className="circle" id="min" style={{ "--clr": "#fee800" }}><i></i></div>
          <div className="circle" id="hrs" style={{ "--clr": "#ff2972" }}><i></i></div>
          {[...Array(12)].map((_, i) => (
            <span key={i} style={{ "--i": i }}><b>{i === 0 ? 12 : i}</b></span>
          ))}
        </div>
        <div id="time">
          <div id="hour" style={{ "--clr": "#ff2972" }}>00</div>
          <div id="minutes" style={{ "--clr": "#e5ff00" }}>00</div>
          <div id="seconds" style={{ "--clr": "#04fb00" }}>00</div>
          <div id="ampm" style={{ "--clr": "#ffffff" }}>AM</div>
        </div>
      </div>
    </div>
  );
};

export default Clock; 