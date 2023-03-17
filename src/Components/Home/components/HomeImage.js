import React from 'react'
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
        <p className='bio'>A mechanical engineer turned into a Frontend developer</p>
        <p className='bio'>A passionate Frontend React developer</p>
      </div>
    </div>
  )
}

export default HomeImage