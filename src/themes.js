import * as React from 'react';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            //main: 'rgb(44, 112, 153)',
            main: '#21646d',
        },
        secondary: {
            main: '#86e566',
        }
    }
})

export default theme