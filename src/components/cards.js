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

export default function CustomCard (props){
    return(
        <Paper
            sx={{
                display: 'flex',
                flexDirection: 'column',
                backgroundColor: props.color ? props.color : 'secondary',
                width: '100%',
                height: props.height ? props.height : 'auto',
                boxShadow: '0 1px 10px 0 rgba(0, 0, 0, 0.1)',
                borderRadius: '20px',
                padding: props.noPadding ? '0px' : '20px',
            }}
        >
            {props.children}
        </Paper>
    )
}