import React from "react";
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { IconButton, CardActionArea, CardActions, Link } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';

const ProjectCard = ({name, description, image, deploymentUrl, repoUrl}) => {
    return <Grid item xs={12} md={6} lg={4}>
        <Card elevation={3} sx={{ maxWidth: '400px' }}>
            <CardActionArea >
                    <CardMedia
                        component='img'
                        height='100'
                        image={image}
                        alt="my app pic"
                    />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {name}
                    </Typography>
                    <Typography variant="body" color="text.secondary" gutterBottom={true} >
                        {description}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions sx={{ borderTop: 'solid 1px #eee' }}>
                <Link href={repoUrl} target="_blank"><IconButton aria-label="github" sx={{ backgroundColor: '#f8f8f8' }}>
                    <GitHubIcon color="primary" fontSize="large" />
                </IconButton> </Link>
                <Link href={deploymentUrl} target="_blank"><IconButton aria-label="deployment" sx={{ backgroundColor: '#f8f8f8' }}>
                    <RocketLaunchIcon color="primary" fontSize="large" />
                </IconButton> </Link>
            </CardActions>
        </Card>
    </Grid>
}

export default ProjectCard;