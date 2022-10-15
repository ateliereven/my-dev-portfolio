import React from 'react';
import { Typography, Stack, Button, Box, Link } from "@mui/material";
import { styled } from '@mui/material/styles';

const SkillButton = styled(Button)(({ theme }) => ({
        borderRadius: 18,
        alignSelf: 'center',
        textTransform: 'none',
        margin: 6,
        cursor: 'auto',
        marginTop: 10
}));

const About = () => {
    const skills = {
        languages: ['JavaScript', 'ES6+', 'TypeScript'],
        frontend: ['React.js (& hooks)', 'Redux', 'HTML5', 'CSS3', 'Sass', 'Meterial-UI'],
        backend: ['Node.js', 'REST API', 'Express', 'MongoDB', 'SSR'],
        devops: ['Git', 'Docker']
    };
    const extraSkills = ['Photoshop', 'Illustrator', 'In-design', 'AutoCAD', 'Sketchup', 'Kerkythea', 'V-ray'];

    return (
        <Box
            id="about"
            component="div"
            sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                '& div h5': { pb: 0.5, pt: 2 }
            }}
        >
            <Typography variant="h4" color="primary.dark" sx={{ pb: 2, pt: 2 }}>
                About
            </Typography>
            <Typography>
                I'm a creative self-taught web developer, designer and former architect (M.A) with high analytical & graphical skills. I hold professional work experience as a fullstack software developer in an Israeli startup, and I'm proficient in the latest web technologies - mainly in MERN stack. In search of my next professional challenge, I am currently seeking a position in Frontend/Fullstack Development.
            </Typography>
            <Typography>
                I also hold over 10 years of work experience in design and architectural planning of large-scale projects, alongside academic-teaching experience in these fields at the Technion (IIT). My next work environment could benefit from my knowledge and abilities in web programming languages and advanced frameworks, and also from my vast experience in multi-professional team collaboration as a detail-oriented architect. 
            </Typography>
            <Box component='div'>
                <Typography variant="h5" color="primary.dark">
                    My development skills:
                </Typography>
                <Stack direction="row" spacing={1} sx={{ flexWrap: 'wrap', justifyContent: 'center' }}>
                    {skills.languages.map(skill => (
                        <SkillButton
                            key={skill}
                            variant="contained"
                            color="primary"
                            sx={{backgroundColor: theme => theme.palette.primary.dark}}
                         >
                            {skill}
                        </SkillButton>
                    ))}
                    {skills.frontend.map(skill => (
                        <SkillButton
                            key={skill}
                            variant="contained"
                            color="primary"
                            sx={{backgroundColor: theme => theme.palette.primary.main}}
                         >
                            {skill}
                        </SkillButton>
                    ))}
                    {skills.backend.map(skill => (
                        <SkillButton
                            key={skill}
                            variant="contained"
                            color="secondary"
                            sx={{backgroundColor: theme => theme.palette.primary.light}}
                         >
                            {skill}
                        </SkillButton>
                    ))}
                    {skills.devops.map(skill => (
                        <SkillButton
                            key={skill}
                            variant="contained"
                            color="secondary"
                         >
                            {skill}
                        </SkillButton>
                    ))}
                </Stack>

                <Typography variant="h5" color="primary.dark">
                    Extra skills:
                </Typography>
                <Stack direction="row" spacing={1} sx={{ flexWrap: 'wrap', justifyContent: 'center' }}>
                    {extraSkills.map(skill => (
                        <SkillButton
                            key={skill}
                            variant="outlined"
                        >
                            {skill}
                        </SkillButton>
                    ))}
                </Stack>
            </Box>
            <Box 
            component='div' 
            sx={{ 
                '& div': { py: 0.5 }, 
                '& div p:first-of-type': { fontWeight: '600'}, 
                '& a': {color: 'primary.dark'}
                }}>
                <Typography variant="h5" color="primary.dark">
                    Courses I've taken:
                </Typography>
                <Box component='div'>
                    <Typography>Microservices with Node JS and React (Udemy) - <i>currently taking</i></Typography>
                    <Typography >
                        Architecture of microservices built with Node, React, Next, running on Docker and Kubernetes. Database design and deployment strategies.
                    </Typography>
                </Box >
                <Box component='div'>
                    <Typography>React and Typescript (Udemy)</Typography>
                    <Typography >
                        Integrating React and Redux together with Typescript. TS design patterns, Package-based architecture, Redux middlewares, Web Assembly.
                    </Typography>
                </Box >
                <Box component='div'>
                    <Typography>OJT Class (CoderZ)</Typography>
                    <Typography >
                        Collaborative team development of a MERN fullstack SPA (React, Typescript, Nest.js, MongoDB), employing a Scrum/Agile project management methodology.
                    </Typography>
                    <Typography >
                        Watch what the course instructor had to say about my work (min. 35 onward): <Link href="https://www.youtube.com/watch?v=tU7l_B-nnVM&t=3351s" target="_blank">writing technical tasks</Link>; check out my <Link href="https://docs.google.com/document/d/1cADvJlXWElx7O3gdTTS9c7QTEsI8luQ4x7EO0GIouCE/edit?usp=sharing" target="_blank">porject architecture and task breakdown</Link>.
                    </Typography>
                </Box >
                <Box component='div'>
                    <Typography>Node with React: Fullstack Web Development (Udemy)</Typography>
                    <Typography >
                        Node.js, React.js, Redux, Express and MongoDB. Including OAuth, payments and emailing using a backend server.
                    </Typography>
                </Box >
                <Box component='div'>
                    <Typography>Modern React with Redux (Udemy)</Typography>
                    <Typography >
                        React.js and Redux, including React Router, Webpack, Babel, hooks, context and CRUD apps.
                    </Typography>
                </Box >
                <Box component='div'>
                    <Typography>JavaScript Algorithms and Data Structures (Udemy)</Typography>
                </Box >
                <Box component='div'>
                    <Typography>Front-End Track (she codes;)</Typography>
                    <Typography >
                        Web (HTML5, CSS3, JavaScript), JS ES6+, OOP in JS, AJAX, Typescript, Node.js , React.js + Redux.
                    </Typography>
                </Box >
                <Box component='div'>
                    <Typography>Git (she codes;)</Typography>
                    <Typography >
                        Web developer workflow, commands, local branching, team work.
                    </Typography>
                </Box >
            </Box>
        </Box>
    )
}

export default React.memo(About);