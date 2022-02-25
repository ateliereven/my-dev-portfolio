import React from "react";
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import { Tooltip, CardActionArea, CardActions, Link, Paper, CardContent } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';


const ProjectCard = ({name, description, image, deploymentUrl, repoUrl}) => {
    return <Grid item xs={12} md={6} lg={6}>
        <Card elevation={6} className="card" sx={{ backgroundColor: 'primary.main'}}>
            <CardActionArea >
                <CardContent component='div'>
                    <Paper elevation={4} component='img' src={image} />
                </CardContent>
                <CardContent sx={{ minHeight: '240px'}}>
                    <Typography gutterBottom variant="h5" component="div" color="primary.contrastText" sx={{ textTransform: 'capitalize' }}>
                        {name.replace(/-/g, ' ')}
                    </Typography>
                    <Typography variant="body2" color="primary.contrastText" gutterBottom={true} >
                        {description}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions  sx={{ backgroundColor: 'primary.light' }}>
                <Tooltip title="view code">
                <Link href={repoUrl} target="_blank">
                        <GitHubIcon color="info" fontSize="large" />
                 </Link>
                </Tooltip>
                <Tooltip title="view deployment">
                <Link href={deploymentUrl} target="_blank">
                    <RocketLaunchIcon color="info" fontSize="large" />
                 </Link>
                </Tooltip>
            </CardActions>
        </Card>
    </Grid>
}

export default ProjectCard;