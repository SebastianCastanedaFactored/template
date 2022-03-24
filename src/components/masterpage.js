import * as React from 'react'
import { createTheme, ThemeProvider, styled } from '@mui/material/styles'
import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Alert,
    AlertTitle,
    Avatar,
    Badge,
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
import MuiAppBar from '@mui/material/AppBar'
import MuiDrawer from '@mui/material/Drawer'

import Icon from '@mui/material/Icon'
import MenuIcon from '@mui/icons-material/Menu'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined'
import EditIcon from '@mui/icons-material/Edit'
import { makeStyles } from '@material-ui/core/styles'

import theme from './../themes'

import {menu_data} from './menu'

export const useStyles = makeStyles({
    auxiliarCard: {
        mt: 1,
        mb: 1,
        width:'350px',
    },
    cardAvatar: {
        width:'100%',
        aspectRatio:1,
        borderRadius:'50%'
    },
    cardName: {
        fontWeight:'600',
        fontSize:18
    },
    cardJobTitle: {
        fontWeight:'100',
        fontSize:14,
        color:theme.palette.grey[700]
    },
    cardEmailIcon: {
        color:theme.palette.grey[500],
        fontSize:14
    },
    cardEmail: {
        fontWeight:'500',
        fontSize:14,
        color:theme.palette.grey[500]
    },
    toolbar: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        padding: '0px !important',
    },
    separator: {
        color: theme.palette.grey[600],
        fontSize:14,
        fontWeight:'100',
        paddingTop: 10,
        paddingBottom: 0
    },
    menuIcon: {
        color: theme.palette.grey[400]
    },
    content: {
        backgroundColor: '#f5f5f5',
        flexGrow: 1,
        height: '100vh',
        overflow: 'auto',
    },
    activeItem: {
        pl: 4,
        backgroundColor: '#ebf8f9 !important',
        borderRadius: '20px !important',
    },
    inactiveItem: {
        pl: 4,
        borderRadius: '20px !important',
    },
    activeLink: {
        width: '100%',
        color: theme.palette.primary.main + '!important',
        fontWeight: 'bold',
        borderRadius: '20px',
    },
    inactiveLink: {
        width: '100%',
        fontWeight: '100',
        borderRadius: '20px',
    },
})

const drawerWidth = 300;

const AppBar = styled(MuiAppBar, {shouldForwardProp: (prop) => prop !== 'open',})
    (({ theme, open }) => ({
        backgroundColor: '#f5f5f5',
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        ...(open && {
            marginLeft: drawerWidth,
            width: `calc(100% - ${drawerWidth}px)`,
            transition: theme.transitions.create(['width', 'margin'], {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.enteringScreen,
            }),
        }),
    })
);

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        '& .MuiDrawer-paper': {
            height: '100vh',
            backgroundColor: '#ffffff',
            borderWidth: 0,
            padding: '0 24px',
            position: 'relative',
            whiteSpace: 'nowrap',
            width: drawerWidth,
            transition: theme.transitions.create('width', {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.enteringScreen,
            }),
            boxSizing: 'border-box',
            ...(!open && {
                overflowX: 'hidden',
                padding: '0',
                transition: theme.transitions.create('width', {
                    easing: theme.transitions.easing.sharp,
                    duration: theme.transitions.duration.leavingScreen,
                }),
                width: theme.spacing(7),
                [theme.breakpoints.up('sm')]: {
                    width: 0,
                },
            }),
        },
    }),
);

const StyledMenu = styled((props) => (
    <Menu
      elevation={0}
      {...props}
    />
    ))(({ theme }) => ({
        '& .MuiPaper-root': {
        borderRadius: 20,
        padding: 20,
        marginTop: 10,
        minWidth: 180,
        boxShadow:
            'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
        '& .MuiMenu-list': {
            padding: '0',
        },
        '& .MuiMenuItem-root': {
            '& .MuiSvgIcon-root': {
            fontSize: 18,
            color: theme.palette.text.secondary,
            marginRight: theme.spacing(1.5),
            },
        },
        },
}));

