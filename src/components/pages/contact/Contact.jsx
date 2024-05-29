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
        setErrMsg('REQUIRED: Please Enter a Name.')
      }
    }

    if(name === 'email'){
      if(value === ''){
        setFormData({...formData, [name]: ''});
        return setErrMsg('REQUIRED: Please Enter an Email Address.')
      }
      const validEmail = /^([a-z0-9_.-]+)@([\da-z.-]+).([a-z.]{2,6})$/;
      console.log(!validEmail.test(value))
      if(!validEmail.test(value)){
        return setErrMsg('INVALID: Please Enter a Valid Email Address.')
      }else{
        setErrMsg('')
      }
    }

    if(name === 'msg'){
      if(value === ''){
        setFormData({...formData, [name]: ''});
        setErrMsg('REQUIRED: Please Enter a Message.')
      }
    }
    if(value.length > 0){
      setErrMsg('');
    }
  }

  return (
    <section className='contact'>
      <h2 className='contact-title'>Contact Me</h2>
      <form className='form'>

        <label className='label' htmlFor="name">Name:</label>
        <input className='input' name="name" type="text" defaultValue={formData.name} placeholder='Enter Your Name' onBlur={validateForm}/>

        <label className='label' htmlFor="email">Email:</label>
        <input className='input' name="email" type="email" defaultValue={formData.email} placeholder='Enter Your Email Address' onBlur={validateForm}/>

        <label className='label' htmlFor="msg">Message:</label>
        <textarea className='input' name="msg" id='msg' type="text" defaultValue={formData.msg} placeholder='Enter A Message' onBlur={validateForm}></textarea>

        <button id="submit">Submit</button>
        
        <div className='errMsg'>{errMsg}</div>
      </form>
    </section>
  )
}