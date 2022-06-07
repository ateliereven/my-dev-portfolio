import React from "react";
import { Container, Box, Typography, Stack, Link, Button, IconButton, Tooltip, PaletteMode } from "@mui/material";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';

interface HeaderProps {
    mode: PaletteMode;
}

const Header: React.FC<HeaderProps> = ({mode}) => {
    return <div className="header">
        <div className={mode === 'light' ? "gradient" : 'dark-gradient'}>
        <Container className="slideDown" maxWidth="lg" sx={{display: 'flex', height: 'inherit'}}>
            <Box sx={{ display: 'inline-flex', flexDirection: 'column', margin: 'auto'}}>
                    <Typography variant="h1" color="primary.dark" sx={{ textShadow: '3px 3px 4px #96697b'}}>
                        <i>Orly Even</i>
                </Typography>
                <Typography variant="h3" color="primary.dark">
                    Junior Frontend / Fullstack Developer
                </Typography>
                    <Stack direction="row" spacing={0.2}>
                        <Button href="#about" variant="contained" color="info" size="large" sx={{borderRadius: '20px', height: '40px', alignSelf: 'center'}} >
                            About me
                        </Button>
                        <Box sx={{ flexGrow: 1 }}/>
                        <Tooltip title="view Github profile">
                        <IconButton  size="large" aria-label="view Github profile">
                            <Link href="https://github.com/ateliereven" target="_blank" >
                                    <GitHubIcon color="info" fontSize="large"/>
                            </Link>
                        </IconButton>
                        </Tooltip>
                        <Tooltip title="view Linkedin profile">
                        <IconButton color="info" size="large" aria-label="view Linkedin profile">
                            <Link href="https://www.linkedin.com/in/orly-even/" target="_blank" >
                                    <LinkedInIcon color="info" fontSize="large"/>
                        </Link>
                        </IconButton>
                        </Tooltip>
                        <Tooltip title="contact me">
                        <IconButton color="info" size="large" aria-label="contact">
                            <Link href="mailto:orly@atelier-even.com" target="_blank" >
                                    <EmailIcon color="info" fontSize="large"/>
                            </Link>
                        </IconButton>
                    </Tooltip>
                    </Stack>
            </Box>
        </Container>
        </div>
    </div>
}

export default Header;