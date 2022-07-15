import React from 'react'
import './projects.css'
import sortingImg from '../../assets/sorting.jpg'
import graph from '../../assets/graph.jpg'
import extension from '../../assets/extension.jpg'
import portfolioImg from '../../assets/Portfolio.jpg'
export const Projects = () => {
  const data=[
    {
      name:"Personal Portfolio Website",
      id:"portfolio",
      image:portfolioImg,
      about:"Completely responsive portfolio website using React JS for personal use",
      github:"https://github.com/Kritik09/Kritik09.github.io",
      demo:"https://kritik09.github.io"
    },
    {
      name:"Sorting Algorithm Visualizer",
      id:"sorting",
      image:sortingImg,
      about:"Sorting Algorithm Visualizer using HTML CSS and JS is a web based application that simulate the most use 7 sorting algorithm with the feature to resize the array and change the speed of the simulation to get a GUI based understanding of the sorting algorithms.",
      github:"https://github.com/Kritik09/Visualizer",
      demo:"https://kritik09.github.io/Visualizer/"
    },
    {
      name:"Codeforces Browser Extension",
      id:"extension",
      image:extension,
      about:"This is Codeforces Browser extension/website that helps user to track their unsolved problem and get direct links to solve those problems",
      github:"https://github.com/Kritik09/Codeforces-Problem-Picker/",
      demo:"https://kritik09.github.io/Codeforces-Problem-Picker/"
    },
    {
      name:"Graph Traversal Visualizer",
      id:"graph",
      image:graph,
      about:"This is a web based application to visualize graph algorithms in the form of grid of nodes where currently have BFS and DFS compatibility and can trace a path between source to destination of somewhat what a grap traversal would do",
      github:"https://github.com/Kritik09/GraphVisualizer",
      demo:"https://kritik09.github.io/GraphVisualizer/"
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
