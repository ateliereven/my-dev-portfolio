import React, { useState, useRef } from "react";
import { Field, Form } from 'react-final-form';
import { init } from '@emailjs/browser';
import { send } from 'emailjs-com';
import { Typography, Container, Button, Box, Grid, TextField, InputAdornment } from "@mui/material";
import AccountCircle from '@mui/icons-material/AccountCircle';
import EmailIcon from '@mui/icons-material/Email';
import ChatIcon from '@mui/icons-material/Chat';
import SendIcon from '@mui/icons-material/Send';
import Slide from '@mui/material/Slide';


export default function Contact() {
    const [submitted, setSubmitted] = useState(false);
    const containerRef = useRef(null);

    const FIELDS = [
        { label: 'Name', name: 'name', icon: <AccountCircle />, placeholder: 'Please enter your name' },
        { label: 'Email', name: 'email', icon: <EmailIcon />, placeholder: 'Please enter your email address' },
        { label: 'Message', name: 'message', icon: <ChatIcon />, placeholder: 'Drop me a message :)' },
    ];
    // create form fields:
    const renderFields = (fields) => {
        return fields.map((field) => {
            return (
                <Field
                    fullWidth
                    required
                    name={field.name}
                    component={renderInput}
                    label={field.label}
                    key={field.label}
                    icon={field.icon}
                    placeholder={field.placeholder}
                />
            )
        })
    }
    //Return an input element to the component prop of Field, and hook it with relevant properties deconstructed from formProps:  
    const renderInput = ({ input, label, meta, icon, placeholder }) => {
        return (
            <TextField
                label={label}
                name={input.name}
                value={input.value}
                onChange={input.onChange}
                error={meta.error && meta.touched ? true : false} // style as error
                helperText={meta.error && meta.touched ? `${meta.error}` : ''} // display an error message
                placeholder={placeholder}
                size={input.name !== 'message' ? "small" : ""}
                multiline={input.name !== 'message' ? false : true}
                maxRows={6}
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            {icon}
                        </InputAdornment>
                    ),
                }}
            />
        );
    }

    const onSubmit = (formValues) => {
        // send via emailjs:
        init(process.env.REACT_APP_EMAILJS_USER_ID);
        send(
            process.env.REACT_APP_EMAILJS_SERVICE_ID,
            process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
            formValues,
            process.env.REACT_APP_EMAILJS_USER_ID
        )
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
                setSubmitted(true);
            })
            .catch((err) => {
                console.log('FAILED...', err);
            });
    }


    // email validation:
    const validateEmails = (email) => {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (re.test(email) === false) return 'Please enter a valid email address';
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
                        <Form
                            onSubmit={onSubmit}
                            validate={(formValues) => {
                                const errors = {};
                                //if no emails have been entered provide an empty string. if there are emails run the function:
                                errors.email = validateEmails(formValues.email || '');
                                if (!formValues.name) errors.name = "Name is required";
                                if (!formValues.message) errors.message = "Email is required";
                                return errors;
                            }}
                            render={({ handleSubmit, submitting }) => (
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
                                            {renderFields(FIELDS)}
                                        </Grid>
                                        <Grid container item sx={{ justifyContent: 'center' }} xs={11}>
                                            <Button
                                                variant="contained"
                                                color="info"
                                                type="submit"
                                                value="Send"
                                                endIcon={<SendIcon />}
                                                disabled={submitting}>
                                                Send
                                            </Button>
                                        </Grid>
                                    </Grid>
                                </Box>
                            )}
                        />
                        : <Slide direction="up" in={submitted} mountOnEnter unmountOnExit container={containerRef.current}>
                            <Typography variant="h4" sx={{mt: 4}} >
                                Thanks for getting in touch!
                            </Typography>
                        </Slide>
                    }
                </Container>
            </Container>
        </Box>
    )

}