import React from "react";
import { Typography, Box, Container, Grid, CircularProgress } from "@mui/material";

import ProjectCard from './ProjectCard';
import { Repo } from './repo';

interface ProjectListProps {
    id: string;
    projects: Repo[];
    error: null | string;
    loading: boolean
}

const ProjectList: React.FC<ProjectListProps> = ({ id, projects, error, loading }) => {

    const renderList = (projects: Repo[]) => {
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
            {loading || error ?
            <Container sx={{ py: 8 }} maxWidth="md">
               <Box sx={{ display: 'flex', py: 20 }} justifyContent="center">
                  {loading && <CircularProgress color="secondary" />}
                        {error &&
                            <Typography variant="h4">Oops... something went wrong:
                                <Typography variant="h6" sx={{ color: 'red' }}>{error}</Typography>
                            </Typography>}
               </Box>
            </Container>
            :
                <Grid container spacing={2} sx={{justifyContent: 'center'}}>
                    {renderList(projects)}
                </Grid>
            }
        </Box>

    )

}

export default ProjectList;