import React from 'react'
import './about.css'
export const About = () => {
  return (
      <section id="about">
        <div className="about__main">
          <div className="heading"><h1>About Me</h1></div>
          <article className="para">
            <p>Hi! My name is Kritik Manral and I am currently pursuing my Btech in Computer Science and Engineering from Graphic Era Hill Univeristy Bhimtal (2019-2023)
            </p>
          </article>
          <div className="about__details">
            <article className="about__article acad">
              <h2 style={{textDecoration:"underline"}}>Academics</h2>
              <h4>High School</h4>
              <h5>( 95% )</h5>
              <h4>Intermediate</h4>
              <h5>( 90.2% )</h5>
              <h4>B-Tech</h4>
              <h5>( 9.31 CGPA )</h5>
            </article>
            <article className="about__article intern">
              <h2 style={{textDecoration:"underline"}}>Internships</h2>
              <h4>Virtual Research Intern at SRIB</h4>
              <h5>( June 2021 - December 2021 )</h5>
              <h4>Incoming Intern at SRIB</h4>
            </article>
          </div>
        </div>
      </section>
  )
}
