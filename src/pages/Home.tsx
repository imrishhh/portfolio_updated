import { useEffect } from "react";
import Card from "../components/Card";
import Navbar from "../components/Navbar";
import "./Home.css";
import Contact from "../components/Contact";
import Button from "../components/Button";

function Home() {
  const navItems: Record<string, string> = {
    resume: "/resume.pdf"
  };

  useEffect(() => {
    document.title = "Rishab Karki - Home";
  }, []);

  return (
    <div className="home-container">
      <div>
        <Navbar navItems={navItems}>
          <a href="/">imrishhh</a>
        </Navbar>
      </div>
      <div className="home-card-container" style={{ paddingTop: "80px" }}>
        <Card>
          <div className="home-card-content">
            <h2>know bout me</h2>
            <p>
              hey there! i'm <span className="home-card-content-name">rishab karki</span> — an undergraduate computer science student passionate
              about learning and building projects. I have a strong interest in software engineering, web development, backend system,
              cybersecurity and artificial intelligence.
              <br />

              <h3>what am i even doing?</h3>

              <strong className="home-card-content-answer quote">
                understanding software engineering, learning new technologies and building cool projects just to learn more.
              </strong>
              <br />
            </p>

            <p>i enjoy experimenting across</p>
            <ul>
              <li>backend system</li>
              <li>cybersecurity</li>
              <li>artificial intelligence</li>
              <li>devops</li>
              <li>computer graphics</li>
            </ul>

            <p>
              i thrive on exploring new tools, sharpening my skills and finding better ways to write clean,
              effective code.
            </p>

            <h3>languages that i know</h3>
            <ul>
              <li>go</li>
              <li>typescript</li>
              <li>python</li>
              <li>c/c++</li>
            </ul>
            <p>              <Button onClick={() => { window.open('mailto:rishabkarki78@gmail.com', "_blank") }}>
              contact me
            </Button>
              <br />
              <h3>socials</h3>
              <Contact />
            </p>
          </div>
        </Card>
      </div>
    </div>
  );
}

export default Home;
