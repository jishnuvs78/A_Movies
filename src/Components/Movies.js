import React, {useEffect,useState} from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import CameraIcon from '@mui/icons-material/PhotoCamera';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Link } from "react-router-dom";

const darkTheme = createTheme({
    palette: {
      mode: 'dark',
      primary: {
        main: '#1976d2',
      },
    },
  });


export const Movies = () => {

    const [mov,setMov] = useState([])

    useEffect(async()=>{
        await fetch("https://api.tvmaze.com/search/shows?q=all")
            .then(res=>res.json())
            .then(json=>{
                console.log(json)
                setMov(json)
                console.log(mov)
            })
    },[])
    
    return (
        <ThemeProvider theme={darkTheme}>
          <CssBaseline />
          {/* <AppBar position="relative">
            <Toolbar>
              <CameraIcon sx={{ mr: 2 }} />
              <Typography variant="h6" color="inherit" noWrap>
                Movies
              </Typography>
            </Toolbar>
          </AppBar> */}
          <main>
            {/* Hero unit */}
            <Box
              sx={{
                bgcolor: 'background.paper',
                pt: 8,
                pb: 6,
              }}
            >
              <Container maxWidth="sm">
                <Typography
                  component="h1"
                  variant="h2"
                  align="center"
                  color="text.primary"
                  gutterBottom
                >
                  'A' Movies
                </Typography>
                <Stack
                  sx={{ pt: 4 }}
                  direction="row"
                  spacing={2}
                  justifyContent="center"
                >
                </Stack>
              </Container>
            </Box>
            <Container sx={{ py: 8 }} maxWidth="md">
              {/* End hero unit */}
              <Grid container spacing={4}>
                {mov.map((card) => (
                  <Grid item key={card.show.id} xs={12} sm={6} md={4}>
                    <Card
                      sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                    >
                      <CardMedia
                        component="img"
                        sx={{
                          // 16:9
                          pt: '56.25%',
                        }}
                        image={card.show.image.original}
                        alt="random"
                      />
                      <CardContent sx={{ flexGrow: 1 }}>
                        <Typography gutterBottom variant="h5" component="h2">
                          {card.show.name}
                        </Typography>
                        <Typography>
                          Score: {card.score}
                          <br></br>
                          Genres: {card.show.genres.map((gen)=>(
                              <li>{gen}</li>
                          ))}
                        </Typography>
                      </CardContent>
                      <CardActions>
                        
                        <Button fullWidth  size="small">
                            <Link to={{
                                pathname:'/view',
                                state: {card}
                            }}
                            style={{ textDecoration: 'none' }}
                            >
                                View
                            </Link>
                       </Button>
                        
                      </CardActions>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </Container>
          </main>
          {/* Footer */}
          <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
            <Typography variant="h6" align="center" gutterBottom>
              Jishnu's Submission
            </Typography>
            <Typography
              variant="subtitle1"
              align="center"
              color="text.secondary"
              component="p"
            >
              You know what your problem is, it's that you haven't seen enough 
              movies - all of life's riddles are answered in the movies.
                    <br></br>
                                ~Steve Martin
            </Typography>
          </Box>
          {/* End footer */}
        </ThemeProvider>
    )
}
