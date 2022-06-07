import { Link, Tooltip, Toolbar, Typography, Stack, Box } from "@mui/material";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';

const Footer = () => {

    return <Box component="footer" position="absolute" sx={{ top: 'auto', bottom: 0, width: '100%' }}>
        <Toolbar sx={{ justifyContent: 'center', borderTop: 'white 1px solid', ml: 3, mr: 3 }}>
            <Stack direction="row" spacing={1.5} sx={{ alignItems: 'center' }}>
                <Typography variant="body2" color="secondary.light">&copy; 2022 Orly Even </Typography>
                <Typography color="secondary.light">|</Typography>
                <Tooltip title="view Github profile">
                        <Link color="secondary.light" href="https://github.com/ateliereven" target="_blank" aria-label="view Github profile">
                            <GitHubIcon />
                        </Link>
                </Tooltip>
                <Tooltip title="view Linkedin profile">
                    <Link color="secondary.light" href="https://www.linkedin.com/in/orly-even/" target="_blank" aria-label="view Linkedin profile">
                            <LinkedInIcon />
                        </Link>
                </Tooltip>
                <Tooltip title="contact me">
                    <Link color="secondary.light" href="mailto:orly@atelier-even.com" target="_blank" aria-label="contact">
                            <EmailIcon />
                        </Link>
                </Tooltip>
            </Stack>
        </Toolbar>
    </Box>
}

export default Footer;