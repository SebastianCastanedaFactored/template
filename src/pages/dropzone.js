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
import DeleteIcon from '@material-ui/icons/Delete'
import FolderIcon from '@mui/icons-material/Folder'
import theme from './../themes'

import MasterPage from './../components/masterpage'
import {Title, Subtitle} from './../components/texts'
import CustomCard from './../components/cards'
import FileUploader from './../components/fileUploader'

export default function Buttons(){

    const [files, setFiles] = React.useState([])

    const selectFiles = (files) => {
        setFiles(files)
    }

    const resetFiles = () => {
        setFiles(null)
    }

    const deleteFile = (file) => {
        var newFiles = [...files]
        newFiles.splice(file, 1)
        setFiles(newFiles)
    }

    return(
        <MasterPage>
            <Title value="Dropzone" />
            <Subtitle value="Component for drag and drop files" />
            <br />
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <CustomCard>
                        {files.length === 0 ? (
                            <FileUploader
                                files={files}
                                selectFiles={selectFiles}
                                resetFiles={resetFiles}
                                multipleFiles={true}
                                acceptFiles="" //".pdf", ".jpeg"
                            />
                        ) : (
                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    <List dense="true">
                                        {files.map((item, key) => (
                                            <ListItem>
                                                <ListItemAvatar>
                                                    <Avatar sx={{backgroundColor: theme.palette.primary.main}}>
                                                        <FolderIcon />
                                                    </Avatar>
                                                </ListItemAvatar>
                                                <ListItemText primary={item.name}/>
                                                <ListItemSecondaryAction>
                                                    <Tooltip title="Delete">
                                                        <IconButton onClick={() => deleteFile(key)}>
                                                            <DeleteIcon color="error" />
                                                        </IconButton>
                                                    </Tooltip>
                                                </ListItemSecondaryAction>
                                            </ListItem>
                                        ))}
                                    </List>
                                </Grid>
                            </Grid>
                        )}
                    </CustomCard>
                </Grid>
            </Grid>
        </MasterPage>
    )
}