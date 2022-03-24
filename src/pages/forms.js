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
import AdapterDateFns from '@mui/lab/AdapterDateFns'
import {
    DatePicker,
    LocalizationProvider
} from '@mui/lab'
import SentimentDissatisfiedIcon from '@mui/icons-material/SentimentDissatisfied'
import SentimentSatisfiedIcon from '@mui/icons-material/SentimentSatisfied'

import MasterPage from './../components/masterpage'
import {Title, Subtitle} from './../components/texts'
import CustomCard from './../components/cards'


export default function Forms(){
    return(
        <MasterPage>
            <Title value="Forms" />
            <Subtitle value="Forms should have the next style" />
            <br />
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <CustomCard>
                        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                            <Title value="Form example" />
                        </Box>
                        <Box sx={{pt:3, pb:1}}>
                            <Subtitle value="Basic Info" />
                            <br />
                            <Grid container spacing={3}>
                                <Grid item xs={12} sm={6}>
                                    <Typography sx={{fontWeight:'600', fontSize:14}}>First Name</Typography>
                                    <TextField
                                        variant="outlined"
                                        size="small"
                                        fullWidth
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <Typography sx={{fontWeight:'600', fontSize:14}}>Last Name</Typography>
                                    <TextField
                                        variant="outlined"
                                        size="small"
                                        fullWidth
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <Typography sx={{fontWeight:'600', fontSize:14}}>Gender</Typography>
                                    <FormControl size="small" fullWidth>
                                        <Select
                                            value={1}
                                        >
                                            <MenuItem value={1}>Female</MenuItem>
                                            <MenuItem value={2}>Male</MenuItem>
                                            <MenuItem value={3}>Other</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <Typography sx={{fontWeight:'600', fontSize:14}}>Birth date</Typography>
                                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                                        <DatePicker
                                            value={new Date()}
                                            renderInput={(params) => (
                                                <TextField
                                                    size="small"
                                                    fullWidth
                                                    {...params}
                                                />
                                            )}
                                        />
                                    </LocalizationProvider>
                                </Grid>
                                <Grid item xs={12}>
                                    <Typography sx={{fontWeight:'600', fontSize:14}}>Tell us about you</Typography>
                                    <TextField
                                        variant="outlined"
                                        size="small"
                                        fullWidth
                                        multiline
                                        rows={5}
                                        placeholder='Write a short description about you'
                                    />
                                </Grid>
                            </Grid>
                            <br />
                            <Subtitle value="Location Info" />
                            <br />
                            <Grid container spacing={3}>
                                <Grid item xs={12}>
                                    <Typography sx={{fontWeight:'600', fontSize:14}}>Full Address</Typography>
                                    <TextField
                                        variant="outlined"
                                        size="small"
                                        fullWidth
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <Typography sx={{fontWeight:'600', fontSize:14}}>State</Typography>
                                    <TextField
                                        variant="outlined"
                                        size="small"
                                        fullWidth
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <Typography sx={{fontWeight:'600', fontSize:14}}>City</Typography>
                                    <TextField
                                        variant="outlined"
                                        size="small"
                                        fullWidth
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <Typography sx={{fontWeight:'600', fontSize:14}}>Post Code</Typography>
                                    <TextField
                                        variant="outlined"
                                        size="small"
                                        fullWidth
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <Typography sx={{fontWeight:'600', fontSize:14}}>Country</Typography>
                                    <FormControl size="small" fullWidth>
                                        <Select
                                            value={1}
                                        >
                                            <MenuItem value={1}>Colombia</MenuItem>
                                            <MenuItem value={2}>Malaysia</MenuItem>
                                            <MenuItem value={3}>Romania</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <FormGroup>
                                        <FormControlLabel control={<Checkbox size="small" defaultChecked />} label="I'm planning to move to another city" />
                                    </FormGroup>
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                <Typography sx={{fontWeight:'600', fontSize:14}}>How comfortable do you feel moving to another city?</Typography>
                                <Stack spacing={2} direction="row" sx={{ mb: 1 }} alignItems="center">
                                    <SentimentDissatisfiedIcon />
                                    <Slider defaultValue={70}/>
                                    <SentimentSatisfiedIcon />
                                </Stack>
                                </Grid>
                            </Grid>
                            <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                                <Button sx={{mr:1, textTransform:'none'}} color="error" variant="contained">Cancel</Button>
                                <Button variant="contained" sx={{textTransform:'none'}}>
                                    Save
                                </Button>
                            </Box>
                        </Box>
                    </CustomCard>
                </Grid>
            </Grid>
        </MasterPage>
    )
}
