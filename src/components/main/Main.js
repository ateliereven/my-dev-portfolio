import React, { useEffect, useState } from "react";
import Container from '@mui/material/Container';
import About from './About';
import ProjectList from './ProjectList';

import github from "../../api/github";

const Main = () => {
    const [AllProjects, setAllProjects] = useState([]);
    console.log(AllProjects);
    const projects = AllProjects.filter(project => { return (project.name === 'atelier-even-website' || project.name === 'my-sender') }).reverse();
    console.log(projects)
    const snippets = AllProjects.filter(project => { return (project.name !== 'atelier-even-website' && project.name !== 'my-sender') }).reverse();
    console.log(snippets)
    // fetching data from the github api:
    useEffect(() => {
        fetchRepos();
    }, [])
    const fetchRepos = async () => {
        // getting repos from local storage:
        const isRepos = JSON.parse(localStorage.getItem("repos"));
        const isExpiration = localStorage.getItem("expiration");
        // check if data can be fetched from local storage:
        if (isRepos && isExpiration > Number(new Date())) {
            setAllProjects(isRepos);
        }
        // else make get request from api and save to local storage:
        else {
            const response = await github.get('/users/ateliereven/repos');
            localStorage.setItem("repos", JSON.stringify(response.data));
            const expiration = Number(new Date()) + 3600 * 1000 * 24; // expires in 24 hours
            localStorage.setItem("expiration", expiration);
            setAllProjects(response.data);
        }

    }
    return <main>
        <Container maxWidth="md">
            <About />
            <ProjectList id="projects" projects={projects} />
            <ProjectList id="snippets" projects={snippets} />
        </Container>
    </main>
}

export default Main;