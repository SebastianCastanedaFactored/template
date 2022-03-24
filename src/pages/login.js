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

function Copyright(props) {
    return (
        <Typography variant="body2" align="center" {...props} style={{color: theme.palette.grey[400]}}>
            {'Copyright © '}
            <Link color="inherit" href="https://mui.com/">
                Factored
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    )
}

export default function Login() {

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
                            marginTop: 8,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >
                        <CustomCard>
                            <Box
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                }}
                            >
                                    <img src="factored_logo.png" style={{width:'50%'}} />
                                    <Box component="form" sx={{ mt: 1, width:'100%' }}>
                                        <br />
                                        <Typography sx={{fontWeight:'600', fontSize:14}}>Email</Typography>
                                        <TextField
                                            variant="outlined"
                                            size="small"
                                            fullWidth
                                        />
                                        <br /><br />
                                        <Typography sx={{fontWeight:'600', fontSize:14}}>Password</Typography>
                                        <TextField
                                            variant="outlined"
                                            size="small"
                                            fullWidth
                                        />
                                        <FormControlLabel
                                            control={<Checkbox value="remember" color="primary" />}
                                            label="Remember me"
                                        />
                                        <Button
                                            fullWidth
                                            variant="contained"
                                            sx={{ mt: 3, mb: 2, textTransform:'none' }}
                                            onClick={() => login()}
                                        >
                                            Sign In
                                        </Button>
                                        <hr />
                                        <Button
                                            fullWidth
                                            variant="contained"
                                            startIcon={<GoogleIcon />}
                                            sx={{mt: 3, backgroundColor: '#DB4437', textTransform:'none'}}
                                        >
                                            Sign in with Google
                                        </Button>
                                        <Button
                                            fullWidth
                                            variant="contained"
                                            startIcon={<FacebookIcon />}
                                            sx={{mt: 3, mb: 3, backgroundColor: '#4267B2', textTransform:'none'}}
                                        >
                                            Sign in with Facebook
                                        </Button>
                                    </Box>
                            </Box>
                        </CustomCard>
                        <Grid container sx={{mt:1}}>
                            <Grid item xs>
                                <Link href="#" variant="body2" style={{color: 'white'}}>
                                    Forgot password?
                                </Link>
                            </Grid>
                            <Grid item>
                                <Link href="register" variant="body2" style={{color: 'white'}}>
                                    Don't have an account? Sign Up
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                <Copyright sx={{ mt: 8, mb: 4 }} />
                </Container>
            </Box>
        </ThemeProvider>
    );
}
