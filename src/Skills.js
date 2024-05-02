import "./styles.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

export default function Skills() {
  return (
    <>
      <p>
        <a href={`/`}>Go back</a>
      </p>
      <h4>Skills</h4>
      <li>Strong problem-solving skills with a keen analytical mindset</li>
      <li>Excellent communication skills, both verbal and written.</li>
      <li>Proven leadership abilities and experience managing teams.</li>
      <li>Effective time management and ability to prioritize tasks.</li>
      <li>High adaptability to dynamic work environments and challenges.</li>
    </>
  );
}
