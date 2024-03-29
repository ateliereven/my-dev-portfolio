import React from "react";
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import { Tooltip, CardActionArea, CardActions, Link, Paper, CardContent } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';

interface ProjectCardProps {
    name: string;
    description: string;
    image: string | undefined;
    deploymentUrl: string;
    repoUrl: string;
}
const ProjectCard: React.FC<ProjectCardProps> = ({name, description, image, deploymentUrl, repoUrl}) => {
    return <Grid item xs={12} sm={5} md={4} lg={4}>
        <Card elevation={6} className="card" sx={{ backgroundColor: 'primary.main'}}>
            <CardActionArea >
                <Link href={deploymentUrl} target="_blank">
                <CardContent component='div'>
                    <Paper elevation={4} component='img' src={image} />
                </CardContent>
                <CardContent sx={{ minHeight: '350px', paddingBottom: '8px !important', paddingTop: '5px'}}>
                        <Typography
                            gutterBottom
                            variant="h5"
                            component="div"
                            color="primary.contrastText"
                            sx={{ textTransform: 'capitalize' }}
                        >
                        {name.replace(/-/g, ' ')}
                    </Typography>
                    <Typography  color="primary.contrastText" variant="body2" gutterBottom={true} >
                        {description}
                    </Typography>
                </CardContent>
                </Link>
            </CardActionArea>
            <CardActions  sx={{ backgroundColor: 'primary.light' }}>
                <Tooltip title="view code">
                <Link href={repoUrl} target="_blank">
                        <GitHubIcon color="info" fontSize="medium" />
                 </Link>
                </Tooltip>
                <Tooltip title="view deployment">
                <Link href={deploymentUrl} target="_blank">
                    <RocketLaunchIcon color="info" fontSize="medium" />
                 </Link>
                </Tooltip>
            </CardActions>
        </Card>
    </Grid>
}

export default ProjectCard;