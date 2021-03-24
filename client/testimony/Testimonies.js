import { Paper, Typography, Card, GridList } from '@material-ui/core'
import React, {useState, useEffect} from 'react'
import {list} from './api-shop'

export default function Testimonies(){
    const [testimonies, setTestimonies] = useState([])

    useEffect(()=>{
        const abortController = new AbortController()
        const signal = abortController.signal
        list(signal).then((data)=>{
            if(data.error){
                console.log(data.error)
            }
            else{
                setTestimonies(data)
            }
        })
        return function cleanup(){
            abortController.abort()
        }
    }, [])

    return(
        <Paper className={classes.root} elevation={4}>
            <Typography type="title">Testimonies</Typography>
            <GridList>
                {testimonies.map((testimony, i)=> (
                    <Card key={i} id="cdtile">
                        <Typography>{testimony.name}</Typography>
                        <Typography>{testimony.contnt}</Typography>
                        <Typography>{testimony.country}</Typography>
                    </Card>
                ))}
            </GridList>
        </Paper>
    )
}
Testimonies.propTypes = {
    testimonies: PropTypes.array.isRequired
}