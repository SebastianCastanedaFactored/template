import * as React from 'react'
import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Alert,
    AlertTitle,
    Avatar,
    Box,
    Button,
    ButtonBase,
    Checkbox,
    CircularProgress,
    Collapse,
    Container,
    CssBaseline,
    Divider,
    FormControl,
    FormControlLabel,
    FormGroup,
    Grid,
    IconButton,
    Link,
    List,
    ListItem,
    ListItemAvatar,
    ListItemButton,
    ListItemIcon,
    ListItemSecondaryAction,
    ListItemText,
    Menu,
    MenuItem,
    Paper,
    Select,
    Slider,
    Snackbar,
    Stack,
    Step,
    StepLabel,
    Stepper,
    TextField,
    Tab,
    Tabs,
    Toolbar,
    Tooltip,
    Typography,
} from '@mui/material'
import Icon from '@mui/material/Icon'
import theme from './../themes'

import MasterPage from './../components/masterpage'
import {Title, Subtitle} from './../components/texts'
import CustomCard from './../components/cards'

export default function Overview(){
    return(
        <MasterPage>
            <Title value="Color" />
            <Subtitle value="These are the base colors" />
            <br />
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <CustomCard color={theme.palette.primary.main}>
                        <Typography variant="h1" sx={{color:'white'}}>{theme.palette.primary.main}</Typography>
                        <Typography sx={{color:'white'}}>
                            This is the main color. It's kind of blue navy color. It should be used for main purposes
                            as Save or Create buttons, titles or images.
                        </Typography>
                    </CustomCard>
                </Grid>
                <Grid item xs={6}>
                    <CustomCard color={theme.palette.primary.light}>
                        <Typography variant="h4" sx={{color:'white'}}>{theme.palette.primary.light}</Typography>
                        <Typography sx={{color:'white'}}>Light variant</Typography>
                    </CustomCard>
                </Grid>
                <Grid item xs={6}>
                    <CustomCard color={theme.palette.primary.dark}>
                        <Typography variant="h4" sx={{color:'white'}}>{theme.palette.primary.dark}</Typography>
                        <Typography sx={{color:'white'}}>Dark variant</Typography>
                    </CustomCard>
                </Grid>
            </Grid>
        </MasterPage>
    )
}