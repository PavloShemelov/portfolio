import React, { useEffect } from "react";
import { useParams } from 'react-router-dom';
import js from '../img/icons/js.svg';
import react from '../img/icons/react.svg';
import html from '../img/icons/html.svg';
import css from '../img/icons/css.svg';
import "./about.css";
import sql from '../img/icons/sql.svg';
import csharp from '../img/icons/csharp.svg';
import photo from '../img/icons/person.webp';

const About = () => {
  const { id } = useParams();
  let local = localStorage.getItem('darkMode');

  useEffect(() => {
    local = localStorage.getItem('darkMode');
    console.log(local);
  }, []);

  return (
    <main className="section about-main">

      <div className="about-me ">
      <h1 className="about">About</h1>
        <img src={photo} className="box-s" alt="person-avatar" />
        <p>My name is <label className="Pvl">Pavlo</label>.</p>
        <p>I am a full stack developer.</p>
        <p>I have experience as a full stack developer in various projects.</p>
        <p>I have the knowledge and skills necessary to develop web applications from scratch.</p>
      </div>

      <div className="container about-skills">     

        <div className="information">
          <ul>
            <li>
              <p className="my-skills">My skills:</p>
              <ul className="my-skills-ul">
                <li><img src={react} style={{ height: '25px', marginRight: '5px' }} />React</li>
                <li><img src={js} style={{ height: '25px', marginRight: '5px' }} />JavaScript</li>
                <li><img src={html} style={{ height: '25px', marginRight: '5px' }} />HTML</li>
                <li><img src={css} style={{ height: '25px', marginRight: '5px' }} />CSS</li>
                <li><img src={sql} style={{ height: '25px', marginRight: '5px' }} />SQL</li>
                <li><img src={csharp} style={{ height: '25px', marginRight: '5px' }} />C#</li>
              </ul>
            </li>
            <li className="about-project">
              <p> <label className="Pvl">QA Engineer</label></p>
              <div className="about-project-info" >
                <p>I am an experienced QA engineer with many years of experience in software testing.</p>
                <p>My skills cover the entire testing cycle, from defining requirements to creating and executing test scenarios.</p>
                <p>I have deep knowledge in manual and automated testing.</p>
              </div>
            </li>
          </ul>
        </div>
      </div>

    

    </main>
  );
};

export default About;
