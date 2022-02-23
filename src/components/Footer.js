import React from "react";
import { AppBar, Link, Tooltip, Toolbar, Typography, Stack } from "@mui/material";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';

const Footer = () => {
    return <AppBar position="absolute"  sx={{ top: 'auto', bottom: 0, backgroundColor: 'primary.dark' }}>
        <Toolbar sx={{ justifyContent: 'center' }}>
            <Stack direction="row" spacing={1.5} sx={{ alignItems: 'center' }}>
                <Typography variant="body2">&copy; 2022 Orly Even </Typography>
                <Typography>|</Typography>
                <Tooltip title="view Github profile">
                        <Link color="secondary" href="https://github.com/ateliereven" target="_blank" aria-label="view Github profile">
                            <GitHubIcon />
                        </Link>
                </Tooltip>
                <Tooltip title="view Linkedin profile">
                    <Link color="secondary" href="https://www.linkedin.com/in/orly-even/" target="_blank" aria-label="view Linkedin profile">
                            <LinkedInIcon />
                        </Link>
                </Tooltip>
                <Tooltip title="contact me">
                    <Link color="secondary" href="mailto:orly@atelier-even.com" target="_blank" aria-label="contact">
                            <EmailIcon />
                        </Link>
                </Tooltip>
            </Stack>
        </Toolbar>
    </AppBar>
}

export default Footer;