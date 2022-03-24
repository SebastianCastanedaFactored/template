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
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import theme from './../themes'

import MasterPage from './../components/masterpage'
import {Title, Subtitle} from './../components/texts'
import CustomCard from './../components/cards'

const accordionTitles = ['First Item', 'Second Item', 'Third Item']

export default function Accordions(){

    const [expandedPanel, setExpandedPanel] = React.useState(null)

    const getContentAccordion = (panel) => {
        switch(panel) {
            case 0:
                return (
                    <>
                        <Title value={"First Element"} />
                        <Subtitle value={"Place your components for first accordion here"} />
                    </>
                )
            case 1:
                return (
                    <>
                        <Title value={"Second Element"} />
                        <Subtitle value={"Place your components for second accordion here"} />
                    </>
                )
            case 2:
                return (
                    <>
                        <Title value={"Third Element"} />
                        <Subtitle value={"Place your components for third accordion here"} />
                    </>
                )
        }
    }

    return(
        <MasterPage>
            <Title value="Accordions" />
            <Subtitle value="Component for accordions" />
            <br />
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <CustomCard>
                        {accordionTitles.map((title, key) => (
                            <Accordion
                                expanded={expandedPanel === key}
                                onChange={() => setExpandedPanel(expandedPanel === key ? null : key)}
                                disableGutters
                                style={{
                                    backgroundColor: expandedPanel === key ? theme.palette.primary.main : '#f7f7f7',
                                    color: expandedPanel === key ? 'white' : 'black',
                                }}
                            >
                                <AccordionSummary expandIcon={<ExpandMoreIcon style={{color: expandedPanel === key ? 'white' : 'black'}} />}>
                                    <Typography>{title}</Typography>
                                </AccordionSummary>
                                <AccordionDetails style={{height:'300px', overflow:'auto', backgroundColor:'white'}}>
                                    {getContentAccordion(key)}
                                </AccordionDetails>
                            </Accordion>
                        ))}
                        
                    </CustomCard>
                </Grid>
            </Grid>
        </MasterPage>
    )
}