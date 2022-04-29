import React, {useEffect,useState} from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useLocation } from "react-router-dom";
import { Book } from './Book';

const LOCAL_STORAGE_KEY = "assignment"

const darkTheme = createTheme({
    palette: {
      mode: 'dark',
      primary: {
        main: '#1976d2',
      },
    },
  });

export const View = () => {

    const [addCust,setAddCust] = useState([{m_name: '',cust_name: '',seats: ''}])
    const [open, setOpen] = useState(false);

    const location = useLocation();
    const {card} = location.state

    useEffect(()=>{
      
      setAddCust({m_name:card.show.name,cust_name: '',seats: ''})
    },[])

    const changeHandler=(e)=>{
        const {name,value} = e.target
        setAddCust({...addCust,[name]:value})
    }

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setAddCust({cust_name: '',seats: ''})
        setOpen(false);
    };

    const submitHandler = (e) =>{
        e.preventDefault()
        localStorage.setItem(LOCAL_STORAGE_KEY,JSON.stringify(addCust))
        handleClose();
    }

    const {m_name,cust_name,seats}=addCust

    console.log(card.show.image.original);
    const regex = /(<([^>]+)>)/ig;

    return (
        <>
        <Book
        submitHandler={submitHandler}
        changeHandler={changeHandler}
        open={open}
        handleClose={handleClose}
        m_name={m_name}
        cust_name={cust_name}
        seats={seats} 
            />
        <ThemeProvider theme={darkTheme}>
          <Grid container component="main" sx={{ height: '100vh' }}>
            <CssBaseline />
            <Grid
              item
              xs={false}
              sm={4}
              md={7}
              sx={{
                backgroundImage: 'url('+card.show.image.original+')',
                backgroundRepeat: 'no-repeat',
                backgroundColor: (t) =>
                  t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            />
            <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
              <Box
                sx={{
                  my: 8,
                  mx: 4,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                }}
              >
                <Typography component="p" variant="p">
                  <h1>{card.show.name}</h1>
                  <br></br>
                  {card.show.summary.replace(regex, '')}
                </Typography>
                
                  <Button
                    onClick={handleClickOpen}
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                  >
                    Book Tickets
                  </Button>
              </Box>
            </Grid>
          </Grid>
        </ThemeProvider>
        </>
      );
}
