import React, { useState } from 'react'
import { Button, Grid, Modal } from '@material-ui/core'
// import Alert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';
import { DataGrid } from '@material-ui/data-grid';
// import InputAdornment from '@material-ui/core/InputAdornment';
// import { FormControl, MenuItem, Select, InputLabel } from '@material-ui/core';
// import InputLabel from '@material-ui/core/InputLabel';
// import MenuItem from '@material-ui/core/MenuItem';
// import FormHelperText from '@material-ui/core/FormHelperText';
// import FormControl from '@material-ui/core/FormControl';
// import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';
import Data from '../Data/Data';
// style
const useStyles = makeStyles((theme) => ({
    paper: {
        position: 'absolute',
        width: 400,
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
    err: {
        position: 'absolute',
        width: 400,
        height: 400,
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
    input: {
        "&:invalid": {
            border: "red solid 2px"
        }
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 200,
    },
}));

const getModalStyle = () => {
    const top = 50;
    const left = 50;

    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
        position: 'absolute',
        overflow: 'scroll',
        height: '100%',
        display: 'block'
    };
}




const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    { field: 'project', headerName: 'Project', width: 150 },
    { field: 'task', headerName: 'Task', width: 150 },

];





const Home = () => {
    const classes = useStyles();
    const [modalStyle] = useState(getModalStyle);

    const [open, setopen] = useState(false)

    const handleOpen = () => {
        setopen(true)
    }
    const handleClose = () => {
        setopen(false)
    }
    // 
    const [Datas, setdatas] = useState({

        project: "",
        task: "",
    })

    // 
    const checkEmpty = () => {

    }


    const body = (
        <div style={modalStyle} className={classes.paper} >
            <h2 id="simple-modal-title">Thêm task</h2>
            <div id="simple-modal-description">
                <Grid container spacing={4}  >
                    <Grid item xs={12}>
                        <TextField onChange={(e) => setdatas({ ...Datas, project: e.target.value })} id="standard-basic" label="project" />

                    </Grid>
                    <Grid item xs={12}>
                        <TextField onChange={(e) => setdatas({ ...Datas, task: e.target.value })} id="standard-basic" label="task" />

                    </Grid>

                </Grid>
                <br></br>
                <Button onClick={() => checkEmpty()} variant="contained" color="secondary">
                    Save
                </Button>

            </div>

        </div>
    )

    return (
        <div>

            <Button onClick={handleOpen} variant="contained" color="secondary">
                Thêm
            </Button>

            <div style={{ height: 400, width: '100%' }}>
                <DataGrid rows={Data} columns={columns} pageSize={5} checkboxSelection />
            </div>

            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
            >
                {body}
            </Modal>


        </div>
    )
}

export default Home
