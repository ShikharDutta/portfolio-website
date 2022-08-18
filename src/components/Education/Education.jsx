import React from 'react'
import { FaUniversity } from 'react-icons/fa'
import {GiBookshelf} from "react-icons/gi";

const Education = () => {
  return (
    <section id="education">
      <h2>Education</h2>
        <div className="about_content">
            <div className="about_cards">
                <article className="about_card">
                    <FaUniversity className="about_icon" />
                    <h5>Indian Institute of Technology (ISM), Dhanbad — Bachelor of Technology in Electronics and Communication Engineering</h5>
                    <small>2019 - 2023 CGPA – 7.85(Till 6th semester)</small>
                </article>
                <article className="about_card">
                    <GiBookshelf className="about_icon" />
                    <h5>12th - APRIL 2017 - APRIL 2018 - 90%</h5>
                </article>
                <article className="about_card">
                    <GiBookshelf className="about_icon" />
                    <h5>10th - APRIL 2015 - APRIL 2016 - 93.57%</h5>
                </article>
            </div>
        </div>    
    </section>
  )
}

export default Education