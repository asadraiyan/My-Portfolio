import React from 'react'
import './Projectcard.css';
import { Projectdata } from "./Projectdata";

const Projectcard = () => {
    return (
        <div className="project-card">
            {
                Projectdata.map((currelement) => {
                    return (
                        <div className="card" key={currelement.id}>
                            <h2>{currelement.name}</h2>
                            <p>{currelement.date}</p>
                            <p className='contents'>{currelement.description}</p>
                            <div className="btn-container">
                                <button className='btn-1'>
                                    <a href={currelement.appLink} className='anchor' target="_blank">View Live</a>
                                </button>
                                <button className='btn-2'>
                                    <a href={currelement.sourceLink} className='anchor' target="_blank">View Source</a>
                                </button>
                            </div>
                        </div>
                    )
                })}

        </div>


    )
}

export default Projectcard
