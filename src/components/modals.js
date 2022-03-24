import * as React from 'react';
import {
    Box,
    Button,
    Container,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    Divider,
    Grid,
    IconButton,
} from '@mui/material';
import { styled } from "@mui/material/styles";
import CloseIcon from "@mui/icons-material/Close";
import theme from './../themes';
import CustomCard from './cards';
import Grow from '@mui/material/Grow';
import {Title, Subtitle} from './texts';

export function CustomModal(props){

    const {
        open,
        title,
        body,
        image,
        textPrimaryButton,
        onPrimaryButtonClick,
        severity,
        showSecondaryButton,
        textSecondaryButton,
        severitySecondaryButton,
        onSecondaryButtonClick,
        showTertiaryButton,
        textTertiaryButton,
        severityTertiaryButton,
        onTertiaryButtonClick,
        showDetails,
        textDetails,
        onDetailsClick
    } = props

    const getImage = (image, severity) => {
        if (image){
            return image
        }
        else {
            switch (severity){
                case ("success"):
                    return "confirm.png"
                case ("warning"):
                    return "alert.png"
                case ("error"):
                    return "cancel.png"
                case ("info"):
                    return "question.png"
            }
        }
    }

    return(
        <Dialog
            open={open}
        >
            <DialogContent>
                <Grow in={open} {...(open ? { timeout: 1000 } : {})}>
                    <img
                        src={getImage(image, severity)}
                        style={{width:'20%', margin: '0 40%'}}
                    />
                </Grow>
                <br />
                <Box sx={{textAlign:'center'}}>
                    <br />
                    <Title value={title} />
                    <Subtitle value={body} />
                    <br />
                    <Grid container spacing={1} justifyContent="center">
                        <Grid item>
                            <Button
                                variant="contained"
                                sx={{textTransform:'none'}}
                                onClick={() => onPrimaryButtonClick()}
                            >
                                {textPrimaryButton}
                            </Button>
                        </Grid>
                        {showSecondaryButton && (
                            <Grid item>
                                <Button
                                    variant="contained"
                                    sx={{textTransform:'none'}}
                                    onClick={() => onSecondaryButtonClick()}
                                    color={severitySecondaryButton}
                                >
                                    {textSecondaryButton}
                                </Button>
                            </Grid>
                        )}
                        {showTertiaryButton && (
                            <Grid item>
                                <Button
                                    variant="contained"
                                    sx={{textTransform:'none'}}
                                    onClick={() => onTertiaryButtonClick()}
                                    color={severityTertiaryButton}
                                >
                                    {textTertiaryButton}
                                </Button>
                            </Grid>
                        )}
                    </Grid>
                </Box>
            </DialogContent>
            {showDetails && (
                <>
                    <Divider />
                    <DialogActions sx={{justifyContent:'center'}}>
                        <Button
                            sx={{textTransform:'none', textDecoration:'underline'}}
                            onClick={() => onDetailsClick()}
                        >
                            {textDetails}
                        </Button>
                    </DialogActions>
                </>
            )}
        </Dialog>
    )
}

export const BootstrapModal = styled(Dialog)(({ theme }) => ({
    "& .MuiDialogContent-root": {
        padding: theme.spacing(2),
    },
    "& .MuiDialogActions-root": {
        padding: theme.spacing(1),
    },
}))

export const BootstrapModalTitle = (props) => {
    const { children, onClose, ...other } = props;

    return (
        <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
            {children}
            {onClose ? (
                <IconButton
                    aria-label="close"
                    onClick={onClose}
                    sx={{
                        position: "absolute",
                        right: 8,
                        top: 8,
                        color: (theme) => theme.palette.grey[500],
                      }}
                >
                    <CloseIcon />
                </IconButton>
              ) : null}
        </DialogTitle>
    );
};
