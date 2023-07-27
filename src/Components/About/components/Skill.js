import React from "react";
import html from "../../../assets/html.png";
import css from "../../../assets/css.png";
import javascript from "../../../assets/javascript.png";
import react from "../../../assets/react.png";
import github1 from "../../../assets/github1.png";
import redux from "../../../assets/redux.png";
import node from "../../../assets/node.png";
import express from "../../../assets/exp.png";

const Skill = () => {
  return (
    <>
      <div className="right">
        <h2 className="skills">My Skills</h2>
        <div className="web-container">
          <img className="html-img" src={html} alt="html" />
          <img className="css-img" src={css} alt="css" />
          <img className="javascript-img" src={javascript} alt="javascript" />
          <img className="react-img" src={react} alt="react" />
          <img className="redux-img" src={redux} alt="redux" />
          <img className="github-img" src={github1} alt="github" />
          <img className="node-img" src={node} alt="node" />
          <img className="exp-img" src={express} alt="express" />
        </div>
      </div>
    </>
  );
};

export default Skill;
