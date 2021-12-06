import './Projects.css';
import './Global.css';
import React from 'react';
import ProjectsBackground from './images/ProjectsBackground.svg'
import Runik from './images/Runik.png';
import Project from './components/Project';
import Abyssal from './images/Abyssal.png';
import AbyssalRedesign from './images/AbyssalRedesign.png';
import VXP from './images/VXP.png';
import Express from './images/Express.png';
import Proposal from './images/Proposal.png';

function Projects () {
    return (
        <div id="projects">
            <h1>my creations</h1>
            <img className="background" src={ProjectsBackground} alt=""/>
            <div>
                <Project
                    className="project" 
                    name="Runik Application" 
                    screenshot={Runik}
                    alt="Runik landing page with prominent search bar." 
                    codeAddress="https://github.com/Runik-3/runik-app" 
                    address="https://runik.app/"
                    description="Runik is an open-source web application that allows you to generate custom dictionaries for your favorite fictional worlds and installs them directly to your Kobo e-reader."
                    technologies={[ "HTML", "CSS", "JavaScript", "React", "Tailwind CSS", "Next.js", "Fuse.js" ]} />
            </div>
            <div>
                <Project
                    className="project" 
                    name="Abyssal Game" 
                    screenshot={Abyssal}
                    alt="Abyssal game screenshot with the protagonist exploring an underwater cavern." 
                    codeAddress="https://github.com/jsam07/abyssal-website" 
                    address="https://abyssal-website.herokuapp.com/"
                    description="Abyssal is an underwater adventure set in the style of a Metroidvania game. The player controls Syba, an amnesiac villager of an ancient race. The player must explore the underwater caverns that build up a lost world to figure out the mystery of Syba's past."
                    technologies={[ "C#", "Unity", "WebGL" ]} />
            </div>
            <div>
                <Project
                    className="project" 
                    name="Abyssal Redesign" 
                    screenshot={AbyssalRedesign}
                    alt="Abyssal landing page with the protagonist and play button." 
                    codeAddress="" 
                    address="https://www.figma.com/file/aYnSqASUC9s3OrfdHFYxAE/Abyssal?node-id=0%3A1"
                    description="The Abyssal website redesign focuses on creating an immersive web experience that allows the site to become an extension of the mysterious, underwater, and dark world of Abyssal."
                    technologies={[ "Figma", "Photoshop" ]} />
            </div>
            <div>
                <Project
                    className="project" 
                    name="VXP Protothon" 
                    screenshot={VXP}
                    alt="Venture Experience Hackathon landing page with the tagline Western Canada's first Design-Focused Hackathon." 
                    codeAddress="https://www.vxpdesign.ca/" 
                    address="https://github.com/VentureXPerience/vxp-server"
                    description="Venture Experience Protothon (VXP) is Western Canada’s first-ever design-focused Hackathon. Our mission is to host a celebration of design where participants can learn, compete, and network while building their portfolios and skills regardless of their experience."
                    technologies={[ "HTML", "CSS", "React", "Node.js", "Next.js", "Tailwind CSS", "AWS Amplify" ]} />
            </div>
            <div>
                <Project
                    className="project" 
                    name="Express Documentation" 
                    screenshot={Express}
                    alt="Express.js Documentation landing page that has instructions on how to implement Express in your web application." 
                    codeAddress="https://megankuo.github.io/Express-User-Documentation/" 
                    address="https://github.com/megankuo/Express-User-Documentation/"
                    description="This custom Express.js documentation will guide you through setting up a Node.js project for building small to medium-scale RESTful APIs using Express.js. The goal of this documentation is to provide you with enough information to build your first Express application."
                    technologies={[ "Markdown", "JavaScript" ]} />
            </div>
            <div>
                <Project
                    className="project" 
                    name="Twilight Proposal" 
                    screenshot={Proposal}
                    alt="Inventive Design Studio Project Proposal cover for the Twilight Drive-in." 
                    codeAddress="" 
                    address="https://drive.google.com/file/d/1ndZSbQkq4UHSwW6j9MXlVmutjvl8x-uS/view"
                    description="This business proposal focuses on improving the overall design of the Twilight Drive-in website. Additionally, the proposal goes into depth about the importance of the website working on mobile devices while improving the visual appeal to increase profit growth. "
                    technologies={[ "" ]} />
            </div>
        </div>
        
    )
}

export default Projects;