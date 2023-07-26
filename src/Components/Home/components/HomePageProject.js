import React from "react";
import { Link } from "react-router-dom";

const HomePageProject = () => {
  return (
    <>
      <div className="project-card-1">
        <div className="work">
          <h1 className="my-work">My Work</h1>
        </div>
        <div className="project-container">
          <div className="card-1">
            <h2 className="title">Unique Collection</h2>
            <small className="date">
              <time>30th March, 2023</time>
            </small>
            <p className="content-1">
              Created an app using React.Js It is an E-Commerce app that allows
              customers to purchase goods and services online.
            </p>
            <div className="btn-container-1">
              <button className="btn-3">
                <a
                  href="https://unique-collection.netlify.app/"
                  className="anchor-1"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  View Live
                </a>
              </button>
              <button className="btn-4">
                <a
                  href="https://github.com/asadraiyan/E-Mart"
                  className="anchor-1"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  View Source
                </a>
              </button>
            </div>
          </div>
          <div className="card-1">
            <h2 className="title">Live Chat App</h2>
            <small className="date">
              <time>20th June, 2023</time>
            </small>
            <p className="content-1">
              Created an app using React Js, Node Js, Express and Socket.io. It
              is a real time chat application.
            </p>
            <div className="btn-container-1">
              <button className="btn-3">
                <a
                  href="https://live-chat-app-prod.netlify.app/"
                  className="anchor-1"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  View Live
                </a>
              </button>
              <button className="btn-4">
                <a
                  href="https://github.com/asadraiyan/livechat-app"
                  className="anchor-1"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  View Source
                </a>
              </button>
            </div>
          </div>
          <div className="card-1">
            <h2 className="title">MERN Register</h2>
            <small className="date">
              <time>5th June, 2023</time>
            </small>
            <p className="content-1">
              Created an app using MERN stack. This app allows you to register
              yourself and create a profile of your own.
            </p>
            <div className="btn-container-1">
              <button className="btn-3">
                <a
                  href="https://asad-mern-register.netlify.app/"
                  className="anchor-1"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  View Live
                </a>
              </button>
              <button className="btn-4">
                <a
                  href="https://github.com/asadraiyan/mern-stack"
                  className="anchor-1"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  View Source
                </a>
              </button>
            </div>
          </div>
        </div>
        <div className="buttons">
          <button className="view-all">
            {" "}
            <Link className="anchor-1" to="/Projects">
              {" "}
              View All{" "}
            </Link>
          </button>
        </div>
      </div>
    </>
  );
};

export default HomePageProject;
