import React, { useEffect, useState } from "react";
import AboutMe from "../components/AboutMe";
import ApresentationPageOne from "../components/Apresentation";
import Contacts from "../components/Contacts";
import MenuTopBar from "../components/MenuTopBar";
import Projects from "../components/Projects";
import { githubInterface } from "../interface/githubInterface";
import { ProjectsGitHbInterface } from "../interface/projectsGitHubInterface";


function Home() {
  let [gitHub, setGitHub] = useState({} as githubInterface);

  
  const getUserGithub = async () => {
    try {
      const response = await fetch(
        `https://api.github.com/users/mateusRanzani`
      );
      const data = await response.json();

      if (response.ok) {
        gitHub = data;
        setGitHub(gitHub);
        return;
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getUserGithub();
  }, []);
  return (
    <div className="App">
      <MenuTopBar />
      <div className="boxOne">
        <ApresentationPageOne gitHub={gitHub} />
      </div>
      <div className="boxTwo">
        <AboutMe/>
      </div>
      <div className="boxTree">
        <Projects/>
      </div>
      <div className="boxFour">
        <Contacts/>
      </div>
    </div>
  );
}

export default Home;
