import { Container } from "./styles";
import AdityaBajaj from "../../assets/profile-pic.png";

import java from "../../assets/icons8-java.svg"
import shopify from "../../assets/shopify.svg";
import htmlIcon from "../../assets/html-icon.svg";
import cssIcon from "../../assets/css-icon.svg";
import jsIcon from "../../assets/js-icon.svg";
import nodeIcon from "../../assets/node-icon.svg";
import reactIcon from "../../assets/react-icon.svg";
import cIcon from "../../assets/c.svg";
import andrstuIcon from "../../assets/leetcode.svg";
import dartIcon from "../../assets/dart.svg";
import flutterIcon from "../../assets/flutter.svg";
import excelIcon from "../../assets/excel-4.svg";
import mongoIcon from "../../assets/mongodb-icon-1.svg";
import pythonIcon from "../../assets/python-5.svg";
import ScrollAnimation from "react-animate-on-scroll";


export function About() {
  return (
    <Container id="about">
      <div className="about-text">
        <ScrollAnimation animateIn="fadeInLeft">
          <h2>About me</h2>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.1 * 1000}>
          <p>
          Hello there! I'm a passionate and dedicated software engineer currently in my final year of B.Tech in Computer Science Engineering at VIT Vellore. My journey in the world of programming has been both challenging and exhilarating, and I thrive on opportunities to expand my knowledge and skills. With expertise in Java, Flutter, Python, and backend development, I have worked on various projects, including AI-driven applications, mobile development, and full-stack solutions. I'm always eager to learn new technologies and explore innovative problem-solving approaches.
          </p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.2 * 1000} style={{ marginTop: "2rem", marginBottom: "2rem" }}>
          <p> I have a strong foundation in backend systems, problem-solving, and DSA, which helps me understand how things work under the hood. I've led hackathons, conducted workshops, and actively contribute to the Apple Developers Club and IEEE CS Club at VIT. My internships at Phool.co and DocPlus gave me hands-on experience in both software development and business operations. Always eager to learn and explore new technologies, I strive to build impactful solutions while continuously growing as an engineer.
          </p>
        </ScrollAnimation>
        
        
        <ScrollAnimation animateIn="fadeInLeft" delay={0.3 * 1000}>
          <p>I'm not just a coder; I'm a problem solver, a creative thinker, and someone who is committed to pushing the boundaries of what technology can achieve. I'm excited about the prospect of taking on new challenges, learning new skills, and making a meaningful impact in the world of software development.</p>
        </ScrollAnimation>

        <ScrollAnimation animateIn="fadeInLeft" delay={0.4 * 1000}>
          <h3>Here are my main skills:</h3>
        </ScrollAnimation>
        <div className="hard-skills">

          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.10 * 1000}>
              <img src={java} alt="Wordpress" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.12 * 1000}>
              <img src={shopify} alt="shopify" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.13 * 1000}>
              <img src={reactIcon} alt="React" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.14 * 1000}>
              <img src={pythonIcon} alt="Typescript" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.15 * 1000}>
              <img src={cIcon} alt="Vue" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.15 * 1000}>
              <img src={flutterIcon} alt="Vue" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.15 * 1000}>
              <img src={excelIcon} alt="Vue" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.15 * 1000}>
              <img src={andrstuIcon} alt="Vue" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.16 * 1000}>
              <img src={nodeIcon} alt="Node" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.17 * 1000}>
              <img src={htmlIcon} alt="Html" />
            </ScrollAnimation>
          </div>

          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.18 * 1000}>
              <img src={cssIcon} alt="Css" />
            </ScrollAnimation>
          </div>

          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.19 * 1000}>
              <img src={dartIcon} alt="bootstrap" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.15 * 1000}>
              <img src={mongoIcon} alt="Vue" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.19 * 1000}>
              <img src={jsIcon} alt="JavaScript" />
            </ScrollAnimation>
          </div>
        </div>
      </div>
      {/* <div className="about-image">
        <ScrollAnimation animateIn="fadeInRight" delay={0.20 * 1000}>
          <img src={AdityaBajaj} alt="Aditya Bajaj" />
        </ScrollAnimation>
      </div> */}
    </Container>
  )
}
