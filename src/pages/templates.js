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
import TemplateEditor from './../components/templateEditor'

const templateExample1 = `This a template example. It contains some input fields as {textfield1} or {textfield2} or {select1} . It's pretty important take into account thar input field should be wrapped into curly braces and they can't have any type of character immediately before of after the curly braces.`

const templateExample2 = `Factored {jobTitle} with {yearsOfExperience} + years of experience in {background} and {background} . Known for being {softSkillAdjectives} in all tasks. Recent projects include {project} and {project} .` 

export default function Templates(){

    const replaceEditor1 = (name) => {
        switch(name){
            case ("textfield1"):
                return (
                    <TextField
                        variant="standard"
                        placeholder="Text Field 1"
                    />
                )
            case ("select1"):
                return (
                    <FormControl variant="standard">
                        <Select
                            value={0}
                        >
                            <MenuItem value={0}>Select an Option</MenuItem>
                            <MenuItem value={1}>Option 1</MenuItem>
                            <MenuItem value={2}>Option 2</MenuItem>
                            <MenuItem value={3}>Option 3</MenuItem>
                        </Select> 
                    </FormControl>
                )
            case ("textfield2"):
            return (
                <TextField
                    variant="standard"
                    placeholder="Text Field 2"
                />
            )
        }
    }

    const replaceEditor2 = (name) => {
        switch(name){
            case ("jobTitle"):
                return (
                    <TextField
                        variant="standard"
                        placeholder="Job Title"
                    />
                )
            case ("yearsOfExperience"):
                return (
                    <FormControl variant="standard">
                        <Select
                            value={0}
                        >
                            <MenuItem value={0}>Select number of years</MenuItem>
                            <MenuItem value={1}>1</MenuItem>
                            <MenuItem value={2}>2</MenuItem>
                            <MenuItem value={3}>3</MenuItem>
                        </Select> 
                    </FormControl>
                )
            case ("background"):
                return (
                    <TextField
                        variant="standard"
                        placeholder="Background"
                    />
                )
            case ("softSkillAdjectives"):
                return (
                    <TextField
                        variant="standard"
                        placeholder="Soft Skills"
                    />
                )
            case ("project"):
                return (
                    <TextField
                        variant="standard"
                        placeholder="Project"
                    />
                )
        }
    }

    return(
        <MasterPage>
            <Title value="Template Editor" />
            <Subtitle value="Component to update Bio templates" />
            <br />
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <CustomCard>
                        <TemplateEditor content={templateExample1} replacements={replaceEditor1} />
                        <Toolbar />
                        <TemplateEditor content={templateExample2} replacements={replaceEditor2} />
                        <Toolbar />
                    </CustomCard>
                </Grid>
            </Grid>
        </MasterPage>
    )
}