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
import {CustomCarousel, ElementCarousel } from './../components/carousel'

export default function Carousel(){

    return(
        <MasterPage>
            <Title value="Carousel" />
            <Subtitle value="All elements should be wrapped into ElementCarousel components, which should have a Title property" />
            <br />
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <CustomCard>
                        <CustomCarousel
                            value={0}
                        >
                            <ElementCarousel title={"A puppy"}>
                                <img 
                                    src="https://images.pexels.com/photos/2145878/pexels-photo-2145878.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                                    width="100%"
                                />
                            </ElementCarousel>
                            <ElementCarousel title={"A bored text"}>
                                <Typography variant="h1">This is a text</Typography>
                                <Typography variant="body">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In lorem tellus, egestas et condimentum in, pellentesque sit amet ex. Sed id tempus libero. In hac habitasse platea dictumst. Phasellus eget tincidunt est. Curabitur vel tempor nisi, id eleifend urna. Quisque eu varius lacus, sed condimentum ex. Donec imperdiet consectetur lacus sit amet venenatis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis quis luctus nisi. In hac habitasse platea dictumst. Curabitur non ultricies tortor. Integer imperdiet, diam ac finibus finibus, diam enim facilisis nibh, at imperdiet orci quam a libero. Morbi tincidunt eget dolor ac dictum. Nam scelerisque, nunc eget tempor hendrerit, ligula justo interdum risus, feugiat iaculis sapien enim vitae augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Morbi ultricies tincidunt sapien.</Typography>
                            </ElementCarousel>
                            <ElementCarousel title={"A more complex element"}>
                                <div style={{textAlign:'center'}}>
                                    <img
                                        src="https://images.pexels.com/photos/417173/pexels-photo-417173.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                                        width="100%"
                                    />
                                    <br />
                                    <label>A text with an image and a button</label>
                                    <br />
                                    <Button
                                        variant="contained"
                                        sx={{textTransform:'none'}}
                                        startIcon={
                                            <Icon>save</Icon>
                                        }
                                    >
                                        Save wallpaper
                                    </Button>
                                </div>
                            </ElementCarousel>
                        </CustomCarousel>
                    </CustomCard>
                </Grid>
            </Grid>
        </MasterPage>
    )
}