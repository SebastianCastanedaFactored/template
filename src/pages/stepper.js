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
import CustomCard from './../components/cards'

const steps = ['First Step', 'Second Step', 'Third Step'];

export default function CustomStepper(){

    const [activeStep, setActiveStep] = React.useState(0)

    return(
        <MasterPage>
            <Title value="Stepper" />
            <Subtitle value="Component for stepper or wizard" />
            <br />
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <CustomCard>
                        <Box sx={{ width: '100%' }}>
                            <Stepper activeStep={activeStep}>
                                {steps.map((label, index) => {
                                const stepProps = {};
                                const labelProps = {};
                                return (
                                    <Step key={label} {...stepProps}>
                                        <StepLabel {...labelProps}>{label}</StepLabel>
                                    </Step>
                                );
                                })}
                            </Stepper>
                            <React.Fragment>
                                {activeStep === 0 && (
                                    <Grid>
                                        <br />
                                        <Typography>This is the component for the first step</Typography>
                                        <br />
                                    </Grid>
                                )}
                                {activeStep === 1 && (
                                    <Grid>
                                        <br />
                                        <Typography>This is the component for the second step</Typography>
                                        <br />
                                    </Grid>
                                )}
                                {activeStep === 2 && (
                                    <Grid>
                                        <br />
                                        <Typography>This is the component for the third step</Typography>
                                        <br />
                                    </Grid>
                                )}
                                {activeStep === steps.length && (
                                    <Grid>
                                        <br />
                                        <Typography>All steps completed</Typography>
                                        <br />
                                    </Grid>
                                )}
                                <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                                    <Button
                                        variant="outlined"
                                        disabled={activeStep === 0}
                                        onClick={() => setActiveStep(activeStep-1)}
                                        sx={{ mr: 1, textTransform:'none'}}
                                    >
                                        Back
                                    </Button>
                                    <Box sx={{ flex: '1 1 auto' }} />
                                    <Button sx={{mr:1, textTransform:'none'}} color="error" variant="contained" onClick={() => setActiveStep(0)}>Reset</Button>
                                    <Button variant="contained" onClick={() => setActiveStep(activeStep+1)} sx={{textTransform:'none'}}>
                                        {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                                    </Button>
                                </Box>
                            </React.Fragment>
                        </Box>
                    </CustomCard>
                </Grid>
            </Grid>
        </MasterPage>
    )
}