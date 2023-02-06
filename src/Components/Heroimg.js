import React from 'react'
import './Heroimg.css';
import Introimg from '../assets/bgimg.jpg'

const Heroimg = () => {
  return (
    <div className='hero'>
        <div className="mask">
            <img className='intro-img' src={Introimg} alt="Introimg" />
        </div>
        <div className="content">
            <p className='hello'>Hi there!</p>
            <p className='name'>I'm Asad Raiyan</p>
            <p className='bio'>A mechanical engineer turned into a web developer</p>
        </div>
        
      
    </div>
  )
}

export default Heroimg