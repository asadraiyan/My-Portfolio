import React from 'react'
import { Link } from "react-router-dom";

const HomePageProject = () => {
  return (
    <>

      <div className="project-card-1">
        <div className="work">
          <h1 className='my-work'>My Work</h1>
        </div>
        <div className="project-container">
          <div className="card-1">
            <h2 className='title'>Food Gallery App</h2>
            <small className='date'>
              <time>27th January, 2023</time>
            </small>
            <p className='content-1'>Created an app using React.Js. It is a food gallery app which allows you to select different types of food categories.</p>
            <div className="btn-container-1">
              <button className='btn-3'>
                <a href="https://food-gallery-app.netlify.app" className='anchor-1' target="_blank">View Live</a>
              </button>
              <button className='btn-4'>
                <a href="https://github.com/asadraiyan/React-food--filter-gallery" className='anchor-1' target="_blank">View Source</a>
              </button>
            </div>
          </div>
          <div className="card-1">
            <h2 className='title'>Quiz App</h2>
            <small className='date'>
              <time>31st January, 2023</time>
            </small>
            <p className='content-1'>Created an app using React.Js. It is an application which asks different types of questions based on web development.</p>
            <div className="btn-container-1">
              <button className='btn-3'>
                <a href="https://quizzz-app-react.netlify.app" className='anchor-1' target="_blank">View Live</a>
              </button>
              <button className='btn-4'>
                <a href="https://github.com/asadraiyan/react-quiz-app" className='anchor-1' target="_blank">View Source</a>
              </button>
            </div>
          </div>
          <div className="card-1">
            <h2 className='title'>Calendar App</h2>
            <small className='date'>
              <time>14th January, 2023</time>
            </small>
            <p className='content-1'>Created an app using HTML CSS & Javascript. A JavaScript Calendar which display the date and days of the week.</p>
            <div className="btn-container-1">
              <button className='btn-3'>
                <a href="https://dynamic-calendar-app.netlify.app/" className='anchor-1' target="_blank">View Live</a>
              </button>
              <button className='btn-4'>
                <a href="https://github.com/asadraiyan/Calendar-app" className='anchor-1' target="_blank">View Source</a>
              </button>
            </div>
          </div>
        </div>
        <div className="buttons">
          <button className='view-all'> <Link className='anchor-1' to="/Projects" > View All </Link></button>
        </div>
      </div>

    </>
  )
}

export default HomePageProject
