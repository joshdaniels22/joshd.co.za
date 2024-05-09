import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
      <div className="App" style={{alignContent: 'center', margin: 'auto', width: '60%'}}>
          <h1 id="joshua-daniels">JOSHUA DANIELS</h1>
          <p>Cape Town, South Africa<br/>+27 79 109 7706<br/><a
              href="mailto:webmaster@example.com">joshuadaniels537@gmail.com</a></p>
          <h2 id="summary">Summary</h2>
          <p>I am a driven, creative, and analytically minded software developer with a strong desire to contribute
              meaningfully to projects that enhance people&#39;s lives. I’m naturally curious with a commitment to
              continuous learning. I always strive to see the world objectively, which helps me be reasonable and
              effective in my work.</p>
          <h2 id="experience">Experience</h2>
          <h3 id="full-stack-developer">Full Stack Developer</h3>
          <p>Allan Gray | Jan 2022 - Present</p>
          <ul>
              <li>Develop APIs using Scala and Golang, and frontend features using the Appian BPM platform.</li>
              <li>Contribute to the development of capturing functionality for various life products including
                  retirement annuities.
              </li>
              <li>Migrate Scala APIs to Golang, ensuring seamless integration and improved performance.</li>
              <li>Write acceptance and verification tests for code/feature additions using the Jest JavaScript framework
                  and Docker locally.
              </li>
              <li>Resolve production issues by collaborating with team members and users, utilizing Rancher, Kibana,
                  Grafana, and RabbitMQ for backend issues, and Appian&#39;s process modeling for frontend issues.
              </li>
              <li>Regularly work with Docker and Kubernetes within a microservices architecture.</li>
          </ul>
          <h2 id="education">Education</h2>
          <h3 id="bachelor-of-science-in-computer-science-and-mathematics">Bachelor of Science in Computer Science and
              Mathematics</h3>
          <p>University of Cape Town | Graduated December 2021</p>
          <p>Relevant coursework:</p>
          <ul>
              <li>Data Structures and Algorithms</li>
              <li>Object-Oriented Programming</li>
              <li>Programming Practices</li>
          </ul>
          <p>Final year project: Developed a topographical visualization tool to display biodiversity using colors and
              shapes to indicate proportions of different species based on data from North America.</p>
          <h2 id="skills">Skills</h2>
          <ul>
              <li>Programming Languages: Scala, Golang, Bash, Java (University), Python (University)</li>
              <li>Technologies/Frameworks: Appian, RabbitMQ, SQL, Docker, Kubernetes, Jest (JavaScript Testing)</li>
              <li>Tools: GitLab, Kibana, Grafana</li>
          </ul>

          <div>
              <h2>New Portfolio Website (Work in Progress)</h2>
              <a href="./future_website/maintenance_window.html">Link to new site</a>
          </div>
      </div>
  )
}

export default App
