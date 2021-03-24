import { Card, TextField, Typography, fade,Button, CardActions, makeStyles, CardContent, Dialog, DialogActions, DialogTitle, DialogContent, DialogContentText} from '@material-ui/core';
import React, {useState} from 'react'
import auth from '../auth/auth-helper'
import {create} from './api-testimony'
import {Link} from 'react-router-dom'
const useStyles = makeStyles(theme => ({
    card: {
      maxWidth: 600,
      margin: 'auto',
      textAlign: 'center',
      marginTop: theme.spacing(5),
      paddingBottom: theme.spacing(2)
    },
    error: {
      verticalAlign: 'middle'
    },
    title: {
      marginTop: theme.spacing(2),
     
      color:"#ACD523",
      fontFamily:"Arial Black",
      fontSize:"30px",
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: 300
    },
    submit: {
    
      margin: 'auto',
      marginBottom: theme.spacing(2),
      backgroundColor:"#ACD523",
      '&:hover': {
        color: fade('#fff', 0.8),
        backgroundColor: fade('#acd523', 0.6),
    }
  }
  }))
export default function CreateTestimony() {
    const classes = useStyles()
    const [values, setValues] = useState({
        name:'',
        content:'',
        country:'',
        redirect:false,
        error:'',
        open:false
    })
    const jwt = auth.isAuthenticated();

    const handleChange = name => event => {
        setValues({ ...values, [name]: event.target.value })
      }
    
    const clickSubmit = () =>{
        const testimony = {
            name:values.name || undefined,
            content: values.content || undefined,
            country: values.country || undefined
        };
        create(
            testimony).then((data)=>{
            if(data){
                setValues({ ...values, error: data.error})
            }
            else{
                setValues({ ...values, error:'', open:true})
            }
        })
    }
    return (
        <div>
            <Card className={classes.card}>
                <CardContent>
                    <Typography variant="h6" className={classes.title}>
                        Add Testimony
                    </Typography>
                    <TextField id="name" label="Name" className={classes.textField} onChange={handleChange('name')} margin='normal' /><br />
                    <TextField id="content" label="Description" className={classes.textField} onChange={handleChange('content')} margin='normal' /><br />
                    <TextField id="country" label="Country" className={classes.textField} onChange={handleChange('country')} margin='normal' />
                    <br/> {
                        values.error && (<Typography component="p" color="error">
                        <Icon color="error" className={classes.error}>error</Icon>
                        {values.error}</Typography>)
                    }
                </CardContent>
                <CardActions>
                    <Button color="primary" variant="contained" onClick={clickSubmit} className={classes.submit}>Testify</Button>
                </CardActions>
            </Card>
            <Dialog open={values.open} disableBackdropClick={true}>
                <DialogTitle>Testimonials</DialogTitle>
                <DialogContent>
                <DialogContentText>
                    Thank you for testifying.
                </DialogContentText>
                </DialogContent>
                <DialogActions>
                <Link to="/">
                    <Button color="primary" autoFocus="autoFocus" variant="contained">
                        Ok
                    </Button>
                </Link>
                </DialogActions>
            </Dialog>
        </div>
    )
}
