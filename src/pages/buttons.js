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

import MasterPage from './../components/masterpage'
import {Title, Subtitle} from './../components/texts'

export default function Buttons(){
    return(
        <MasterPage>
            <Title value="Buttons" />
            <Subtitle value="These are the main buttons. All Icon Buttons should have a Tooltip." />
            <br />
            <Grid container spacing={3}>
                <Grid item>
                    <Button
                        variant="contained"
                        sx={{textTransform:'none'}}
                        startIcon={
                            <Icon>save</Icon>
                        }
                    >
                        Save
                    </Button>
                </Grid>
                <Grid item>
                    <Button
                        variant="outlined"
                        sx={{textTransform:'none'}}
                        startIcon={
                            <Icon>add</Icon>
                        }
                    >
                        Add new
                    </Button>
                </Grid>
                <Grid item>
                    <Button
                        variant="contained"
                        sx={{textTransform:'none'}}
                        startIcon={
                            <Icon>send</Icon>
                        }
                        disabled
                    >
                        Send
                    </Button>
                </Grid>
                <Grid item>
                    <Button
                        variant="contained"
                        sx={{textTransform:'none'}}
                        startIcon={
                            <Icon>check</Icon>
                        }
                        color="success"
                    >
                        Success
                    </Button>
                </Grid>
                <Grid item>
                    <Button
                        variant="contained"
                        sx={{textTransform:'none'}}
                        startIcon={
                            <Icon>warning</Icon>
                        }
                        color="warning"
                    >
                        Warning
                    </Button>
                </Grid>
                <Grid item>
                    <Button
                        variant="contained"
                        sx={{textTransform:'none'}}
                        startIcon={
                            <Icon>warning</Icon>
                        }
                        color="error"
                    >
                        Danger
                    </Button>
                </Grid>
                <Grid item>
                    <Button
                        variant="contained"
                        sx={{textTransform:'none'}}
                        startIcon={
                            <Icon>info</Icon>
                        }
                        color="info"
                    >
                        Info
                    </Button>
                </Grid>
                <Grid item>
                    <Tooltip title="Add">
                        <IconButton color="primary">
                            <Icon>add_circle_outline</Icon>
                        </IconButton>
                    </Tooltip>
                </Grid>
                <Grid item>
                    <Tooltip title="Delete">
                        <IconButton color="error">
                            <Icon>delete</Icon>
                        </IconButton>
                    </Tooltip>
                </Grid>
            </Grid>
        </MasterPage>
    )
}