import React from "react";
import Introimg from "../../../assets/bgimg.jpg";
import { Link } from "react-router-dom";

const HomeImage = () => {
  return (
    <div className="hero">
      <div className="mask">
        <img className="intro-img" src={Introimg} alt="Introimg" />
      </div>
      <div className="content">
        <h1 className="hello">Hi there!</h1>
        <span className="name">I'm Asad Raiyan</span>
        <p className="bio">
          A mechanical engineer turned into a Frontend developer
        </p>
        <p className="bio">A passionate Frontend developer</p>
        <div className="info">
          <a
            href="https://drive.google.com/file/d/1DC8cnibbHMmTMx8jE3kgOzuHMWRWTIVE/view?usp=drivesdk"
            className="resume"
            target="_blank"
            rel="noreferrer noopener"
          >
            {" "}
            Resume
          </a>
          <button className="talk">
            <Link className="talk-link" to="/Contact">
              {" "}
              Let's talk{" "}
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomeImage;
