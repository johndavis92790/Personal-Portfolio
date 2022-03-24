import React, { useState } from "react";
import ModalDiv from "../Modal";
import { Row, Col, Card } from "react-bootstrap";

function Project() {
  
  const [currentProject, setCurrentProject] = useState();

  const projects = [
    {
      name: "Stony Brook",
      description: "Making returns easy, one step at a time",
      url: "https://salty-brook-34116.herokuapp.com/",
      github: "https://github.com/johndavis92790/Warehouse-Returns",
    },
    {
      name: "Can We Make It?",
      description:
        "Quick and easy way app to check local showtimes and if you can make a showing or not",
      url: "https://johndavis92790.github.io/travel-buddy/",
      github: "https://github.com/johndavis92790/travel-buddy",
    },
    {
      name: "Social Network API",
      description:
        "This can be a good boiler plate to create social networks of many kinds.",
      url: "",
      github: "https://github.com/johndavis92790/social-network-api",
    },
    {
      name: "E-Commerce Back End",
      description:
        "You could use this framework for many different types of online e-commerce applications. It can be very dynamic and easy to expand.",
      url: "",
      github: "https://github.com/johndavis92790/e-commerce-back-end",
    },
    {
      name: "Weather Dashboard",
      description: "Simple OpenWeather API dashboard that uses localStorage",
      url: "https://johndavis92790.github.io/weather-dashboard/",
      github: "https://github.com/johndavis92790/weather-dashboard",
    },
    {
      name: "Note Taker",
      description:
        "You can use this to create notes and to access them anytime you go back to the app.",
      url: "https://miniture-eureka-92790.herokuapp.com/",
      github: "https://github.com/johndavis92790/miniture-eureka",
    },
  ];

  return (
    <>
      {currentProject ? (
        <ModalDiv
          setCurrentProject={setCurrentProject}
          currentProject={currentProject}
        />
      ) : null}
        {projects.map((image, i) => {
          if (i === 0 || i % 2 === 0) {
            return (
              <Row
                key={image.name + "-image"}
                xs={1}
                sm={2}
                className="g-0 mx-3 mt-1"
              >
                <Col className="mx-0 my-4">
                  <Card>
                    <Card.Img
                      variant="top"
                      src={require(`../../assets/small/${i}.jpg`)}
                      alt={image.name}
                      style={{ cursor: "pointer" }}
                      onClick={() => {
                        setCurrentProject({ ...image, index: i });
                        console.log("currentProject", currentProject);
                      }}
                    />
                  </Card>
                </Col>
                <Col className="my-auto px-3">
                  <Card border="light">
                    <Card.Body>
                      <Card.Title>{image.name}</Card.Title>
                      <Card.Text>{image.description}</Card.Text>
                      <Card.Text>
                        <a
                          href={image.url}
                          target="_blank"
                          rel="noreferrer"
                          className="mt-3"
                        >
                          Live Link
                        </a>
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        <a
                          href={image.github}
                          target="_blank"
                          rel="noreferrer"
                          className="mt-3"
                        >
                          Github Repo
                        </a>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            );
          } else {
            return (
              <Row
                key={image.name}
                xs={1}
                sm={2}
                className="g-0 mx-3 mt-1"
              >
                <Col key={image.name + "-image"} className="my-auto px-3">
                  <Card border="light">
                    <Card.Body>
                      <Card.Title>{image.name}</Card.Title>
                      <Card.Text>{image.description}</Card.Text>
                      <Card.Text>
                        <a
                          href={image.url}
                          target="_blank"
                          rel="noreferrer"
                          className="mt-3"
                        >
                          Live Link
                        </a>
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        <a
                          href={image.github}
                          target="_blank"
                          rel="noreferrer"
                          className="mt-3"
                        >
                          Github Repo
                        </a>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <Col className="mx-0 my-4">
                  <Card>
                    <Card.Img
                      variant="top"
                      src={require(`../../assets/small/${i}.jpg`)}
                      alt={image.name}
                      style={{ cursor: "pointer" }}
                      onClick={() => {
                        setCurrentProject({ ...image, index: i });
                        console.log("currentProject", currentProject);
                      }}
                    />
                  </Card>
                </Col>
              </Row>
            );
          }
        })}
    </>
  );
}

export default Project;
