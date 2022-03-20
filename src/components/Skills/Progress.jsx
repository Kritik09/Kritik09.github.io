import React from 'react'
import './Progress.css'
export const Progress = (props) => {
  return(
      <div className="progress__container">
          <div className="progress__name">
              {props.skillName}
              <h3>{props.wid}%</h3>
          </div>
          <div className="progress__bar">
              <div className="current__progress" style={{width:`${props.wid}%`}}>
              </div>
          </div>
      </div>
  )
}
