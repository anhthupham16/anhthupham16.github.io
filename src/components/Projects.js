import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/project-img4.png";
import projImg5 from "../assets/img/project-img5.png";
import projImg6 from "../assets/img/project-img6.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Web Technology",
      description: "E-commercial Web",
      imgUrl: projImg1,
    },
    {
      title: "Mobile Application",
      description: "Note Taking Application",
      imgUrl: projImg2,
    },
    {
      title: "Software Architecture",
      description: "TicTacToe 2 Player",
      imgUrl: projImg3,
    },
    {
      title: "Agil Project Development",
      description: "Game: Shadow Duel",
      imgUrl: projImg4,
    },
    {
      title: "Software Engineering",
      description: "Game: Garbage Catcher",
      imgUrl: projImg5,
    },
    {
      title: "IT Security",
      description: "CI/CD Pipeline for Web Application",
      imgUrl: projImg6,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>Individual and group projects I have participated in during my studies</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <Col key={index} xs={12} sm={6} md={4} className="mb-4 d-flex justify-content-center">
                                <ProjectCard
                                key={index}
                                {...project}
                                />
                              </Col>
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <p>I am trying to fill in this tab</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p></p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
