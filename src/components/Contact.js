import React, { Component } from 'react'
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";


 class Contact extends Component {

    state ={
        name:'',
        email:'',
        message:'',
    }

  render() {
    return (
      <section className="wrapper">
    <div className="form">
        <ScrollAnimation animateIn='fadeInLeft'>
        <div className="header">
            <h2>contact me</h2>
        </div>
        </ScrollAnimation>
        <ScrollAnimation animateIn='fadeInRight'>
        <form action="" method="POST" name="contactForm">
        <div className="form-left">
            <fieldset>
            <input id="name" type="text" name="name" required/>
            <label htmlFor="name">name</label>
            <div className="after"></div>
            <i className="fa fa-lg fa-fw fa-user"></i>
            </fieldset>
            <fieldset>
                <input id="email" type="text" name="email" required/>
                <label htmlFor="email">email</label>
                <div className="after"></div>
                <i className="fa fa-lg fa-fw fa-envelope"></i>
            </fieldset>
        </div>
        <div className="form-right">
            <fieldset>
                <div className="input-textarea">
                <label htmlFor="feedback">feedback</label>
                <textarea name="feedback" id="feedback" rows="10" placeholder="Enter your message"></textarea>
                <button id="submit-button" className="submit-button" type="submit">Submit</button>
                </div>
            </fieldset>
        </div>
        </form>
        </ScrollAnimation>
    </div>
</section>
    )
  }
}
export default Contact;