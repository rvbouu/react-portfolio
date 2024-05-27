import { useState } from 'react';
import './Contact.css';

export default function Contact() {
  const [formData, setFormData] = useState({name: '', email: '', msg: ''})
  const [errMsg, setErrMsg] = useState('');

  const validateForm = (e) => {
    console.log(e);
    const {name, value} = e.target;
    console.log(name, value);
    setFormData({...formData, [name]: value});

    if(name === 'name'){
      if(value === ''){
        setFormData({...formData, [name]: ''});
        setErrMsg('REQUIRED: Please Enter A Name.')
      }
    }
    if(name === 'email'){
      if(value === ''){
        setFormData({...formData, [name]: ''});
        setErrMsg('REQUIRED: Please Enter An Email Address.')
      }
    }
    if(name === 'msg'){
      if(value === ''){
        setFormData({...formData, [name]: ''});
        setErrMsg('REQUIRED: Please Enter A Message.')
      }
    }
    if(value.length > 0){
      setErrMsg('');
    }
  }

  return (
    <section className='contact'>
      <h1>Contact Me</h1>
      <form className='form'>
        <label className='label' htmlFor="name">Name:</label>
        <input className='input' name="name" type="text" defaultValue={formData.name} placeholder='Enter Your Name' onBlur={validateForm}/>
        <label className='label' htmlFor="email">Email:</label>
        <input className='input' name="email" type="text" defaultValue={formData.email} placeholder='Enter Your Email Address' onBlur={validateForm}/>
        <label className='label' htmlFor="msg">Message:</label>
        <textarea className='input' name="msg" type="text" defaultValue={formData.msg} placeholder='Enter A Message' onBlur={validateForm}></textarea>
        <button id="submit">Submit</button>
        <div className='errMsg'>{errMsg}</div>
      </form>
    </section>
  )
}