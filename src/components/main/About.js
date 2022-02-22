import React from "react";
import { Typography, Stack, Button, Box } from "@mui/material";

const About = () => {
    const skills = ['JavaScript', 'ES6+', 'HTML5', 'CSS3', 'React.js', 'Redux', 'Node.js', 'Express', 'MongoDB', 'jQuery', 'Sass', 'Bootstrap', 'Meterial-UI', 'Git'];
    const extraSkills = ['Photoshop', 'Illustrator', 'In-design', 'AutoCAD', 'Sketchup', 'Kerkythea', 'V-ray'];

    return (
        <Box id="about" component="div" sx={{ display: 'flex', flexDirection: 'column', justifyContent:'center' }}>
        <Typography variant="h3" color="primary.dark" sx={{ pb: 2, pt: 2 }}>
            About
        </Typography>
        <Typography sx={{ textAlign: 'justify' }}>
            A creative self-taught web developer and architect (M.A) with high analytical & design skills, shifting to the high-tech industry. In search of my next professional challenge, and eager to experiment with new programming technologies, I am currently seeking a position in Frontend/Fullstack Development.
        </Typography>
        <Typography sx={{ textAlign: 'justify' }}>
            I also hold over 10 years of work experience in architectural planning and design of large-scale projects, alongside academic-teaching experience at the Technion (Israel Institute of Technology). My next work environment could benefit from my experience in web programming languages and advanced frameworks, and also from my knowledge and abilities as a detail-oriented architect.
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
                        sx={{ borderRadius: '18px', alignSelf: 'center', textTransform: 'none', margin: '6px !important', cursor: 'auto' }} >
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
                        color="primary"
                        sx={{ borderRadius: '18px', alignSelf: 'center', textTransform: 'none', margin: '6px !important', cursor: 'auto' }} >
                        {skill}
                    </Button>
                ))}
            </Stack>
        </Box>
        <Box component='div'>
            <Typography variant="h5" color="primary.dark" sx={{ pb: 0.5, pt: 2 }}>
                Courses I've completed:
            </Typography>
            <Box component='div' sx={{py: 0.5}}>
            <Typography sx={{ fontWeight: '600' }}>Node with React: Fullstack Web Development (Udemy)</Typography>
            <Typography sx={{ textAlign: 'justify' }}>
                Node.js, React.js, Redux, Express and MongoDB. Including OAuth, payments and emailing services using a backend server.
            </Typography>
            </Box >
            <Box component='div' sx={{ py: 0.5 }}>
                <Typography sx={{ fontWeight: '600' }}>Modern React with Redux (Udemy)</Typography>
                <Typography sx={{ textAlign: 'justify' }}>
                    React.js and Redux, including React Router, Webpack, Babel, hooks, context and CRUD apps.
                </Typography>
            </Box >
            <Box component='div' sx={{ py: 0.5 }}>
                <Typography sx={{ fontWeight: '600' }}>JavaScript Algorithms and Data Structures (Udemy)</Typography>
            </Box >
            <Box component='div' sx={{ py: 0.5 }}>
                <Typography sx={{ fontWeight: '600' }}>Front-End Track (she codes;)</Typography>
                <Typography sx={{ textAlign: 'justify' }}>
                    Web (HTML5, CSS3, JavaScript), JS ES6+, Typescript, Node.js , React.js + Redux
                </Typography>
            </Box >
        </Box>
        </Box>
    )
}

export default About;