import React from 'react'
import './achievement.css'
import {GiRibbonMedal} from 'react-icons/gi'
export const Achievements = () => {
  return (
      <section id="achievements">
        <div className="ach__main__cont">
          <div className="heading">
            <h1>ACHIEVEMENTS</h1>
          </div>
          <div className="ach__para">
            <p>If you focus on success, you'll have stress. But if you pursue excellence success will be guaranteed. ~ Deepak Chopra</p>
          </div>
          <div className="ach__details">
            <article className="ach__article">
              <h2>Academic Achievements</h2>
              <h4><GiRibbonMedal className='ach__ribbon'/>4 star coder at Codechef <a href='https://www.codechef.com/users/kritik_09' target='_blank'>@kritik_09</a></h4>
              <h4><GiRibbonMedal className='ach__ribbon'/>Specialist at Codeforces <a href='https://codeforces.com/profile/Kritik09' target='_blank'>@kritik09</a></h4>
              <h4><GiRibbonMedal className='ach__ribbon'/>Grand Finalist at HackWithInfy</h4>
              <h4><GiRibbonMedal className='ach__ribbon'/>Grand Finalist at TCS Codevita (Global Rank 19)</h4>
            </article>
            <article className="ach__article">
              <h2>Co-Curricular Achievements</h2>
              <h4><GiRibbonMedal className='ach__ribbon'/>Head Boy at High School</h4>
              <h4><GiRibbonMedal className='ach__ribbon'/>School Captain at Intermediate</h4>
              <h4><GiRibbonMedal className='ach__ribbon'/>President Of College Coding Club</h4>
              <h4><GiRibbonMedal className='ach__ribbon'/>Co-ordinator of Ducat's Competitive Programming Workshop</h4>
              <h4><GiRibbonMedal className='ach__ribbon'/>Tester and Problem Setter for We-Code</h4>
              <h4><GiRibbonMedal className='ach__ribbon'/>Guest Speaker at "Challenges of Coding"</h4>
            </article>
          </div>
        </div>
      </section>
  )
}
