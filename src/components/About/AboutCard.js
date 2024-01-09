import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight} from "react-icons/im";
import { GoArrowRight } from "react-icons/go";


function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Awwab Hamam </span>
            from <span className="purple"> Cairo, Egypt.</span>
            <br />
            <br />
            <li className="about-activity">
              <ImPointRight /> Fintech Enthusiast and Entrepreneur 
            </li>
            <br />
            <li className="about-activity">
              <ImPointRight /> BEng (Hons) in Electronic Engineering
            </li>
            <li className="about-activity">
                &emsp;<GoArrowRight /> Secondary Major in Artificial Intelligence
            </li>
            <li className="about-activity">
                &emsp;<GoArrowRight /> Minor in Finance
            </li>
            <br />
            <li className="about-activity">
              <ImPointRight /> Full-stack developer and Co-founder at: 
            </li>
            <li className="about-activity">
                &emsp;<GoArrowRight /> <a href="https://hello-gopark.github.io/">GoPark</a>
            </li>
            <li className="about-activity">
                &emsp;<GoArrowRight /> GoHealth
            </li>
            <br />
            I am an experienced Python and C++ Developer with 7+ years of experience!
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Testing the newest AI models
            </li>
            <li className="about-activity">
              <ImPointRight /> Winning International Hackathons
            </li>
            <li className="about-activity">
              <ImPointRight /> Practicing Judo
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Leading The AI and Fintech 4.0 Revolution"{" "} - Awwab
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
