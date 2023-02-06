import React from 'react'
import './Projectcard.css';

const Projectcard = () => {
    return (
        <div className="card">
            <h2>Project Name</h2>
            <p>12th January 2023</p>
            <p className='content'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur id vero fugit debitis voluptas autem commodi, asperiores nostrum iste. Earum?</p>
            <div className="btn-container">
                <button className='btn-1'>
                    <a href="" className='anchor' target="_blank">View Live</a>
                </button>
                <button className='btn-2'>
                    <a href="" className='anchor' target="_blank">View Source</a>
                </button>
            </div>
        </div>


    )
}

export default Projectcard
