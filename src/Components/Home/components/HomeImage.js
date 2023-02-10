import React from 'react'
// import './HomeImage.css';
// import Introimg from '../assets/bgimg.jpg'
import Introimg from '../../../assets/bgimg.jpg'

const HomeImage = () => {
  return (
    <div className='hero'>
      <div className="mask">
        <img className='intro-img' src={Introimg} alt="Introimg" />
      </div>
      <div className="content">
        <h1 className='hello'>Hi there!</h1>
        <span className='name'>I'm Asad Raiyan</span>
        <p className='bio'>A mechanical engineer turned into a web developer</p>
      </div>
    </div>
  )
}

export default HomeImage