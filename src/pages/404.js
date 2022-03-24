import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';

import theme from './../themes'
import CustomCard from './../components/cards'

export default function NotFound() {

    const login = () => {
        window.location.href='home'
    }

    return (
        <ThemeProvider theme={theme}>
            <Box sx={{ display: 'flex', minHeight:'100vh', backgroundColor:theme.palette.primary.main }}>
                <Container component="main" maxWidth="xs">
                    <CssBaseline />
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}
                    >
                        <img src="404.svg" style={{width:'80%', position: 'absolute', top: 0, bottom: 0, margin: 'auto'}} />
                    </Box>
                </Container>
            </Box>
        </ThemeProvider>
    );
}
