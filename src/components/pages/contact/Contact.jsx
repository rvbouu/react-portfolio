import { UseState } from 'react';
import './Contact.css';

export default function Contact() {


  return (
    <section className='contact'>
      <h1>Contact Me</h1>
      <form className='form'>
        <label className='label' for="name">Name:</label>
        <input className='input' id="name" type="text" />
        <label className='label' for="email">Email:</label>
        <input className='input' id="email" type="text" />
        <label className='label' for="msg">Message:</label>
        <textarea className='input' id="msg" type="text"></textarea>
        <button id="submit">Submit</button>
      </form>
    </section>
  )
}