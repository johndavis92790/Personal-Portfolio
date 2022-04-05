import React, { useState } from "react";
import ModalDiv from "../Modal";
import { Row, Col, Card } from "react-bootstrap";

function Project() {
  
  const [currentProject, setCurrentProject] = useState();

  const projects = [
    {
      name: "Salty Brook",
      caption: "Making returns easy, one step at a time",
      url: "https://salty-brook-34116.herokuapp.com/",
      github: "https://github.com/johndavis92790/Warehouse-Returns",
      description:
        "This project was started to help alliviate some of the hedaches of processing returns for Davis Distributing Co, a wholesale warehouse that has been in John's family for over 65 years. As a B2B wholesaler of truck equipment, we sell lots of products to repeat reselling customers. Anytime they need to return a product they purchased, it is a headache for everyone involved. Right now its about 4 times the amount of work versus selling them the product but we don't make any money on this work. This app is designed to be a simple, linear step by step style process to help everyone involved, the customer, the warehouse people physically handling the products and the office manager tasked with the paperwork side of things. This app uses lots of different technologies including: HTML, Bulma, CSS, JS, Handlebars.js, Express.js, Heroku, Sequelize.js, MySQL Database.",
    },
    {
      name: "Can We Make It?",
      caption:
        "Quick and easy way app to check local showtimes and if you can make a showing or not",
      url: "https://johndavis92790.github.io/travel-buddy/",
      github: "https://github.com/johndavis92790/travel-buddy",
      description:
        "We were first inspired for this idea for creating an app to find things to do while traveling in a place other than home to find things to do in a certain amout of time. We first tried to get setup with the Yelp api to gather location data of different points of interest near by. We found out that the Yelp api is hard to access and we gave up on that idea. We wanted to continue with our basic idea so we looked into using the Ticketmaster api to get event info. We built this app to get event info and check the driving time to see if you can get there on time but after we started testing we realized that there are not many events available to use this for same day events. We figured that movie showtimes would give us better data to work with but we had a hard time getting any showtimes api to work. So we continued with our Ticketmaster api just to have some type of app to work even if the data was not very good. John tried one last time to get one of the many showtimes api's (movieGlu) that he was tesing to work one late night and he noticed that the device time in the header was not correct and he fixed that and it then worked fine! We decided the next day as a group, with less than a week to go before presenting, to procede to convert our app to the movieGlu movies and showtimes api to check if you have enough time to get to a certain movie theater before a certain movie begins. We are much more happy with the data that we get from this api but we are limited to 75 total requests per api-key generated. Since you make at the minimum 2-3 requests per time you use this app, its not very sustainable. We hope that this app can spur ideas for other apps in the future.",
    },
    {
      name: "Social Network API",
      caption:
        "This can be a good boiler plate to create social networks of many kinds.",
      url: "",
      github: "https://github.com/johndavis92790/social-network-api",
      description:
        "This was a great project to learn most of the in's and out's of MongoDB and Mongoose. It is very similar to MySql and Sequelize with a few differences. I learned how to create a database and how to create and access the data within it. I learned how to connect different documents and subdocuments. I like how dynamic this system can be. It is pretty straight forward to be able to add more datapoints within the documents and to connect them with each other.",
    },
    {
      name: "E-Commerce Back End",
      caption:
        "You could use this framework for many different types of online e-commerce applications. It can be very dynamic and easy to expand.",
      url: "",
      github: "https://github.com/johndavis92790/e-commerce-back-end",
      description:
        "This challenge was super helpful in many ways. It really taught me the basic way an e-commerce website runs. The way to relate multiple tables through each other and run it all through an express server is very relatable to many applications. I learned how to best use Insomnia for testing and it really makes things go faster.",
    },
    {
      name: "Weather Dashboard",
      caption: "Simple OpenWeather API dashboard that uses localStorage",
      url: "https://johndavis92790.github.io/weather-dashboard/",
      github: "https://github.com/johndavis92790/weather-dashboard",
      description:
        "This challenge showed me a few things, mostly based around using objects with API's and functions. I learned how to better use objects and how to get info out of them. This app works by using the input field to search for a city, if its invalid city name, then it warns the user and asks them to try again. If its a valid city then it runs the OpenWeather One Call API to get weather data for the current day and 5 days in the future. it also stores the city name in the localStorage and creates a button for that city. You can always just click any of the city buttons to recall the weather for that city again.",
    },
    {
      name: "Note Taker",
      caption:
        "You can use this to create notes and to access them anytime you go back to the app.",
      url: "https://miniture-eureka-92790.herokuapp.com/",
      github: "https://github.com/johndavis92790/miniture-eureka",
      description:
        "This project was a great way to learn about GET, POST, DELETE routes and how to work with the data. It taught me how to create these routes to work with existing code and how to connect them all together with a express server.",
    },
  ];

  const ifLiveLink = (project) => {
    if (project.url === '') {
      return (
        <Card.Text>
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="mt-3"
          >
            Github Repo
          </a>
        </Card.Text>
      );
    } else {
      return (
        <Card.Text>
          <a
            href={project.url}
            target="_blank"
            rel="noreferrer"
            className="mt-3"
          >
            Live Link
          </a>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="mt-3"
          >
            Github Repo
          </a>
        </Card.Text>
      );
    }
  }

  return (
    <>
      {currentProject ? (
        <ModalDiv
          setCurrentProject={setCurrentProject}
          currentProject={currentProject}
        />
      ) : null}
      <div className="pb-4">
        {projects.map((project, i) => {
          if (i === 0 || i % 2 === 0) {
            return (
              <Row
                key={project.name + "-project"}
                xs={1}
                sm={2}
                className="g-0 mx-3 mt-1"
              >
                <Col className="mx-0 my-4">
                  <Card>
                    <Card.Img
                      variant="top"
                      src={require(`../../assets/small/${i}.jpg`)}
                      alt={project.name}
                      style={{ cursor: "pointer" }}
                      onClick={() => {
                        setCurrentProject({ ...project, index: i });
                      }}
                    />
                  </Card>
                </Col>
                <Col className="my-auto px-3">
                  <Card border="light">
                    <Card.Body>
                      <Card.Title>{project.name}</Card.Title>
                      <Card.Text>{project.caption}</Card.Text>
                      {ifLiveLink(project)}
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            );
          } else {
            return (
              <Row key={project.name} xs={1} sm={2} className="g-0 mx-3 mt-1">
                <Col
                  className="my-auto px-3"
                  xs={{ order: "last" }}
                  sm={{ order: "first" }}
                >
                  <Card border="light">
                    <Card.Body>
                      <Card.Title>{project.name}</Card.Title>
                      <Card.Text>{project.caption}</Card.Text>
                      {ifLiveLink(project)}
                    </Card.Body>
                  </Card>
                </Col>
                <Col className="mx-0 my-4">
                  <Card>
                    <Card.Img
                      variant="top"
                      src={require(`../../assets/small/${i}.jpg`)}
                      alt={project.name}
                      style={{ cursor: "pointer" }}
                      onClick={() => {
                        setCurrentProject({ ...project, index: i });
                      }}
                    />
                  </Card>
                </Col>
              </Row>
            );
          }
        })}
      </div>
    </>
  );
}

export default Project;
