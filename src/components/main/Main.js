import React from "react";
import Container from '@mui/material/Container';
import About from './About';
import ProjectList from './ProjectList';

const Main = () => {
    return <Container maxWidth="md">
        <About />
        <ProjectList id="projects" />
        <ProjectList id="snippets" />
    </Container>
}

export default Main;