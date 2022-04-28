import React from "react";
import { Typography, Box, Container, Grid, CircularProgress } from "@mui/material";


import ProjectCard from './ProjectCard';

const ProjectList = ({ id, projects }) => {

    const renderList = (projects) => {
        return projects.map(project => {
            return <ProjectCard
                key={project.id}
                name={project.name}
                description={project.description}
                image={project.image}
                deploymentUrl={project.homepage}
                repoUrl={project.html_url}
            />
        })
    }

    return (
        <Box id={id} component="div" sx={{ display: 'flex', flexDirection: 'column' }}>
            <Typography variant="h4" color="primary.dark" sx={{ pb: 3, pt: 3, textTransform: 'capitalize' }}>
                {id}
            </Typography>
            { projects ?
                <Grid container spacing={2} sx={{justifyContent: 'center'}}>
                    {renderList(projects)}
                </Grid> :
                <Container sx={{ py: 8 }} maxWidth="md">
                    <Box sx={{ display: 'flex', py: 20 }} justifyContent="center">
                        <CircularProgress color="secondary" />
                    </Box>
                </Container>
            }
        </Box>

    )

}

export default ProjectList;