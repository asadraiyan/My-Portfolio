import React from 'react'
// import './Formpage.css';

const Formpage = () => {
  return (
    <div className='form'>
      <form className='form-page'>
        <label className='label'> Your Name:</label>
        <input className='txt' type="text" placeholder='Enter Your Name' autoComplete='off' />
        <label className='label'>Email:</label>
        <input className='txt' type="email" placeholder='Enter Your email' autoComplete='off' />
        <label className='label'>Contact:</label>
        <input className='txt' type="text" placeholder='Enter Your Phone Number' autoComplete='off' />
        <label className='label'>Message:</label>
        <textarea className='msg-txt' rows="6" placeholder='Type your message here'></textarea>
        <button className='submit-btn'>Submit</button>
      </form>
    </div>
  )
}

export default Formpage
