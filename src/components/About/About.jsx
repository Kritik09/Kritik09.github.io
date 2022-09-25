import React from 'react'
import './about.css'
export const About = () => {
  return (
      <section id="about">
        <div className="about__main">
          <div className="heading"><h1>About Me</h1></div>
          <article className="para">
            <p>HI! I am a final year undergrad at Graphic Era Hill University pursuing a Bachelor of Technology majoring in Computer Science and Engineering and an ex-SDE Intern at Samsung Research Institute Bangalore.
I am a passionate Competitive Programmer and love giving structure to my ideas using coding.
Currently, I am 5 star at CodeChef, specialist at Codeforces and Knight at Leetcode, with that I am also World Finalist at TCS Codevita and Grand Finalist at HackWithInfy.
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
              <h5>( 9.30 CGPA )</h5>
            </article>
            <article className="about__article intern">
              <h2 style={{textDecoration:"underline"}}>Internships</h2>
              <h4>Virtual Research Intern at Samsung Research Institute Bangalore</h4>
              <h5>(REMOTE)</h5>
              <h5>( June 2021 - December 2021 )</h5>
              <h4>Summer Intern at Samsung Research Institute Bangalore</h4>
              <h5>(REMOTE)</h5>
              <h5>( July 2022 - August 2022)</h5>
            </article>
          </div>
        </div>
      </section>
  )
}
