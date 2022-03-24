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

export default function CustomTabs(){

    const [selectedTab, setSelectedTab] = React.useState(0)

    const handleChangeTab = (event, newValue) => {
        setSelectedTab(newValue)
    }

    return(
        <MasterPage>
            <Title value="Tabs" />
            <Subtitle value="Component for tabs" />
            <br />
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <CustomCard>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                        <Tabs
                            value={selectedTab}
                            indicatorColor="primary"
                            textColor="primary"
                            onChange={handleChangeTab}
                            variant="scrollable"
                        >
                            <Tab label="First Tab" />
                            <Tab label="Second Tab" />
                            <Tab label="Third Tab" />
                        </Tabs>
                    </Box>
                    {selectedTab === 0 && (
                        <Grid>
                            <br />
                            <Typography>This is the component for the first tab</Typography>
                            <br />
                        </Grid>
                    )}
                    {selectedTab === 1 && (
                        <Grid>
                            <br />
                            <Typography>This is the component for the second tab</Typography>
                            <br />
                        </Grid>
                    )}
                    {selectedTab === 2 && (
                        <Grid>
                            <br />
                            <Typography>This is the component for the third tab</Typography>
                            <br />
                        </Grid>
                    )}
                    </CustomCard>
                </Grid>
            </Grid>
        </MasterPage>
    )
}