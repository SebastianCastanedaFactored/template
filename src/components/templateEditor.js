import * as React from 'react';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import {
    Alert,
    AlertTitle,
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
    TextField,
    Toolbar,
    Tooltip,
    Typography,
} from '@mui/material';

export default function TemplateEditor (props) {

    const {content, replacements} = props

    return(
        <Box sx={{display:'flex', lineHeight: '36px'}} flexWrap="wrap">
            {content.split(" ").map((item, key) => (
                <>
                    {item.startsWith("{") ?
                        <label style={{margin: '0 5px'}}>
                            {replacements(item.replace('{','').replace('}','').trim())}
                        </label>
                    :
                        <label>{item.concat("\xa0")}</label>
                    }
                </>
            ))}
        </Box>
    )
}