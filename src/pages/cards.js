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

export default function Cards(){
    return(
        <MasterPage>
            <Title value="Cards" />
            <Subtitle value="Some example cards" />
            <br />
            <Grid container spacing={3}>
                <Grid item xs={12} md={4}>
                    <CustomCard>
                        <Box sx={{display:'flex', justifyContent:'space-between', mb:'32px'}}>
                            <Typography variant="h6" sx={{fontWeight:'bold'}}>
                                Users
                            </Typography>
                            <AccountCircleIcon sx={{ fontSize: 64 }} />
                        </Box>
                        <Typography variant="h5">
                            1,234
                        </Typography>
                        <Typography variant="body2" sx={{color:theme.palette.grey[700], fontWeight:'300', mb:'10px'}}>
                            Active Users
                        </Typography>
                    </CustomCard>
                </Grid>
                <Grid item xs={12} md={4}>
                    <CustomCard color={theme.palette.primary.main}>
                        <Box sx={{display:'flex', justifyContent:'space-between', mb:'32px'}}>
                            <Typography color="secondary" variant="h6" sx={{fontWeight:'bold'}}>
                                Users
                            </Typography>
                            <AccountCircleIcon sx={{ fontSize: 64, color:theme.palette.secondary.main }} />
                        </Box>
                        <Typography variant="h5" color="secondary">
                            1,234
                        </Typography>
                        <Typography variant="body2" sx={{color:theme.palette.grey[200], fontWeight:'300', mb:'10px'}}>
                            Active Users
                        </Typography>
                    </CustomCard>
                </Grid>
                <Grid item xs={12} md={4}>
                    <CustomCard color={theme.palette.secondary.main}>
                        <Box sx={{display:'flex', justifyContent:'space-between', mb:'32px'}}>
                            <Typography color="primary" variant="h6" sx={{fontWeight:'bold'}}>
                                Users
                            </Typography>
                            <AccountCircleIcon sx={{ fontSize: 64, color:theme.palette.primary.main }} />
                        </Box>
                        <Typography variant="h5" color="primary">
                            1,234
                        </Typography>
                        <Typography variant="body2" sx={{color:theme.palette.grey[800], fontWeight:'300', mb:'10px'}}>
                            Active Users
                        </Typography>
                    </CustomCard>
                </Grid>
            </Grid>
        </MasterPage>
    )
}