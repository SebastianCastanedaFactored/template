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
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import theme from './../themes'

import MasterPage from './../components/masterpage'
import {Title, Subtitle} from './../components/texts'
import CustomCard from './../components/cards'

export default function Alerts(){
    return(
        <MasterPage>
            <Title value="Alerts" />
            <Subtitle value="Some example alerts" />
            <br />
            <Grid container spacing={3}>
                <Grid item xs={6}>
                    <Alert variant="filled" severity="success" onClose={() => {}}>This is a success alert — check it out!</Alert>
                    <br />
                    <Alert variant="filled" severity="success" onClose={() => {}}>
                        <AlertTitle>Success</AlertTitle>
                        This is a success alert — <strong>check it out!</strong>
                    </Alert>
                </Grid>
                <Grid item xs={6}>
                    <Alert variant="filled" severity="warning" onClose={() => {}}>This is a warning alert — check it out!</Alert>
                    <br />
                    <Alert variant="filled" severity="warning" onClose={() => {}}>
                        <AlertTitle>Warning</AlertTitle>
                        This is a warning alert — <strong>check it out!</strong>
                    </Alert>
                </Grid>
                <Grid item xs={6}>
                    <Alert variant="filled" severity="error" onClose={() => {}}>This is an error alert — check it out!</Alert>
                    <br />
                    <Alert variant="filled" severity="error" onClose={() => {}}>
                        <AlertTitle>Error</AlertTitle>
                        This is an error alert — <strong>check it out!</strong>
                    </Alert>
                </Grid>
                <Grid item xs={6}>
                    <Alert variant="filled" severity="info" onClose={() => {}}>This is an info alert — check it out!</Alert>
                    <br />
                    <Alert variant="filled" severity="info" onClose={() => {}}>
                        <AlertTitle>Info</AlertTitle>
                        This is an info alert — <strong>check it out!</strong>
                    </Alert>
                </Grid>
            </Grid>
        </MasterPage>
    )
}