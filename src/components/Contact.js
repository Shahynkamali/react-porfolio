import React from 'react'

const Contact = () => {
  return (
<section className="wrapper">
    <div className="form">
        <div className="form-header">
            <h2>contact me</h2>
        </div>
        <form action="" method="POST" name="contactForm">
            <div className="input-name">
                <label htmlFor="user-name">
                    <i className="fa fa-lg fa-fw fa-user"></i>
                </label>
                <input name="name" id="user-name" type="text" placeholder="Enter your name"/>
            </div>
            <div className="input-email">
                <label htmlFor="user-emaill">
                    <i className="fa fa-lg fa-fw fa-envelope"></i>
                </label>
                <input name="email" id="user-email" type="email" placeholder="Enter your email"/>
            </div>
            <div className="input-textarea">
                <textarea name="feedback" id="userMessage" rows="10" placeholder="Enter your message"></textarea>
            </div>
            <input id="submit-button" className="submit-button" type="submit" value="Send"/>
        </form>
    </div>
</section>
    
  )
}

export default Contact
