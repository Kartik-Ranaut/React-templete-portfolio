/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/design-desk.jpeg";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Blog website",
    description:
      "Developed a full-stack blog application with an admin interface for writ- ing and managing blog posts. The application leverages MongoDB as the backend, Node.js and Express for the server-side logic, and React with Tailwind CSS for the frontend.",
    url: "https://github.com/Kartik-Ranaut/From-My-Pen-Blog-app.git",
  },
  {
    title: "Currency Convertor App",
    description:
      "It is a currency convertor app which work on data fetched from api. The mainly focus of this website was to easily check the currency rates with related to Indian Rupee.",
    url: "https://github.com/Kartik-Ranaut/Indian-currency-Value-.git",
  },
  {
    title: "Intelligent Password Generator",
    description:
      "Password Generation is to help generate random passwords based on the requirements of the user. In this project I use random method of built-in math object.",
    url: "https://github.com/Kartik-Ranaut/Password-Generator.git",
  },
  {
    title: "GUI based LMS",
    description:
      "Developed a GUI-based library management system using Python’s Tk- inter library and MySQL for backend database management.",
    url: "tps://github.com/Kartik-Ranaut/Library-management-GUI-.git",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
