import { Button, TextField, Typography } from '@mui/material'
import React from 'react'

const Add = () => {
  return (
    <div style={{paddingTop:"100px"}}>
        <Typography variant='inherit' color="blue">BLOG DETAIL </Typography><br/>
        <TextField label='Blog Name' variant='outlined'></TextField><br/>
        <br></br>
        <TextField label='Description' variant='outlined'></TextField><br/>
        <br/>
        <TextField label='Author' variant='outlined'></TextField>
        <br/> <br></br>
        <Button color='success' variant='contained'>Submit</Button>
    </div>
  )
}

export default Add;