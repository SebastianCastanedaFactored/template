import React, { useState, useEffect, useMemo } from 'react'
import {
    Avatar,
    Divider,
    Grid,
    IconButton,
    Paper,
    Typography,
} from '@material-ui/core'
import NoteAddOutlinedIcon from '@material-ui/icons/NoteAddOutlined'
import {useDropzone} from 'react-dropzone'
import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles({
    dropIcon: {
        width: '100%',
        color: 'black',
        marginBottom: '10px',
    },
    dropText: {
        color: '#aaa',
    },
    dropArea: {
        width: '100%',
        height: '300px',
        display: 'flex',
        alignItems: 'center',
        '&:hover': {
            opacity: 0.5,
            cursor: 'pointer',
        },
    },
    dropTextTitle: {
        fontSize: 14,
        fontWeight: 'bold',
        color: 'black'
    }
})

const baseStyle = {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderRadius: 20,
    borderColor: '#eeeeee',
    borderStyle: 'dashed',
    backgroundColor: '#f4f6f8',
    color: '#637381',
    outline: 'none',
    transition: 'border .24s ease-in-out',
    margin: 'auto',
}
  
  const activeStyle = {
    borderColor: '#1c717d'
}
  
  const acceptStyle = {
    borderColor: 'red'
}

const rejectStyle = {
    borderColor: 'green'
}

export default function FileUploader(props) {
    
    const {files, selectFiles, resetFiles, multipleFiles, acceptFiles} = props

    const {
        acceptedFiles,
        getRootProps,
        getInputProps,
        isDragActive,
        isDragAccept,
        isDragReject
    } = useDropzone({
        accept: acceptFiles,
        multiple: multipleFiles,
        onDropAccepted: (acceptedFiles) => {
            selectFiles(acceptedFiles)
        },
        onDropRejected: () => {alert('File not allowed')}
    });

    const style = useMemo(() => ({
        ...baseStyle,
        ...(isDragActive ? activeStyle : {}),
    }), [
        isDragActive,
        isDragReject,
        isDragAccept
    ]);

    const classes = useStyles()

    return(
        <Grid container direction={'column'} style={{height: '300px'}} justify='center' alignItems='center'>
            <div className={classes.dropArea}>
                <div {...getRootProps({style})}>
                    <input {...getInputProps()} />
                    <NoteAddOutlinedIcon fontSize='large' className={classes.dropIcon} />
                    <p style={{textAlign:'center'}}>
                        <label className={classes.dropTextTitle}>Drop or Select File</label>
                        <br />
                        <label>Drag and drop some files here, or click to select files</label>
                    </p>
                </div>
            </div>
        </Grid>
    )
}