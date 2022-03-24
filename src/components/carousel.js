import * as React from 'react';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import {
    Alert,
    AlertTitle,
    Avatar,
    Box,
    Button,
    ButtonBase,
    Collapse,
    Container,
    CssBaseline,
    Divider,
    Grid,
    IconButton,
    Link,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Paper,
    Toolbar,
    Tooltip,
    Typography,
} from '@mui/material';
import Grow from '@mui/material/Grow';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord'
import theme from './../themes'
import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles({
    carouselContainer: {
        width: '100%',
        height: '100%',
    },
    carouselContent: {
        width: '80%',
        display: 'flex',
        justifyContent: 'center',
    },
    carouselContentWrapper: {
        display: 'flex',
        justifyContent: 'center',
    },
    carouselButtons: {
        width: '100%',
        height: '10%',
    }
})

function ElementCarousel (props) {
    return(
        <Grid style={{width:'100%', height:'100%'}}>
            {props.children}
        </Grid>
    )
}

function CustomCarousel (props) {

    const [value, setValue] = React.useState(props.value)

    const handleBack = () => {
        if (value == 0){
            setValue(props.children.length - 1)
        }
        else{
            setValue(value - 1)
        }
    }

    const handleNext = () => {
        if (value == props.children.length - 1){
            setValue(0)
        }
        else{
            setValue(value + 1)
        }
    }

    const classes = useStyles()

    return(
        <Grid className={classes.carouselContainer}>
            <Grid container direction="row" justifyContent="space-around" alignItems="center" className={classes.carouselContainer}>
                <Grid>
                    <IconButton onClick={() => handleBack(value)}>
                        <ChevronLeftIcon style={{color: theme.palette.primary.main}} />
                    </IconButton>
                </Grid>
                <div className={classes.carouselContent}>
                    <div style={{display: 'flex', justifyContent:'center'}}>
                        {props.children[value]}
                    </div>
                </div>
                <Grid>
                    <IconButton onClick={() => handleNext(value)}>
                        <ChevronRightIcon style={{color: theme.palette.primary.main}} />
                    </IconButton>
                </Grid>
            </Grid>
            <Grid container direction="row" justifyContent="center" className={classes.carouselButtons}>
                {props.children.map((item, key) => (
                    <Tooltip title={item.props.title}>
                        <IconButton onClick={() => setValue(key)}>
                            <FiberManualRecordIcon style={{color: key === value ? theme.palette.primary.main : '#DADADA'}} />
                        </IconButton>
                    </Tooltip>
                ))}
            </Grid>
        </Grid>
    )
}

export {CustomCarousel, ElementCarousel}