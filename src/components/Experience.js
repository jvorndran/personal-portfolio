import bamm from "../images/Experience/bamm.jpg"
import DNB from "../images/Experience/DNB.svg"
import PHP from "../images/technologies/PHP.svg"
import html from "../images/technologies/html.svg";
import css from "../images/technologies/css.svg";
import javascript from "../images/technologies/js.svg";
import typescript from "../images/technologies/ts.svg";
import react from "../images/technologies/react.svg";
import jest from "../images/technologies/jest.svg"
import java from "../images/technologies/java.svg";
import mySQL from "../images/technologies/mysql.svg";
import python from "../images/technologies/python.svg";
import jquery from "../images/technologies/jquery.svg"
import aem from "../images/technologies/AEM.svg"
import gcp from "../images/technologies/gcp.svg"
import docker from "../images/technologies/docker.svg"
import harness from "../images/technologies/harness.svg"


function Experience () {
    return (
        <div className="works">
            <h2>Experience</h2>
            <article className="light" style={{paddingTop: 0}}>
                <div className="text" style={{display: "flex", flexBasis: "100%"}}>
                    <h3 style={{fontSize: "24px"}}>Software Engineer Intern At BamM Tickets</h3>
                    <ul style={{listStyleType: "square", paddingLeft: "1.5rem"}}>
                        <li>Developed and launched a comprehensive product management system enabling administrators to create and edit
                        products seamlessly. This system featured real-time synchronization with the Square catalog using the Square REST API,
                        ensuring up-to-date inventory management.

                        </li>
                        <br />
                        <li>
                        Engineered, implemented, and deployed a custom REST API that allowed tickets to be added to customers’ Apple and
                        Google wallets, enhancing user experience.
                        </li>
                    </ul>
                    <h4 style={{color: "white", fontSize: "14px"}}><strong>Technologies Used:</strong> PHP, MySQL, JQuery, Javascript, HTML, CSS</h4>
                </div>
                <div className="image" style={{display: "grid",  grid: "80% 15%", rowGap: "1rem", margin: "2rem 0 2rem 0"}}>
                    <img src={bamm} style={{maxHeight: "200px", maxWidth: "275px",display: "flex", marginLeft: "auto"}} alt="" />
                    <div className="exp-technologies" style={{display: "flex", justifyContent: "flex-end", gap: "1rem", flexWrap: "wrap", width: "100%"}}>
                        <img src={PHP}/>
                        <img src={mySQL}/>
                        <img src={jquery}/>
                        <img src={javascript}/>
                        <img src={html}/>
                    </div>
                </div>
            </article>
            <article className="dark" style={{paddingTop: 0}}>
                <div className="text" style={{display: "flex", flexBasis: "100%"}}>
                    <h3 style={{fontSize: "24px"}}>Office Of the CTO Internship At Dun & Bradstreet</h3>
                    <ul style={{listStyleType: "square", paddingLeft: "1.5rem"}}>
                        <li>
                            Collaborated with a 10-person team using Scrum to develop a social media sentiment analysis application, boosting brand
                            monitoring efficiency and enabling timely insights for decision-making.
                        </li>
                        <br />
                        <li>
                            Created an automated Python script to integrate the Sprout Social REST API with our GCP Cloud SQL database, reducing
                            data update time and ensuring continuous, accurate database synchronization.
                        </li>
                        <br />
                        <li>
                            Streamlined the build process by automating Docker image creation and storage in JFrog Artifactory, reducing build time by
                            95% and improving reliability in CI/CD workflows.
                        </li>
                    </ul>
                    <h4 style={{color: "white", fontSize: "14px"}}><strong>Technologies Used:</strong> GCP, Python, Docker, JFrog, MySQL, Harness</h4>
                </div>
                <div className="image" style={{display: "grid",  grid: "80% 15%", rowGap: "1rem", margin: "2rem 0 2rem 0"}}>
                    <img src={DNB} style={{maxHeight: "200px", maxWidth: "275px",display: "flex", marginLeft: "auto"}} alt="" />
                    <div className="exp-technologies" style={{display: "flex", justifyContent: "flex-end", gap: "1rem", flexWrap: "wrap", width: "100%"}}>
                        <img src={gcp}/>
                        <img src={python}/>
                        <img src={mySQL}/>
                        <img src={harness}/>
                        <img src={docker}/>
                    </div>
                </div>
            </article>
            <article className="light" style={{paddingTop: 0}}>
                <div className="text" style={{display: "flex", flexBasis: "100%"}}>
                    <h3 style={{fontSize: "24px"}}>Software Engineer Internship At Dun & Bradstreet</h3>
                    <ul style={{listStyleType: "square", paddingLeft: "1.5rem"}}>
                        <li>
                            Conducted User Acceptance Testing (UAT) to identify, document, and resolve critical bugs,
                            and authored comprehensive unit tests, increasing test coverage from nearly 0% to 100%,
                            which directly contributed to the successful launch of the company's new website built with AEM, React, and Java.
                        </li>
                        <br />
                        <li>
                            Collaborated with cross-functional teams, including designers, developers, and
                            QA specialists, to deliver high-quality solutions that met client requirements and deadlines.
                        </li>
                        <br />
                        <li>
                            Developed and integrated new features and enhancements for an enterprise-level website.
                        </li>

                    </ul>
                    <h4 style={{color: "white", fontSize: "14px"}}><strong>Technologies Used:</strong> Adobe Experience Manager, Java, React, Typescript, Jest</h4>
                </div>
                <div className="image" style={{display: "grid", grid: "80% 15%", rowGap: "1rem", margin: "2rem 0 2rem 0"}}>
                    <img src={DNB} style={{maxHeight: "200px", maxWidth: "275px",display: "flex", marginLeft: "auto"}} alt="" />
                    <div className="exp-technologies" style={{display: "flex", justifyContent: "flex-end", gap: "1rem", flexWrap: "wrap", width: "100%"}}>
                        <img src={aem}/>
                        <img src={java}/>
                        <img src={react}/>
                        <img src={typescript}/>
                        <img src={jest}/>
                    </div>
                </div>
            </article>
        </div>
    )
}

export default Experience;