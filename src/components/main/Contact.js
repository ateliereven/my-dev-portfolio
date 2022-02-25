import React, { useState } from "react";
import { init } from '@emailjs/browser';
import { send } from 'emailjs-com';
import { Typography, Container, Button, Box, Grid, TextField, InputAdornment } from "@mui/material";
import AccountCircle from '@mui/icons-material/AccountCircle';
import EmailIcon from '@mui/icons-material/Email';
import ChatIcon from '@mui/icons-material/Chat';
import SendIcon from '@mui/icons-material/Send';


export default function Contact() {

    const defaultInputValues = {
        name: '',
        email: '',
        message: ''
    };
    const [formInputs, setFormInputs] = useState(defaultInputValues);
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState(false);
    let missingInputError;
    let emailError;


    const handleChange = e => {
        setFormInputs({ ...formInputs, [e.target.id]: e.target.value });
    }

    // email validation:
    const validateEmails = (email) => {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (re.test(email) === false) return 'Please enter a valid email address';
    }
    //form validation
    const isValid = () => {
        if (!formInputs.name || !formInputs.message) {
            missingInputError = "This field is required";
        }
        //if no emails have been entered provide an empty string. if there are emails run the function:
        emailError = validateEmails(formInputs.email || '');
        if (missingInputError || emailError) {
            setError(true);
            console.log(emailError)
            return false;
        } else return true;
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (isValid()) {
            init(process.env.REACT_APP_EMAILJS_USER_ID);
            send(
                process.env.REACT_APP_EMAILJS_SERVICE_ID,
                process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
                formInputs,
                process.env.REACT_APP_EMAILJS_USER_ID
            )
                .then((response) => {
                    console.log('SUCCESS!', response.status, response.text);
                    setSubmitted(true);
                    setFormInputs(defaultInputValues);
                    setError(false);
                    emailError = '';
                    missingInputError = '';
                })
                .catch((err) => {
                    console.log('FAILED...', err);
                });
        }
    }

    return (
        <Box
            component="div"
            id="contact"
            sx={{ backgroundImage: 'linear-gradient(rgba(255, 0, 0, 0), #4f7377 88%)', pb: 10 }}>
            <Container maxWidth="md">
                <Typography variant="h4" color="primary.dark" sx={{ pb: 3, pt: 3 }}>
                    Contact Me
                </Typography>
                <Container maxWidth="sm" sx={{ alignItems: 'center', justifyContent: 'center' }}>
                    {!submitted ?
                        <Box
                            component="form"
                            autoComplete="off"
                            noValidate
                            onSubmit={handleSubmit}
                            sx={{
                                '& .MuiOutlinedInput-root': { borderRadius: '15px', backgroundColor: 'secondary.light' },
                                '& .MuiInputLabel-root': { color: 'black', top: '-10px' },
                                '& .MuiTextField-root': { m: 2.5, minWidth: '85%' }
                            }}
                        >
                            <Grid container >
                                <Grid item xs={12}>
                                    <TextField
                                        required
                                        id="name"
                                        label="Name"
                                        value={formInputs.name}
                                        onChange={e => handleChange(e)}
                                        placeholder="Please enter name"
                                        size="small"
                                        InputProps={{
                                            startAdornment: (
                                                <InputAdornment position="start">
                                                    <AccountCircle />
                                                </InputAdornment>
                                            ),
                                        }}
                                        error={error ? true : false}
                                        helperText={missingInputError}
                                    />
                                    <TextField
                                        required
                                        id="email"
                                        label="Email"
                                        value={formInputs.email}
                                        onChange={e => handleChange(e)}
                                        placeholder="Please enter email address"

                                        size="small"
                                        type="email"
                                        InputProps={{
                                            startAdornment: (
                                                <InputAdornment position="start">
                                                    <EmailIcon />
                                                </InputAdornment>
                                            ),
                                        }}
                                        error={error ? true : false}
                                        helperText={emailError}
                                    />

                                    <TextField
                                        required
                                        id="message"
                                        label="Message"
                                        value={formInputs.message}
                                        onChange={e => handleChange(e)}
                                        placeholder="Write me a message :)"
                                        multiline
                                        maxRows={6}
                                        InputProps={{
                                            startAdornment: (
                                                <InputAdornment position="start">
                                                    <ChatIcon />
                                                </InputAdornment>
                                            ),
                                        }}
                                        error={error ? true : false}
                                        helperText={missingInputError}
                                    />
                                </Grid>
                                <Grid container item sx={{ justifyContent: 'center' }} xs={11}>
                                    <Button variant="contained" color="info" type="submit" value="Send" endIcon={<SendIcon />} >
                                        Send
                                    </Button>
                                </Grid>
                            </Grid>
                        </Box>
                        : <Typography variant="h4" sx={{ m: 5 }}>
                            Thanks for getting in touch!
                        </Typography>
                    }
                </Container>
            </Container>
        </Box>
    )
}