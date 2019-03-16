import React from 'react'


const Contact = () => {
  return (
<section className="wrapper">
    <div className="form">
        <div className="form-header">
            <h2>contact me</h2>
        </div>
        <form action="" method="POST" name="contactForm">
        <div className="form-left">
            <fieldset>
            <input id="first" type="text" name="first" required/>
            <label htmlFor="first">name</label>
            <div className="after"></div>
            <i className="fa fa-lg fa-fw fa-user"></i>
            </fieldset>
            <fieldset>
                <input id="last" type="text" name="last" required/>
                <label htmlFor="last">email</label>
                <div className="after"></div>
                <i className="fa fa-lg fa-fw fa-envelope"></i>
            </fieldset>
        </div>
        <div className="form-right">
            <fieldset>
                <div className="input-textarea">
                <textarea name="feedback" id="userMessage" rows="10" placeholder="Enter your message"></textarea>
                <button id="submit-button" className="submit-button" type="submit">Submit</button>
                </div>
            </fieldset>
        </div>
        </form>
    </div>
</section>
    
     
  )
}

export default Contact
