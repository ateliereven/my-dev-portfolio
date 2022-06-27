import { useEffect, useState, useCallback, useMemo } from "react";
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
import notebook from '../../img/notebook-js-ts.png';
import { Repo } from './repo';

const Main = () => {
    const [AllProjects, setAllProjects] = useState<Repo[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<null | string>(null);
    const projects = AllProjects.filter(project => {
        return (project.name === 'atelier-even-website' || project.name === 'my-sender' || project.name === 'notebook-js-ts')
    }).reverse();
    const snippets = AllProjects.filter(project => {
        return (project.name !== 'atelier-even-website' && project.name !== 'my-sender' && project.name !== 'notebook-js-ts')
    }).reverse();
    const projectImgUrl = [
        atelierEven,
        cardGame,
        tradingApp,
        mysender,
        notebook,
        usersLibrary,
        weather,
    ];
    
    // fetching data from the github api:
    const fetchRepos = useCallback(async () => {
        // getting repos from local storage:
        const isRepos = JSON.parse(localStorage.getItem("repos") as string);
        const isExpiration = JSON.parse(localStorage.getItem("expiration") as string);
        // check if data can be fetched from local storage:
        if (isRepos && isExpiration > Number(new Date())) {
            setAllProjects(isRepos);
            setLoading(false);
        }
        // else make get request from api and save to local storage:
        else {
            try {
                const response = await github.get('/users/ateliereven/repos');
                const results = response.data.filter((project: Repo) => {
                    return (project.name !== 'my-dev-portfolio' && project.name !== 'ateliereven')
                });
                for (let i = 0; i < results.length; i++) {
                    results[i].image = projectImgUrl[i];
                }
                localStorage.setItem("repos", JSON.stringify(results));
                const expiration = Number(new Date()) + 3600 * 1000 * 24; // expires in 24 hours
                localStorage.setItem("expiration", JSON.stringify(expiration));
                setLoading(false);
                setAllProjects(results);
            } catch (err: any) {
                setError(err.message);
            }
        }

    }, [projectImgUrl])

    // calling fetchRepos when app launches:
    useEffect(() => {
        fetchRepos();
    }, [fetchRepos]);

    return <main>
        <Container maxWidth="md">
            <About />
            <ProjectList id="projects" projects={projects} error={error} loading={loading}/>
            <ProjectList id="snippets" projects={snippets} error={error} loading={loading}/>
        </Container>
        <Contact />
    </main>
}

export default Main;