import * as React from 'react';
import {
    Avatar,
    Box,
    Button,
    ButtonBase,
    Collapse,
    Container,
    CssBaseline,
    Divider,
    Grid,
    IconButton,
    Link,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Paper,
    Toolbar,
    Tooltip,
    Typography,
} from '@mui/material';
import theme from './../themes'

function Title (props){
    return(
        <Typography
            variant="h5"
            sx={{
                color: props.color ? props.color : theme.palette.grey[900],
                fontWeight:'bold'
            }}
        >
            {props.value}
        </Typography>
    )
}

function Subtitle (props){
    return(
        <Typography
            variant="h6"
            sx={{
                color: props.color ? props.color : theme.palette.grey[700],
                fontWeight:'100'
            }}
        >
            {props.value}
        </Typography>
    )
}

export {Title, Subtitle}