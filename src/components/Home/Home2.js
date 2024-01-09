import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Tilt from "react-parallax-tilt";
import {
  AiFillInstagram,
  AiFillMail, 
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import des2 from "../../Assets/des2.jpg";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "3.0em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <br />
            <br />
            <p class  Name="home-about-body">
              <h1 style={{ fontSize: "1.2em" }}>
              
              😁 My name is Awwab Hamam and I like to build
              <i>
                <b className="purple"> Start-Ups </b>
              </i>
              and work on new 
              <i>
                <b className="purple"> Projects </b>
              </i>
              <br />
              <br />
              📈 I am a leading competitor in several international
              <i>
                <b className="purple"> Hackathons </b>
              </i>
              with 4+ different projects!
              <br />
              <br />
              💳 I am on the leading frontier of 
              <i>
                <b className="purple"> Fintech 4.0, AI/ML and Blockchain </b>
              </i>
              <br />
              <br />
              <br />
              <br />
              💼 I have worked with
              <i>
                <b className="purple"> four </b>
              </i>
              start-ups and 
              <i>
                <b className="purple"> two </b>
              </i>
              corporations as an employee with
              <i>
                <b className="purple"> excellent </b>
              </i>
              testimonials from Every. Single. One
              <br />
              <br />
              <br />
              <br />
              <i>
                <b className="purple"> AWWAB &ensp;</b>
              </i>
              WILL&ensp; MAKE&ensp;
              <i>
                <b className="purple"> YOUR &ensp;</b>
              </i>
              IDEA&ensp; A&ensp;
              <i>
                <b className="purple"> REALITY </b>
              </i>
              <br />
              <br />
              <br />
              </h1>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={des2} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>DON'T MISS OUT</h1>
            <p>
              Let us <span className="purple">work </span>together
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/awwabh"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/awwabientg"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="mailto:awwab.hamam@connect.polyu.hk"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillMail />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
