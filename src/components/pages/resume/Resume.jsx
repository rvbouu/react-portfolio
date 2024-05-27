import resumeFile from '../../../assets/files/rvb_Resume_2024.pdf';
import './Resume.css';

export default function Resume() {


  return (
    <section className='resume'>
      <h1>Resumé</h1>
      <a href={resumeFile} download='RachanaVBou_Resume' target='_blank' rel='noreferrer' className='resumeBtn'>
        <button id='resumeBtn'>Click Here to Download My Resumé</button>
      </a>
      <h2>Front-end Proficiences</h2>
      <ul className='listgrp'>
        <li className='list'>CSS</li>
        <li className='list'>JavaScript</li>
        <li className='list'>JQuery</li>
        <li className='list'>Responsive Design</li>
        <li className='list'>React</li>
        <li className='list'>Bootstrap</li>
      </ul>
      <h2>Back-end Proficiences</h2>
      <ul className='listgrp'>
        <li className='list'>APIs</li>
        <li className='list'>Node</li>
        <li className='list'>Express</li>
        <li className='list'>PostgreSQL, Sequelize</li>
        <li className='list'>MongoDB, Mongoose</li>
        <li className='list'>REST</li>
      </ul>
    </section>
  )
}