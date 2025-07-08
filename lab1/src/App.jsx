import { Component, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import profilePic from './components/ProfilePicture/ProfilePic.jpg';  // Adjust path as needed
import Hero from './components/Hero/Hero'
import Skills from './components/Skills/Skills'
import Projects from './components/Projects/Projects' 

function App() {
  const portfolioData = {
    name: "Mohamed Onga",
    title: "Full-Stack Developer",
    bio: "Passionate about building scalable and user-friendly web applications. With a strong foundation in both front-end and back-end technologies, I enjoy bringing ideas to life and solving complex problems. Always eager to learn new technologies and improve my craft.",
    skills: [
      "React", "Node.js", "Express.js", "MongoDB", "PostgreSQL",
      "JavaScript", "TypeScript", "Python", "HTML", "CSS",
      "Git", "REST APIs", "Cloud Deployment (AWS/Azure)", "Docker", "Agile Methodologies"
    ],
    projects: [
      {
        id: 1,
        title: "E-Book Platform",
        description: "Developed a full-stack e-Book application with user authentication, product listings, shopping cart functionality, and payment integration. Focused on a clean UI/UX and robust backend.",
        technologies: ["Angular", "Node.js", "Express.js", "MongoDB"],
        
      },
      {
        id: 2,
        title: "E-Commerce Platform",
        description: "Developed a full stack E-Comerace application with user authentication, product listings, shopping cart functionality, and payment integration. Focused on robust backend using firebase.",
        technologies: ["JavaScript", "BootStrap", "Local Storage" , "Firebase"],
      },
      
    ],
    contact: {
      email: "ongamohamed89@.com",
      linkedin: "https://linkedin.com/in/mohamed-mahmoud-onga",
      github: "https://github.com/Onga24"
    }
  };


  return (
    <>
    <div className="App">
      <Header 
      name={portfolioData.name} 
      pic={profilePic} />
      <Hero 
        name={portfolioData.name}
        title={portfolioData.title}
        bio={portfolioData.bio}
        pic={profilePic}
      />
      <Skills skills={portfolioData.skills} />
      <Projects projects={portfolioData.projects} />
      <Footer contact={portfolioData.contact} />
    </div>
      
    </>
  )
}

export default App
