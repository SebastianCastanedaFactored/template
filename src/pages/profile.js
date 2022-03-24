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
    Chip,
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
import DeleteIcon from '@mui/icons-material/Delete'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import theme from './../themes'

import MasterPage from './../components/masterpage'
import {Title, Subtitle} from './../components/texts'
import CustomCard from './../components/cards'

export default function Profile(){
    return(
        <MasterPage>
            <Title value="Your Profile" />
            <Subtitle value="Please let us know you better" />
            <br />
            <Grid container spacing={3}>
                <Grid item xs={12} sm={4}>
                    <CustomCard color={theme.palette.primary.dark}>
                        <img alt="User" src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50" style={{width:'50%', aspectRatio:1, borderRadius:'50%', margin: '0 auto'}} />
                        <Box sx={{textAlign:'center'}}>
                            <br />
                            <hr style={{color:'white'}} />
                            <Typography sx={{mb:1, fontWeight:'600', fontSize:18, color:theme.palette.grey[100]}}>Ludovico Einaudi</Typography>
                            <Typography sx={{mb:1, fontWeight:'100', fontSize:14, color:theme.palette.grey[100]}}>Data Engineer</Typography>
                            <Typography sx={{mb:1, fontWeight:'500', fontSize:14, color:theme.palette.grey[300]}}>ludovico.einaudi@factored.ai</Typography>
                        </Box>
                    </CustomCard>
                    <br />
                    <CustomCard>
                        <div style={{marginBottom:20}}>
                            <Stack direction="row" justifyContent="space-between">
                                <Subtitle value="Your Skills" />
                                <Tooltip title="Add Skill">
                                    <IconButton aria-label="delete">
                                        <AddCircleOutlineIcon />
                                    </IconButton>
                                </Tooltip>
                            </Stack>
                        </div>
                        <Stack direction="row" flexWrap="wrap">
                            {['Python', 'React', 'Javascript', 'MySQL', 'TensorFlow', 'OpenCV'].map((item, key) => (
                                <Chip label={item} onDelete={() => alert('Delete ' + item)} sx={{mb:1, mr:1}} />
                            ))}
                        </Stack>
                    </CustomCard>
                </Grid>
                <Grid item xs={12} sm={8}>
                    <CustomCard>
                        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                            <Title value="Update Profile" />
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