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

export default function Notifications(){

    const [snackbarOne, setSnackbarOne] = React.useState(false)
    const [snackbarTwo, setSnackbarTwo] = React.useState(false)
    const [snackbarThree, setSnackbarThree] = React.useState(false)
    const [snackbarFour, setSnackbarFour] = React.useState(false)
    
    return(
        <MasterPage>
            <Title value="Notifications" />
            <Subtitle value="Notifications are an alternative to modals. Use them when you only need to show a dismissable and short message" />
            <br />
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Grid container spacing={3}>
                        <Grid item>
                            <Button
                                variant="contained"
                                sx={{textTransform:'none'}}
                                color="success"
                                onClick={() => setSnackbarOne(true)}>
                                Open success notification
                            </Button>
                            <Snackbar 
                                open={snackbarOne}
                                autoHideDuration={3000} 
                                anchorOrigin={{ vertical:'top', horizontal:'right' }}
                                onClose={() => setSnackbarOne(false)}>
                                <Alert onClose={() => setSnackbarOne(false)} severity="success" sx={{ width: '100%' }}>
                                    This is a success message!
                                </Alert>
                            </Snackbar>
                        </Grid>
                        <Grid item>
                            <Button
                                variant="contained"
                                sx={{textTransform:'none'}}
                                color="warning"
                                onClick={() => setSnackbarTwo(true)}>
                                Open warning notification
                            </Button>
                            <Snackbar 
                                open={snackbarTwo}
                                autoHideDuration={3000} 
                                anchorOrigin={{ vertical:'bottom', horizontal:'left' }}
                                onClose={() => setSnackbarTwo(false)}>
                                <Alert onClose={() => setSnackbarTwo(false)} severity="warning" sx={{ width: '100%' }}>
                                    This is a warning message!
                                </Alert>
                            </Snackbar>
                        </Grid>
                        <Grid item>
                            <Button
                                variant="contained"
                                sx={{textTransform:'none'}}
                                color="error"
                                onClick={() => setSnackbarThree(true)}>
                                Open error notification
                            </Button>
                            <Snackbar 
                                open={snackbarThree}
                                autoHideDuration={3000} 
                                anchorOrigin={{ vertical:'bottom', horizontal:'center' }}
                                onClose={() => setSnackbarThree(false)}>
                                <Alert onClose={() => setSnackbarThree(false)} severity="error" sx={{ width: '100%' }}>
                                    This is a error message!
                                </Alert>
                            </Snackbar>
                        </Grid>
                        <Grid item>
                            <Button
                                variant="contained"
                                sx={{textTransform:'none'}}
                                color="info"
                                onClick={() => setSnackbarFour(true)}>
                                Open info notification
                            </Button>
                            <Snackbar 
                                open={snackbarFour}
                                autoHideDuration={3000} 
                                anchorOrigin={{ vertical:'top', horizontal:'right' }}
                                onClose={() => setSnackbarFour(false)}>
                                <Alert onClose={() => setSnackbarFour(false)} severity="info" sx={{ width: '100%' }}>
                                    This is a info message!
                                </Alert>
                            </Snackbar>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </MasterPage>
    )
}