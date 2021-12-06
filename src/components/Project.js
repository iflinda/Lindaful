import './Project.css';
import './../Global.css';
import React from 'react';
import GitHub from '../images/AltGitHub.svg';
import Website from '../images/Website.svg';


function About({name, screenshot, alt, codeAddress, address, description, technologies}) {
    function link() {
        if (codeAddress.length === 0) {
            return (
                <a target="_blank" rel="noreferrer" href={address}><img className="information gitHub" src={Website} alt="Navigate to Other Website Browser Icon" /></a>
            )
        } else {
            return (
                <div>
                    <a target="_blank" rel="noreferrer" href={codeAddress}><img className="information" src={GitHub} alt="GitHub Logo" /></a>
                    <a target="_blank" rel="noreferrer" href={address}><img className="information gitHub" src={Website} alt="Navigate to Other Website Browser Icon" /></a>
               </div>
            )
        }
    }
    return (
        <div className="project">
            <h2>{name}</h2>
            <a target="_blank" rel="noreferrer" href={address}><img className={`screenshots ${name}`} src={screenshot} alt={alt} /></a>
            <p className="description">{description}</p>
            <div className="technologies">
                {technologies.map((result, i) => {
                    if (result.length > 0) {
                        return (
                            <p>{result}</p>
                        )
                    }
                    return(
                        <p />
                    )
                }
                )}
            </div>
            <div>
                {link()}
            </div>
        </div>
    )
}

export default About;