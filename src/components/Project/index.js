import React, { useState } from "react";
import Modal from "../Modal";

function Project() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentProject, setCurrentProject] = useState();

  const [projects] = useState([
    {
      name: "Stony Brook",
      description: "Making returns easy, one step at a time",
      url: "https://johndavis92790.github.io/Warehouse-Returns/",
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
      url: "https://johndavis92790.github.io/miniture-eureka/",
      github: "https://github.com/johndavis92790/miniture-eureka",
    },
  ]);

  const toggleModal = (image, i) => {
    setCurrentProject({ ...image, index: i });
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div>
      {isModalOpen && (
        <Modal onClose={toggleModal} currentProject={currentProject} />
      )}
      <div>
        {projects.map((image, i) => (
          <img
            src={require(`../../assets/small/${i}.jpg`)}
            alt={image.name}
            onClick={() => toggleModal(image, i)}
            key={image.name}
          />
        ))}
      </div>
    </div>
  );
}

export default Project;
