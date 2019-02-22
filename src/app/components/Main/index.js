import React from 'react';
import './index.scss';

function Main() {
  return (
    <main>
      <section className="Section">
        <div className="Section--left">
          <h3>Education</h3>
        </div>
        <div className="Section--right">
          <h3>Hogwarts School of Witchcraft and Wizardry</h3>
          <p>
            <span>Major: </span>
            Defense against the Dark Arts
          </p>
          <p>
            <span>Mindor: </span>
            Potions && Poison
          </p>
        </div>
      </section>
      <section className="Section">
        <div className="Section--left">
          <h3>Skills</h3>
        </div>
        <div className="Section--right">
          <div>
            <h3>Dark Magic</h3>
            <p>
              Squashy armchairs dirt on your nose brass scales crush the
              Sopophorous bean with flat side of silver dagger, releases.
            </p>
          </div>
          <div>
            <h3>Pollyjuice elixir mixing</h3>
            <p>
              Half-giant jinxes peg-leg gillywater broken glasses large black
              dog Great Hall.
            </p>
          </div>
        </div>
      </section>
      <section className="Section">
        <div className="Section--left">
          <h3>Experience</h3>
        </div>
        <div className="Section--right">
          <div>
            <div className="Section--right-job-title">
              <h3>Code Academy</h3>
              <span>Very Good Student, 2018.10 - present</span>
            </div>
            <ul>
              <li>HTML</li>
              <li>CSS/SCSS</li>
              <li>JavaScript</li>
              <li>React.js</li>
            </ul>
          </div>
          <div>
            <div className="Section--right-job-title">
              <h3>The School of Life</h3>
              <span>Human in Gneral, 1990.08 - present</span>
            </div>
            <ul>
              <li>Eating</li>
              <li>Breathing</li>
              <li>Listening</li>
              <li>Running from Responsibilities</li>
            </ul>
          </div>
        </div>
      </section>
      <section className="Section">
        <div className="Section--left">
          <h3>Hobies</h3>
        </div>
        <div className="Section--right">
          <p>
            Professional shower singer, Expert on politics(after a drink),
            Reading Comics, Pretending to be Batman
          </p>
        </div>
      </section>
      <section className="Section">
        <div className="Section--left">
          <h3>References</h3>
        </div>
        <div className="Section--right">
          <p>My dog can provide excelent references</p>
        </div>
      </section>
    </main>
  );
}

export default Main;
