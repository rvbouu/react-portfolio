// imports
import resumeFile from '../../../assets/rvb_Resume_2024.pdf'; // resume pdf file
import './Resume.css';

// exports
export default function Resume() {
  return (
    <section className='resume'>
      <h2 className='resume-title'>Resumé</h2>
      {/* link/button to download resume pdf */}
      <a href={resumeFile} download='RachanaVBou_Resume' target='_blank' rel='noreferrer' className='resumeBtn'>
        <button id='resumeBtn' type='submit'>Click Here to Download My Resumé</button>
      </a>

      {/* proficiences lists */}
      <div className='prof'>
        <ul className='listgrp'>
          <h3 className='subtitle'>Front-end Proficiences</h3>
          <li className='list'>CSS</li>
          <li className='list'>JavaScript</li>
          <li className='list'>JQuery</li>
          <li className='list'>Responsive Design</li>
          <li className='list'>React</li>
          <li className='list'>Bootstrap</li>
        </ul>
        <ul className='listgrp'>
          <h3 className='subtitle'>Back-end Proficiences</h3>
          <li className='list'>APIs</li>
          <li className='list'>Node</li>
          <li className='list'>Express</li>
          <li className='list'>PostgreSQL, Sequelize</li>
          <li className='list'>MongoDB, Mongoose</li>
          <li className='list'>REST</li>
        </ul>
      </div>
    </section>
  )
}