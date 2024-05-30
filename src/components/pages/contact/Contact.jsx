// imports
import { useState } from 'react';
import Popup from 'reactjs-popup'; // popup library for contact icon
import './Contact.css';

// exports
export default function Contact() {

  // needed function for Netlify form submission
  const encode = (data) => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
  }

  // allows form to be manipulated
  const [formData, setFormData] = useState({ name: '', email: '', msg: '' })

  // allows errMsg to get rendered
  const [errMsg, setErrMsg] = useState('');

  // allows errMsg to get rendered
  const [successMsg, setSuccessMsg] = useState('');

  // checks form inputs: if form field is left empty, displays an errMsg to the user
  const validateForm = (e) => {
    console.log(e);
    const { name, value } = e.target;
    console.log(name, value);
    setFormData({ ...formData, [name]: value });

    if (name === 'name') {
      if (value === '') {
        setFormData({ ...formData, [name]: '' });
        setErrMsg('REQUIRED: Please Enter a Name.')
      }
    }

    if (name === 'email') {
      if (value === '') {
        setFormData({ ...formData, [name]: '' });
        return setErrMsg('REQUIRED: Please Enter an Email Address.')
      }

      // checks for a valid email
      const validEmail = /^([a-z0-9_.-]+)@([\da-z.-]+).([a-z.]{2,6})$/;
      console.log(!validEmail.test(value))
      if (!validEmail.test(value)) {
        return setErrMsg('INVALID: Please Enter a Valid Email Address.')
      } else {
        setErrMsg('')
      }
    }

    if (name === 'msg') {
      if (value === '') {
        setFormData({ ...formData, [name]: '' });
        setErrMsg('REQUIRED: Please Enter a Message.')
      }
    }
    if (value.length > 0) {
      setErrMsg('');
    }
  }

  // handles form submission for Netlify
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(e);
    const { name, value } = e.target;
    console.log(name, value);
    setFormData({ ...formData, [name]: value });

    if (name === 'name') {
      if (value === '') {
        setFormData({ ...formData, [name]: '' });
        setErrMsg('REQUIRED: Please Enter a Name.')
      }
    }

    if (name === 'email') {
      if (value === '') {
        setFormData({ ...formData, [name]: '' });
        return setErrMsg('REQUIRED: Please Enter an Email Address.')
      }

      // checks for a valid email
      const validEmail = /^([a-z0-9_.-]+)@([\da-z.-]+).([a-z.]{2,6})$/;
      console.log(!validEmail.test(value))
      if (!validEmail.test(value)) {
        return setErrMsg('INVALID: Please Enter a Valid Email Address.')
      } else {
        setErrMsg('')
      }
    }

    if (name === 'msg') {
      if (value === '') {
        setFormData({ ...formData, [name]: '' });
        setErrMsg('REQUIRED: Please Enter a Message.')
      }
      return;
    }
    if (value.length > 0) {
      setErrMsg('');
    }

    console.log(formData.name, formData.email, formData.msg)
    const response = await fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...formData })
    })
    if(response.ok){
      setSuccessMsg('Your form was submitted successfully.')
      setFormData({ name: '', email: '', msg: '' })
    }else{
    setErrMsg('There was an error submitting your form')
  };
};

return (
  <section className='contact'>
    <h2 className='contact-title'>Contact Me</h2>

    {/* Testing submission handling through netlify */}
    {/* onBlur used for when user clicks out of field and leaves it empty, the errMsg will display */}
    <form className='form' onSubmit={handleSubmit} >

      {/* Name input field */}
      <label className='label' htmlFor="name">Name:</label>
      <input className='input' name="name" type="text" defaultValue={formData.name} placeholder='Enter Your Name' onBlur={validateForm} required />

      {/* Email input field */}
      <label className='label' htmlFor="email">Email:</label>
      <input className='input' name="email" type="email" defaultValue={formData.email} placeholder='Enter Your Email Address' onBlur={validateForm} required />

      {/* Message input field */}
      <label className='label' htmlFor="msg">Message:</label>
      <textarea className='input' name="msg" id='msg' type="text" defaultValue={formData.msg} placeholder='Enter A Message' onBlur={validateForm} required></textarea>

      <button id="submit" type='submit' onClick={handleSubmit} >Submit</button>

      {/* errMsg and successMsg */}
      <div className='successMsg'>{successMsg}</div>
      <div className='errMsg'>{errMsg}</div>
    </form>

    {/* Popup for contact icon to display direct contact info */}
    <Popup
      trigger={
        <img src='/social_imgs/contact_img.png' alt='contact logo' className='popover' />
      }
      position="top center"
    >
      <div className='popover-content'>
        <h4 className='contact-pop'>If you'd like to contact me directly:</h4>
        <p>Email: rvbouu@gmail.com</p>
        <p>Phone: please email if you would like to set up a phone call</p>
      </div>
    </Popup>
  </section>
)
}