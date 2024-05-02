import "./styles.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

export default function App() {
  return (
    <>
      <h1>My Homepage</h1>
      <h4>A list of my projects:</h4>
      <ul>
        <li>Kindness kiosk</li>
        <li>Fitness app</li>
        <li>Waves - an app for surfers</li>
      </ul>
      <h3>Contact Me!</h3>
      <b>person@example.com</b>
      <p>
        <a href={`/skills/`}>See my skills!</a>
      </p>
    </>
  );
}
