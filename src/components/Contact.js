import React, { Component } from 'react'
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";
import firebase from './firebase.js'
import Swal from 'sweetalert2';



class Contact extends Component {
constructor(){
    super()
    this.state = {
        message: {
            userName:'',
            userEmail:'',
            userMessage:'',
        }
    }
}
handleChange = (e) => {

    const newObject = Object.assign(this.state.message)

    newObject[e.target.name] = e.target.value

    this.setState({
        message: newObject
    })
}
handleSubmit = (e) => {
        e.preventDefault();
        const dbRef = firebase.database().ref()
        dbRef.push(this.state.message)
        this.setState({
            message: {
                userName:'',
                userEmail:'',
                userMessage:'',

            }
        })
        Swal.fire({
            title: 'Thank you!',
            type: 'success',
        })

    }


  render() {
    return (
      <section className="wrapper">
    <div className="form" id="maincontent">
        <ScrollAnimation animateIn='fadeInRight'>
        <div className="header">
            <h2>contact me</h2>
        </div>
        </ScrollAnimation>
        <ScrollAnimation animateIn='fadeInRight'>
        <form  method="submit" name="contactForm" onSubmit={this.handleSubmit}>
        <div className="form-left">
            <fieldset>
            <input autoFocus onChange={this.handleChange} value={this.state.message.userName} id="name" type="text" name="userName" required />
            <label htmlFor="name">name</label>
            <div className="after"></div>
            <i className="fa fa-lg fa-fw fa-user"></i>
            </fieldset>
            <fieldset>
                <input onChange={this.handleChange} value={this.state.message.userEmail} id="email" type="text" name="userEmail" required />
                <label htmlFor="userEmail">email</label>
                <div className="after"></div>
                <i className="fa fa-lg fa-fw fa-envelope"></i>
            </fieldset>
        </div>
        <div className="form-right">
            <fieldset>
                <div className="input-textarea">
                <textarea onChange={this.handleChange} value={this.state.message.userMessage} name="userMessage" id="feedback" rows="10" placeholder="Enter your message"></textarea>
                </div>
            </fieldset>
            <button id="submit-button" className="submit-button" type="submit">Submit</button>
        </div>
        </form>
        </ScrollAnimation>
    </div>
</section>
    )
  }
}
export default Contact;