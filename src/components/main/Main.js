import React, { useEffect, useState, useCallback, useMemo } from "react";
import Container from '@mui/material/Container';

import About from './About';
import ProjectList from './ProjectList';
import Contact from './Contact';
import github from "../../api/github";
import atelierEven from '../../img/atelier-even.png';
import cardGame from '../../img/card-game.jpg';
import mysender from '../../img/my-sender.png';
import tradingApp from '../../img/trading-app.png';
import usersLibrary from '../../img/users-library.jpg';
import weather from '../../img/weather.jpg';

const Main = () => {
    const [AllProjects, setAllProjects] = useState([]);
    const projects = AllProjects.filter(project => { return (project.name === 'atelier-even-website' || project.name === 'my-sender') }).reverse();
    const snippets = AllProjects.filter(project => { return (project.name !== 'atelier-even-website' && project.name !== 'my-sender' && project.name !== 'my-dev-porfolio') }).reverse();
    const projectImgUrl = useMemo(() => {
        return [
            atelierEven,
            cardGame,
            tradingApp,
            mysender,
            usersLibrary,
            weather,
        ]
    }, [])
    // fetching data from the github api:
    const fetchRepos = useCallback(async () => {
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
            for (let i = 0; i < response.data.length; i++) {
                response.data[i].image = projectImgUrl[i];
            }
            localStorage.setItem("repos", JSON.stringify(response.data));
            const expiration = Number(new Date()) + 3600 * 1000 * 24; // expires in 24 hours
            localStorage.setItem("expiration", expiration);
            setAllProjects(response.data);
        }

    }, [projectImgUrl])

    useEffect(() => {
        fetchRepos();
    }, [fetchRepos]);

    return <main>
        <Container maxWidth="md">
            <About />
            <ProjectList id="projects" projects={projects} />
            <ProjectList id="snippets" projects={snippets} />
        </Container>
        <Contact />
    </main>
}

export default Main;