export default function MasterPage(props) {
    const [open, setOpen] = React.useState(true)
    const [menu, setMenu] = React.useState(menu_data)
    const [showAuxMenu, setShowAuxMenu] = React.useState(false)
    const [anchorEl, setAnchorEl] = React.useState(null)

    const toggleDrawer = () => {setOpen(!open)};

    const toogleMenu = (option, submenu) => {
        var menu_temp = [...menu]
        menu_temp[option].options[submenu].open = !menu_temp[option].options[submenu].open
        setMenu(menu_temp)
    }

    const logout = () => {
        window.location.href = "login"
    }

    React.useEffect(() => {
        var menu_temp = [...menu]
        menu_temp.map((menu2, key2) => {
            menu2.options.map((menu3, key3) => {
                if (menu3.submenu.some(x => window.location.pathname === x.route)){
                    menu_temp[key2].options[key3].open = true
                }
            })
        })
        setMenu(menu_temp)
    }, []);

    const classes = useStyles()

    return (
        <ThemeProvider theme={theme}>
            <Box sx={{ display: 'flex' }}>
                <CssBaseline />
                <AppBar position={"absolute"} elevation={0} open={open}>
                    <Toolbar
                        sx={{
                            pr: '24px', // keep right padding when drawer closed
                            backgroundColor: theme.palette.primary.main
                        }}
                    >
                        <IconButton
                            edge="start"
                            onClick={toggleDrawer}
                            sx={{
                                marginRight: '36px',
                                color: theme.palette.grey[100]
                            }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Box sx={{ flexGrow: 1 }} />
                        <Box sx={{ display: 'flex'}} >
                            <Button id="auxMenu"  sx={{ p: 0, textTransform:'none' }} onClick={(e) => (setShowAuxMenu(!showAuxMenu), setAnchorEl(e.currentTarget))}>
                                <Avatar alt="User" src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50" sx={{m: '0 5px'}} />
                                <Typography
                                    variant="span"
                                    noWrap
                                    sx={{ flexGrow: 1, color: theme.palette.grey[100]}}
                                    >
                                    Hi, <b>Ludovico</b>
                                </Typography>
                                <KeyboardArrowDownIcon sx={{color: theme.palette.grey[100]}} />
                            </Button>
                            <StyledMenu
                                open={showAuxMenu}
                                anchorEl={anchorEl}
                                onClose={() => setShowAuxMenu(false)}
                            >
                                <>
                                    <Container disableGutters className={classes.auxiliarCard}>
                                        <Grid container spacing={3}>    
                                            <Grid item xs={12} sm={6} md={3}>
                                                <img
                                                    alt="User"
                                                    src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50"
                                                    className={classes.cardAvatar}
                                                />
                                            </Grid>
                                            <Grid item xs={12} sm={6} md={9} alignItems={'center'}>
                                                <Stack direction="row" justifyContent="space-between">
                                                    <Typography className={classes.cardName}>Ludovico Einaudi</Typography>
                                                    <Tooltip title="Update Profile">
                                                    <Link href="profile">
                                                        <EditIcon/>
                                                    </Link>
                                                    </Tooltip>
                                                </Stack>
                                                <Typography className={classes.cardJobTitle}>Data Engineer</Typography>
                                                <Stack spacing={1} direction="row" sx={{ mb: 1 }} alignItems="center">
                                                    <EmailOutlinedIcon className={classes.cardEmailIcon}/>
                                                    <Typography className={classes.cardEmail}>ludovico.einaudi@factored.ai</Typography>
                                                </Stack>
                                            </Grid>
                                        </Grid>
                                        <br />
                                        <Button
                                            variant="contained"
                                            color="error"
                                            sx={{textTransform:'none'}}
                                            startIcon={
                                                <Icon>logout</Icon>
                                            }
                                            fullWidth
                                            onClick={() => logout()}
                                        >
                                            Logout
                                        </Button>
                                    </Container>
                                </>
                            </StyledMenu>
                        </Box>
                    </Toolbar>
                </AppBar>
                <Drawer variant="permanent" open={open}>
                    <Toolbar className={classes.toolbar}>
                        <img src="factored_logo.png" style={{width:'50%'}} />
                    </Toolbar>
                    <Toolbar />
                    {menu.map((item, key) => (
                        <>
                            <Typography variant="span" className={classes.separator}>
                                {item.name}
                            </Typography>
                            <List>
                                {item.options.map((item2, key2) => (
                                    <>
                                    <ListItem button key={item2.name} onClick={() => toogleMenu(key, key2)} sx={{borderRadius: '20px'}}>
                                        <ListItemIcon>
                                            <Icon className={classes.menuIcon}>{item2.icon}</Icon>
                                        </ListItemIcon>
                                        <ListItemText sx={{color: theme.palette.grey[900]}} primary={item2.name}/>
                                        {item2.submenu && (
                                            <Icon className={classes.menuIcon}>
                                                {item2.open ? 'expand_less' : 'expand_more'}
                                            </Icon>
                                        )}
                                    </ListItem>
                                    <Collapse in={item2.open} timeout="auto" unmountOnExit>
                                        <List component="div" disablePadding>
                                            {item2.submenu && (
                                                item2.submenu.map((item3, key3) => (
                                                    <ListItem button key={item2.name} className={window.location.pathname === item3.route ? classes.activeItem : classes.inactiveItem}>
                                                        <Link href={item3.route} underline="none" color={theme.palette.grey[700]} className={window.location.pathname === item3.route ? classes.activeLink : classes.inactiveLink} >
                                                            {item3.name}
                                                        </Link>
                                                    </ListItem>
                                                ))
                                            )}
                                        </List>
                                    </Collapse>
                                    </>
                                ))}
                            </List>
                        </>
                    ))}
                </Drawer>
                <Box
                    component="main"
                    className={classes.content}
                >
                    <Toolbar />
                    <Container maxWidth="xl" sx={{ mt: 4, mb: 4 }}>
                        {props.children}
                    </Container>
                </Box>
            </Box>
        </ThemeProvider>
    );
}
