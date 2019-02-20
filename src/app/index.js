import React from 'react';
import { FaGithubAlt, FaLinkedinIn } from 'react-icons/fa';

import './index.scss';

function App() {
  return (
    <React.Fragment>
      <div className="App">
        <header className="Header">
          <h1>John Snow</h1>
          <hr />
          <p className="Header--contact">Phone: +37063339991</p>
          <p className="Header--contact">
            Email:{' '}
            <a
              href="mailto:John@Snow.hbo"
              target="_blank"
              rel="noopener noreferrer"
            >
              John@Snow.hbo
            </a>
          </p>
          <p className="Header--summary">
            Wafer apple pie cheesecake tootsie roll sweet roll jelly-o liquorice
            jujubes. Dessert carrot cake danish lollipop. Oat cake tart chupa
            chups pie toffee donut. Liquorice brownie lollipop bonbon carrot
            cake candy canes.
          </p>
          <img
            className="Header--profile-picture"
            alt="This is me"
            src="https://media.licdn.com/dms/image/C4D03AQE4FlH9z1QruA/profile-displayphoto-shrink_200_200/0?e=1554336000&v=beta&t=gLOCgXaXN7ynK05-jwSotpEs1Qnz0giDsbGa4hT5Ms0"
          />
        </header>
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
                  Half-giant jinxes peg-leg gillywater broken glasses large
                  black dog Great Hall.
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
      </div>
      <footer className="Footer">
        <FaGithubAlt />
        <FaLinkedinIn />
      </footer>
    </React.Fragment>
  );
}

export default App;
