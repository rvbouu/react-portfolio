// imports
import { useState, useEffect } from 'react';
import Popup from 'reactjs-popup'; // popup library for contact icon
import './Contact.css';

// exports
export default function Contact() {
  // allows form to be manipulated
  const [formData, setFormData] = useState({ name: '', email: '', msg: '' })

  // allows errMsg to get rendered
  const [errMsg, setErrMsg] = useState('');

  // allows errMsg to get rendered
  const [successMsg, setSuccessMsg] = useState('');

  // checks form inputs: if form field is left empty, displays an errMsg to the user
  const [errors, setErrors] = useState({})
  const validate = (formData) => {
    let formErrors = {};
    if (!formData.name) {
      formErrors.name = 'Name required'
    }
    if (!formData.email) {
      formErrors.email = 'Email required';
    }

    if (formData.email) {
      const validEmail = /^([a-z0-9_.-]+)@([\da-z.-]+).([a-z.]{2,6})$/;
      console.log(!validEmail.test(formData.email))
      if (!validEmail.test(formData.email)) {
        formErrors.email = "Valid email required"
      }
    }

    if (!formData.msg) {
      formErrors.msg = 'Message required'
      setErrMsg('REQUIRED: Please Enter a Message.')
    }

    return formErrors;
  }

  const validateForm = (e) => {
    console.log(e);
    const {name, value} = e.target;
    console.log(name, value);
    setFormData({ ...formData, [name]: value });

    if (name === 'name') {
      if (value === '') {
        setFormData({ ...formData, [name]: '' });
        setSuccessMsg('');
        setErrMsg('REQUIRED: Please Enter a Name.');
      }
    }

    if (name === 'email') {
      if (value === '') {
        setFormData({ ...formData, [name]: '' });
        setSuccessMsg('');
        return setErrMsg('REQUIRED: Please Enter an Email Address.');
      }

      // checks for a valid email
      const validEmail = /^([a-z0-9_.-]+)@([\da-z.-]+).([a-z.]{2,6})$/;
      console.log(!validEmail.test(value))
      if (!validEmail.test(value)) {
        setSuccessMsg('')
        return setErrMsg('INVALID: Please Enter a Valid Email Address.')
      } else {
        setSuccessMsg('')
        setErrMsg('')
      }
    }

    if (name === 'msg') {
      if (value === '') {
        setFormData({ ...formData, [name]: '' });
        setSuccessMsg('')
        setErrMsg('REQUIRED: Please Enter a Message.')
      }
    }
    if (value.length > 0) {
      setSuccessMsg('')
      setErrMsg('');
    }
  }


  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = e => {
    e.preventDefault();
    setErrors(validate(formData));
    setIsSubmitted(true);
    e.target.reset();
  }

  // needed function for Netlify form submission
  const encode = (data) => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
  }

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitted) {
      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({ "form-name": "contact", ...formData })
      })
        .then(() => setSuccessMsg('Your form was submitted successfully.'))
        .then(() => setIsSubmitted(false))
        .then(() => setFormData({ name: "", email: "", msg: "" }))
        .catch(error => {
          setErrMsg('There was an error submitting your form.')
          console.log(error)
        })
    }
  }, [errors, formData, isSubmitted])


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

        <button id="submit" type='submit' >Submit</button>

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