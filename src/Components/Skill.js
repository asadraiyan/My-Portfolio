import React from 'react'
import './Skill.css';
import html from '../assets/html.png'
import css from '../assets/css.png'
import javascript from '../assets/javascript.png'
import react from '../assets/react.png'
import github from '../assets/github.png'

const Skill = () => {
  return (
    <div>
      
      <div className="right">
                    <h2 className='skills'>My Skills</h2>
                    <div className="web-container">
                        <div className="html">
                            <img className='html-img' src={html} alt="html" />
                        </div>
                        <div className="css">
                            <img className='css-img' src={css} alt="css" />
                        </div>
                        <div className="javascript">
                            <img className='javascript-img' src={javascript} alt="javascript" />
                        </div>
                        <div className="react">
                            <img className='react-img' src={react} alt="react" />
                        </div>
                        <div className="github">
                            <img className='github-img' src={github} alt="github" />
                        </div>
                    </div>

                </div>
    </div>
  )
}

export default Skill
