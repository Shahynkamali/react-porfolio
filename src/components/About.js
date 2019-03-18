import React from 'react'



const About = () => {
return (
<section className="wrapper">
    <div className="about-me">
        <div className="header">
            <h2>about me</h2>
        </div>
        <div className="stories">
            <div className="my-story">
                <div className="my-story-header">
                    <h3>my story!</h3>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem, ea. Cumque consequatur dicta perspiciatis quam saepe? Tempore nihil minus atque perferendis mollitia vel. Repudiandae maxime, saepe error reiciendis harum voluptatum, necessitatibus optio accusantium ex corporis consectetur, neque quia id illo!</p> 
                </div>
                <div className="my-story-buttons">
                    <button>Download CV</button>
                    <button>Hire me!</button>
                </div>
            </div>
            <div className="my-philosophy">
                <div className="my-philosophy-header">
                    <h3>my philosophy</h3>

                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio, id ullam! Consectetur illum earum optio numquam sapiente, ullam voluptate eveniet iste minus, sed officiis aspernatur perspiciatis laudantium aperiam suscipit temporibus! Optio nobis minima aliquid libero neque modi explicabo doloremque id.</p>
                </div>
            </div>
        </div>
    </div>
</section>
)
}
export default About