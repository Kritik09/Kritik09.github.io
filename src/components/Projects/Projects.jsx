import React from 'react'
import './projects.css'
import sortingImg from '../../assets/sorting.jpg'
import snakeImg from '../../assets/snake.jpg'
import clockImg from '../../assets/clock.jpg'
import portfolioImg from '../../assets/Portfolio.jpg'
export const Projects = () => {
  const data=[
    {
      name:"Personal Portfolio Website",
      id:"portfolio",
      image:portfolioImg,
      about:"Completely responsive portfolio website using React JS",
      github:"https://github.com/Kritik09/Kritik09.github.io",
      demo:"https://kritik09.github.io"
    },
    {
      name:"Sorting Algorithm Visualizer",
      id:"sorting",
      image:sortingImg,
      about:"This app visualizes various sorting algorithm using React JS",
      github:"https://github.com/Kritik09/ALGORITHM-VISUALIZER",
      demo:"https://kritik09.github.io/ALGORITHM-VISUALIZER/"
    },
    {
      name:"Clock Using JS",
      id:"clock",
      image:clockImg,
      about:"This is an implementation of Date Time Module of Javascript into a UI form",
      github:"",
      demo:""
    },
    {
      name:"Snake Game Using C",
      id:"snake",
      image:snakeImg,
      about:"This is a 8 bit snake game made using basic C programming",
      github:"https://github.com/Kritik09/Snake-Game",
      demo:""
    }
  ];
  function clicked(name){
    let main=document.getElementById('projects');
    let nav=document.getElementById('navbar');
    let about=document.getElementById('about');
    let ach=document.getElementById('achievements');
    let skill=document.getElementById('skills');
    let contact=document.getElementById('contact');
    let home=document.getElementById('home');
    let footer=document.getElementById('footer');
    let popup=document.getElementById(`${name}`);
    main.classList.toggle('blur');
    home.classList.toggle('blur');
    about.classList.toggle('blur');
    ach.classList.toggle('blur');
    skill.classList.toggle('blur');
    footer.classList.toggle('blur');
    contact.classList.toggle('blur');
    nav.classList.toggle('blur');
    popup.classList.toggle('active');
  }
  return (
      <>
      {data.map((val,ind)=>(
        <div className="pop__up" key={ind} id={`${val.id}`}>
          <h4>{val.name}</h4>
          <p style={{color:'var(--color-white)'}}>{val.about}</p>
          <div className="projects__link">
            <a href={val.demo} target='_blank' className={val.demo===""?'butn__link inactive':'butn__link active'}>View Project</a>
            <a href={val.github} target='_blank' className={val.github===""?'butn__link inactive':'butn__link active'}>Github</a>
          </div>
          <div className="butn close" onClick={()=>clicked(`${val.id}`)}>Close</div>
        </div>
      ))}
      <section id="projects">
          <div className="projects__main__container">
            <h1>My Projects</h1>
            <p>
            We all have our strengths that assist us in completing our tasks with satisfaction and excellence. Apply your strengths to your SMART (smart, measurable, attainable, realistic, timely) goals and get ready to grow!
            </p>
            <div className="projects__container">
            {data.map((val,ind)=>(
              <div className="projects__details" key={ind}>
                <div className="projects__name"><h4>{val.name}</h4></div>
                <div className="projects__photo">
                  <img src={val.image} alt={val.name}/>
                </div>
                <div className="btn" onClick={()=>clicked(`${val.id}`)}>Info</div>
              </div>
            ))}
            </div>
          </div>
      </section>
      </>
  )
}
