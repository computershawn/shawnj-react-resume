'use strict'




// Define the main App Component
function App(props) {
  //console.log(props.theInfo);
  return (
    <main role="main">
      <Avi /><Hello />
      <hr/>
      <Experience theInfo={props.theInfo.experienceData} />
      <hr/>
      <Education theInfo={props.theInfo.educationData} />
      <hr/>
      <Skills theInfo={props.theInfo.skillsData} />
  	</main>
  );
}

// Define an Avatar Component
function Avi() {
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
  <App theInfo={allData}/>,
  document.querySelector('#application-root')
);
