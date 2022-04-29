import React from 'react';
import List from '@mui/material/List';
import FormControl from '@mui/material/FormControl';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';


export const Book = ({open,handleClose,m_name,cust_name,seats,changeHandler,submitHandler}) => {
    return (
        <>
        <div>      
          <Dialog 
          open={open} 
          onClose={handleClose}
          >
            <DialogTitle  sx={{backgroundColor: '#102027',color: '#f5f5f5',textAlign:'center',}}>Book Tickets</DialogTitle>
            <DialogContent sx={{backgroundColor: '#102027',color: '#f5f5f5',}}>          
              <form>
                <Box sx={{ flexGrow: 1 }}>
                  <Grid container spacing={2}>
                    <Grid item xs={12} sx={{textAlign:'center',}}>
                      <TextField sx={{backgroundColor: '#f5f5f5', borderRadius:'4px',}} onChange={changeHandler} type="text" id="outlined-basic" name="m_name" value={m_name} variant="outlined" />
                    </Grid>
                    <Grid item xs={12} sx={{textAlign:'center',}}>
                      <TextField sx={{backgroundColor: '#f5f5f5', borderRadius:'4px',}} onChange={changeHandler} id="outlined-basic" label="Customer Name" name="cust_name" value={cust_name} variant="outlined" />
                    </Grid>
                    <Grid item xs={12} sx={{textAlign:'center',}}>
                      <TextField sx={{backgroundColor: '#f5f5f5', borderRadius:'4px',}} onChange={changeHandler} type="number" id="outlined-basic" label="Seats" name="seats" value={seats} variant="outlined" />
                    </Grid>
                    <Grid item xs={12} sx={{textAlign:'center',}}>
                      <Button sx={{color: '#f5f5f5',width: '41%'}} type="submit" variant="outlined" onClick={submitHandler}>Book</Button>
                    </Grid>
                    <Grid item xs={12} sx={{textAlign:'center',}}>
                      <Button sx={{color: '#f5f5f5',width: '41%'}} variant="outlined" onClick={handleClose}>Cancel</Button>
                    </Grid>
                  </Grid>
                </Box>
              </form>
            </DialogContent>
          </Dialog>
        </div>
        </>
      )
}
