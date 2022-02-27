import React from "react";
import { Typography, Stack, Button, Box } from "@mui/material";

const About = () => {
    const skills = ['React.js', 'JavaScript', 'ES6+', 'HTML5', 'CSS3', 'Redux', 'Node.js', 'Express', 'MongoDB', 'jQuery', 'Sass', 'Bootstrap', 'Meterial-UI', 'Git'];
    const extraSkills = ['Photoshop', 'Illustrator', 'In-design', 'AutoCAD', 'Sketchup', 'Kerkythea', 'V-ray'];

    return (
        <Box id="about" component="div" sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <Typography variant="h4" color="primary.dark" sx={{ pb: 2, pt: 2 }}>
                About
            </Typography>
            <Typography>
                I'm a creative self-taught web developer, designer and architect (M.A) with high analytical & graphical skills, shifting to the high-tech industry. I am currently seeking a position in Frontend/Fullstack Development in search of my next professional challenge, and I'm eager to experiment with new programming technologies.
            </Typography>
            <Typography>
                I also hold over 10 years of work experience in design and architectural planning of large-scale projects, alongside academic-teaching experience in these fields at the Technion (IIT). My next work environment could benefit from my experience in web programming languages and advanced frameworks, and also from my knowledge and abilities as a detail-oriented architect.
            </Typography>
            <Box component='div'>
                <Typography variant="h5" color="primary.dark" sx={{ pb: 0.5, pt: 2 }}>
                    My development skills:
                </Typography>
                <Stack direction="row" spacing={1} sx={{ flexWrap: 'wrap', justifyContent: 'center' }}>
                    {skills.map(skill => (
                        <Button
                            key={skill}
                            variant="contained"
                            color="secondary"
                            sx={{ borderRadius: '18px', alignSelf: 'center', textTransform: 'none', margin: '6px !important', cursor: 'auto'}} >
                            {skill}
                        </Button>
                    ))}
                </Stack>

                <Typography variant="h5" color="primary.dark" sx={{ pb: 0.5, pt: 2 }}>
                    Extra skills:
                </Typography>
                <Stack direction="row" spacing={1} sx={{ flexWrap: 'wrap', justifyContent: 'center' }}>
                    {extraSkills.map(skill => (
                        <Button
                            key={skill}
                            variant="outlined"
                            sx={{ borderRadius: '18px', alignSelf: 'center', textTransform: 'none', margin: '6px !important', cursor: 'auto', color: 'primary.dark' }} >
                            {skill}
                        </Button>
                    ))}
                </Stack>
            </Box>
            <Box component='div'>
                <Typography variant="h5" color="primary.dark" sx={{ pb: 0.5, pt: 2 }}>
                    Courses I've taken:
                </Typography>
                <Box component='div' sx={{ py: 0.5 }}>
                    <Typography sx={{ fontWeight: '600' }}>React and Typescript (Udemy - currently studying)</Typography>
                    <Typography >
                        Integrating React and Redux together with Typescript. Package-based architecture, Redux middlewares, Web Assembly.
                    </Typography>
                </Box >
                <Box component='div' sx={{ py: 0.5 }}>
                    <Typography sx={{ fontWeight: '600' }}>Node with React: Fullstack Web Development (Udemy)</Typography>
                    <Typography >
                        Node.js, React.js, Redux, Express and MongoDB. Including OAuth, payments and emailing using a backend server.
                    </Typography>
                </Box >
                <Box component='div' sx={{ py: 0.5 }}>
                    <Typography sx={{ fontWeight: '600' }}>Modern React with Redux (Udemy)</Typography>
                    <Typography >
                        React.js and Redux, including React Router, Webpack, Babel, hooks, context and CRUD apps.
                    </Typography>
                </Box >
                <Box component='div' sx={{ py: 0.5 }}>
                    <Typography sx={{ fontWeight: '600' }}>JavaScript Algorithms and Data Structures (Udemy)</Typography>
                </Box >
                <Box component='div' sx={{ py: 0.5 }}>
                    <Typography sx={{ fontWeight: '600' }}>Front-End Track (she codes;)</Typography>
                    <Typography >
                        Web (HTML5, CSS3, JavaScript), JS ES6+, OOP in JS, AJAX, Typescript, Node.js , React.js + Redux.
                    </Typography>
                </Box >
            </Box>
        </Box>
    )
}

export default About;