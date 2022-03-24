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
    DialogActions,
    DialogContent,
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
import Swal from 'sweetalert2'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import theme from './../themes'

import MasterPage from './../components/masterpage'
import {Title, Subtitle} from './../components/texts'
import CustomCard from './../components/cards'
import {CustomModal, BootstrapModal, BootstrapModalTitle} from './../components/modals'

export default function Modals(){

    const [modalOne, setModalOne] = React.useState(false)
    const [modalTwo, setModalTwo] = React.useState(false)
    const [modalThree, setModalThree] = React.useState(false)
    const [modalFour, setModalFour] = React.useState(false)
    const [modalFive, setModalFive] = React.useState(false)
    const [modalSix, setModalSix] = React.useState(false)
    const [modalContent, setModalContent] = React.useState(false)

    const showSweetAlert = (title, text, icon, confirmButtonText) => {
      Swal.fire({
          title: title,
          text: text,
          icon: icon,
          confirmButtonText: confirmButtonText,
      })
    }

    return(
        <MasterPage>
            <Title value="Modals" />
            <Subtitle value="Use this component to show feedback" />
            <br />
            <Grid container spacing={3}>
                <Grid item>
                    <Button
                        variant="contained"
                        sx={{textTransform:'none'}}
                        onClick={() => setModalOne(true)}
                    >
                        Show Generic Modal
                    </Button>
                    <CustomModal
                        open={modalOne}
                        title={'This is a generic alert'}
                        body={'It is useful to show neutral info'}
                        onPrimaryButtonClick={() => setModalOne(false)}
                        textPrimaryButton={'Ok, I understand!'}
                    />
                </Grid>
                <Grid item>
                    <Button
                        variant="contained"
                        sx={{textTransform:'none'}}
                        color={"success"}
                        onClick={() => setModalTwo(true)}
                    >
                        Show Success Modal
                    </Button>
                    <CustomModal
                        open={modalTwo}
                        severity={"success"}
                        title={'Good job'}
                        body={'Everything is Ok'}
                        onPrimaryButtonClick={() => setModalTwo(false)}
                        textPrimaryButton={'Continue'}
                    />
                </Grid>
                <Grid item>
                    <Button
                        variant="contained"
                        sx={{textTransform:'none'}}
                        color={"warning"}
                        onClick={() => setModalThree(true)}
                    >
                        Show Warning Modal
                    </Button>
                    <CustomModal
                        open={modalThree}
                        severity={"warning"}
                        title={"You've got an alert"}
                        body={'This is just an alert, you can ignore it'}
                        onPrimaryButtonClick={() => setModalThree(false)}
                        textPrimaryButton={'Continue'}
                    />
                </Grid>
                <Grid item>
                    <Button
                        variant="contained"
                        sx={{textTransform:'none'}}
                        color={"error"}
                        onClick={() => setModalFour(true)}
                    >
                        Show Error Modal
                    </Button>
                    <CustomModal
                        open={modalFour}
                        severity={"error"}
                        title={"An error occurred 😱"}
                        body={"Relax, we're working to fix it"}
                        onPrimaryButtonClick={() => setModalFour(false)}
                        textPrimaryButton={'Continue'}
                        showDetails={true}
                        textDetails={'Why am I getting this issue?'}
                        onDetailsClick={() => setModalFour(false)}
                    />
                </Grid>
                <Grid item>
                    <Button
                        variant="contained"
                        sx={{textTransform:'none'}}
                        color={"info"}
                        onClick={() => setModalFive(true)}
                    >
                        Show Info Modal
                    </Button>
                    <CustomModal
                        open={modalFive}
                        severity={"info"}
                        title={"Hey! What do u wanna know?"}
                        body={'Please check our Terms & Conditions'}
                        onPrimaryButtonClick={() => setModalFive(false)}
                        textPrimaryButton={'Continue'}
                    />
                </Grid>
                <Grid item>
                    <Button
                        variant="contained"
                        sx={{textTransform:'none'}}
                        onClick={() => setModalSix(true)}
                    >
                        Show Modal with all options
                    </Button>
                    <CustomModal
                        open={modalSix}
                        title={"Custom modal"}
                        body={'You can add custom images and additional buttons'}
                        image={'factored_logo.png'}
                        onPrimaryButtonClick={() => setModalSix(false)}
                        textPrimaryButton={'Continue'}
                        showSecondaryButton = {true}
                        textSecondaryButton = {'Secondary Button'}
                        severitySecondaryButton = {"success"}
                        onSecondaryButtonClick = {() => setModalSix(false)}
                        showTertiaryButton = {true}
                        textTertiaryButton = {'Tertiary Button'}
                        severityTertiaryButton = {"error"}
                        onTertiaryButtonClick = {() => setModalSix(false)}
                        showDetails={true}
                        textDetails={'Cancel'}
                        onDetailsClick={() => setModalSix(false)}
                    />
                </Grid>
            </Grid>
            <hr />
            <br />
            <Title value="Bootstrap Modal" />
            <Subtitle value="Use this component to include components whitin the dialog box" />
            <br />
            <Grid container spacing={3}>
                <Grid item>
                    <Button
                        variant="contained"
                        sx={{textTransform:'none'}}
                        onClick={() => setModalContent(true)}
                    >
                        Show Modal with content
                    </Button>
                    <BootstrapModal
                        onClick={() => setModalContent(false)}
                        aria-labelledby="customized-dialog-title"
                        open={modalContent}
                    >
                        <BootstrapModalTitle id="customized-dialog-title" onClose={() => setModalContent(false)}>
                            Modal title
                        </BootstrapModalTitle>
                        <DialogContent dividers>
                            <Typography gutterBottom>
                                Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
                                dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
                                consectetur ac, vestibulum at eros.
                            </Typography>
                            <Typography gutterBottom>
                                Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
                                Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.
                            </Typography>
                            <Typography gutterBottom>
                                Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus
                                magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec
                                ullamcorper nulla non metus auctor fringilla.
                            </Typography>
                        </DialogContent>
                        <DialogActions>
                            <Button variant="contained" onClick={() => setModalContent(false)} sx={{textTransform:'none'}}>
                                Save changes
                            </Button>
                        </DialogActions>
                    </BootstrapModal>
                </Grid>
            </Grid>
            <hr />
            <br />
            <Title value="Sweet Alert" />
            <Subtitle value="Use this component to show feedback" />
            <br />
            <Grid container spacing={3}>
                <Grid item>
                    <Button
                        variant="contained"
                        color={"success"}
                        sx={{textTransform:'none'}}
                        onClick={() => showSweetAlert(
                            'Success',
                            'Well done',
                            'success',
                            'Go on!'
                        )}
                    >
                        Show Success Modal
                    </Button>
                </Grid>
                <Grid item>
                    <Button
                        variant="contained"
                        color={"warning"}
                        sx={{textTransform:'none'}}
                        onClick={() => showSweetAlert(
                            'Warning',
                            'Done',
                            'warning',
                            'Let me continue!'
                        )}
                    >
                        Show Warning Modal
                    </Button>
                </Grid>
                <Grid item>
                    <Button
                        variant="contained"
                        color={"error"}
                        sx={{textTransform:'none'}}
                        onClick={() => showSweetAlert(
                            'Error',
                            'Sorry, something happened 😱',
                            'error',
                            'Ok!'
                        )}
                    >
                        Show Error Modal
                    </Button>
                </Grid>
                <Grid item>
                    <Button
                        variant="contained"
                        color={"info"}
                        sx={{textTransform:'none'}}
                        onClick={() => showSweetAlert(
                            'Info',
                            'All you need to know is that Factored is a great company!',
                            'info',
                            'Ok, got it!'
                        )}
                    >
                        Show Info Modal
                    </Button>
                </Grid>
            </Grid>
        </MasterPage>
    )
}
