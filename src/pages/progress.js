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

export default function Progress(){
    return(
        <MasterPage>
            <Title value="Spinners" />
            <Subtitle value="Spinners are useful to indicate content is loading or actions are in progress" />
            <br />
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <CustomCard>
                        <CircularProgress />
                    </CustomCard>
                </Grid>
            </Grid>
        </MasterPage>
    )
}