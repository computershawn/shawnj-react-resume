'use strict'

// ALL MY DATAS
const experienceData = [
  {
    title: "Interaction Designer /__ CivicConnect /__ March 2017 – Present",
    details: "Responsive design of sites and web apps related to regional transportation and commerce. User interface designer for FreightWorks and Active Transportation Database (ATDB) sites for Southern California Association of Governments. Developed workflow and visual design of mobile app for counting pedestrians and cyclists. Ongoing support of Metropolitan Transportation Commission’s 511.org web app, including UI/UX design, image and HTML/CSS/JS editing, contributing with GitHub, and user acceptance testing.",
  },
  {
    title: "Data Visualization Designer /__ Pitch Interactive /__ Aug 2016 – Feb 2017",
    details: "Involved in all aspects of projects, from initial exploration to delivery of final graphics and high-fidelity wireframes. Rapid visual ideation using pen and paper, creative software, and code. Regularly interface with creative director and with clients, presenting multiple options and synthesizing feedback. Created conceptual designs and final infographic for Black Spectacles’ 2016 software requirements study. Responsive layout and image production for Facebook Insights More Than a Message website. Refined interface for Pitch Interactive’s Tilegrams web-based hexagonal tile mapping tool.",
  },
];

const educationData = [
  {
    title: "Art Center College of Design /__ Pasadena, CA /__ 2014",
    details: "Master of Fine Arts, Media Design Practices",
  },
  {
    title: "University of California /__ Los Angeles, CA /__ 2001",
    details: "2014 Bachelor of Science, Mechanical Engineering",
  },
];

const skillsData = [
  {
    category: "Design + Presentation",
    details: "Wireframing, Prototyping, Information Architecture, Layout, Iconography",
  },
  {
    category: "Creative Software",
    details: "Sketch, InVision, Adobe Creative Suite, After Effects, Framer",
  },
  {
    category: "Programming",
    details: "HTML, CSS, JavaScript, D3.js, ActionScript, Processing, Python, Arduino",
  }
];

// Define the main App Component
function App(props) {
  return (
    <main role="main">
      <Avi /><Hello />
      <hr/>
      <Experience theInfo={experienceData} />
      <hr/>
      <Education theInfo={educationData} />
      <hr/>
      <Skills theInfo={skillsData} />
  	</main>
  );
}

// Define an Avatar Component
function Avi(props) {
  return (
    <section>
      <img id="profile-pic" src="images/shawnj_selfie_sm.jpg" width="160" alt="shawn profile pic"/>
      <header role="banner">
        <h1>shawn.jackson</h1>
      </header>
    </section>
  );
}

// Define a Personal Info Component
function Hello() {
  return (
    <section role="region">
      <address>
          <p><i className="fas fa-map-marker-alt"></i> 1234 5th Street #999 | Los Angeles, CA 90001</p>
          <p>
              <a href="http://shawnj.es" target="_blank"><i className="fas fa-globe"></i> www.shawnj.es</a> |
              <a href="https://www.instagram.com/computershawn/" target="_blank"><i className="fab fa-instagram"></i>
                  computershawn</a><br/>
              <a href="mailto:heya@shawnj.es"><i className="far fa-envelope"></i> heya@shawnj.es</a> |
              <a href="tel:+310-123-4567"><i className="fas fa-phone"></i> 310.123.4567</a>
          </p>
      </address>
    </section>
  );
}

// Define an Experience Info Component
function Experience(props) {
  return (
    <section role="region" className="resume-section">
      <header>
          <h2 className="section-title">Professional Experience</h2>
      </header>
      <p><strong>{props.theInfo[0].title}</strong><br/>{props.theInfo[0].details}</p>
      <p><strong>{props.theInfo[1].title}</strong><br/>{props.theInfo[1].details}</p>
    </section>
  );
}

// Define an Education Info Component
function Education(props) {
  return (
    <section role="region" className="resume-section">
      <header>
          <h2 className="section-title">Education</h2>
      </header>
      <p><strong>{props.theInfo[0].title}</strong><br/>{props.theInfo[0].details}</p>
      <p><strong>{props.theInfo[1].title}</strong><br/>{props.theInfo[1].details}</p>
    </section>
  );
}

// Define a Skills Info Component
function Skills(props) {
  return (
    <section role="region" className="resume-section">
      <header>
          <h2 className="section-title">Skills</h2>
      </header>
      <p><strong>{props.theInfo[0].category}</strong> | {props.theInfo[0].details}</p>
      <p><strong>{props.theInfo[1].category}</strong> | {props.theInfo[1].details}</p>
      <p><strong>{props.theInfo[2].category}</strong> | {props.theInfo[2].details}</p>
    </section>
  );
}


// Nested elements inside the App
ReactDOM.render(
  <App />,
  document.querySelector('#application-root')
);
