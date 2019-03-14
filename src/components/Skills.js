import React from 'react'

const Skills = () =>{
  return (
      <React.Fragment>
<section className="wrapper">
    <div className="my-skills">
        <div className="my-skills-header">
            <h2>my skills</h2>
            <p>a collection of lanuages, frameworks and libraries i have learned over the year</p>
        </div>
        <div className="skill-gallery">
            <div className="skills-row">
                <figure>
                    <i className="fab fa-html5"></i>
                    <figcaption>
                        <span>HTML</span>
                    </figcaption>
                </figure>
                <figure>
                    <i className="fab fa-sass"></i>
                    <figcaption>
                        <span>CSS/SASS</span>
                    </figcaption>
                </figure>
                <figure>
                    <i className="fab fa-js-square"></i>
                    <figcaption>
                        <span>JavaScript</span>
                    </figcaption>
                </figure>
            </div>
            <div className="skills-row">
                <figure>
                    <i className="fas fa-dollar-sign"></i>
                    <figcaption>
                        <span>Jquery</span>
                    </figcaption>
                </figure>
                <figure>
                    <i className="fab fa-react"></i>
                    <figcaption>
                        <span>React</span>
                    </figcaption>
                </figure>
                <figure>
                    <i className="fas fa-fire"></i>
                    <figcaption>
                        <span>Firebase</span>
                    </figcaption>
                </figure>
            </div>
        </div>
    </div>
</section>
<section className="wrapper">
    <div className="extra-skills">
        <div className="extra-skills-header">
            <h2>other importants skills</h2>
        </div>
        <div className="extra-skills-row">
            <figure>
                <i className="fal fa-tablet-alt"></i>
                <figcaption>
                    <span>responsive design</span>
                </figcaption>
            </figure>
            <figure>
                <i className="fab fa-accessible-icon"></i>
                <figcaption>
                    <span>accesibility</span>
                </figcaption>
            </figure>
            <figure>
                <i className="fab fa-github"></i>
                <figcaption>
                    <span>github</span>
                </figcaption>
            </figure>
            <figure>
                <i className="fas fa-dice-d6"></i>
                <figcaption>
                    <span>webpack</span>
                </figcaption>
            </figure>
        </div>
    </div>
</section>
</React.Fragment>
  )
}

export default Skills;
