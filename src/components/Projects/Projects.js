import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import ewallet from "../../Assets/Projects/ewallet.png";
import gopark from "../../Assets/Projects/gopark.png";
import teenshare from "../../Assets/Projects/teenshare.png";
import resume from "../../Assets/Projects/resume.png";
import pytorch from "../../Assets/Projects/pytorch.png";
import gmail from "../../Assets/Projects/gmail.png";
import discord from "../../Assets/Projects/discord.png";


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ewallet}
              isBlog={false}
              title="E-Wallet System"
              description="A secure E-Wallet system supporting USD, HKD, EUR and also Crypto in the form of BTC and ETH. Uses live exchange rates through APIs, and Stripe for payemnts. Back-end built with SQL, Python and Flask and front-end built with HTML/CSS."
              ghLink="https://github.com/soumyajit4419/Chatify"
              demoLink="https://chatify-49.web.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={gopark}
              isBlog={false}
              title="SmartCity Parking"
              description="A smart-city parking solution that guides users to the closest availible parking slot built on top of Google API, Python, and Flask with HTML/CSS/React Javascript front-end. Direct Integration with Google Maps and government systems. Deployed using Anaconda"
              demoLink="https://hello-gopark.github.io/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={teenshare}
              isBlog={false}
              title="LLM Consulting"
              description="A transformer-based LLM chatbot used as a mentoring service for teenagers and young adults. Developed after exetensive big data analysis, exploration. Built on top of PyPlot, Pandas, NTLK, Spacy, SKlearn and several ML models. Deployed on Google Cloud."
              demoLink="https://teensharehk.com/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={resume}
              isBlog={false}
              title="Automated Resume Screening"
              description="A CV/Resume screening solution that analyzes candidate's resume and provides detailed information to the recruiter with pass/fail. Built on top of ML models using SKlearn, NTLK and Spacy and on Neural Network models built using Tensorflow."
              ghLink = "https://colab.research.google.com/drive/1IBPop_c5sXhoht_S8lXLuEFgQO_4V9g3?usp=sharing"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pytorch}
              isBlog={false}
              title="Multi-modal NNs"
              description="Several Neural Network models built for classification of numerical and image-based inputs. Built using PyTorch and SKlearn on Juypter Notebooks. Ability to work with non-linear inputs and 2D images. Visualization through PyPlot."
              ghLink = "https://colab.research.google.com/drive/1mNY25WBpRChbdELrCtNtviZ866yTZvcX?usp=sharing"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={discord}
              isBlog={false}
              title="Discord Bot"
              description="All-purpose RPG Discord bot built using PyCord and Python. Built on top of MongoDB and several APIs. Includes moderation tools, currency system, leveling system and profanity-check. Deployed using Discord"
              ghLink = "https://github.com/AwwabienTG/Egg-Bot"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={gmail}
              isBlog={false}
              title="E-Mail Automation (Script)"
              description="E-Mail Automation script built on top on G-mail API and Selenium Chromium webdriver. Can be integrated into other applications. Built using Python and Selenium."
              ghLink = "https://colab.research.google.com/drive/1_bAblh1CNd9BVxzxITnKJhFkJNVVDyfi?usp=sharing"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
