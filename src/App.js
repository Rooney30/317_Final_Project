import React from "react";
import "./App.css";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import Button from '@mui/material/Button';
import AppBar from "./AppBar";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { type } from "@testing-library/user-event/dist/type";
import ViewPhoto from "./SearchCard";
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';import Search from "./SearchResults";
import UploadFormDialog from "./UploadFormDialog";



const cards = [1, 2, 3, 4, 5];

const theme = createTheme();

function App() {
  const [query, setQuery] = React.useState("");
  const [credentials, setCredentials] = React.useState(null);
  const responseGoogle = (response) => {
    console.log(response);
    setCredentials(response);
  };

  

  
  
  

console.log(credentials != null);

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AppBar changeQuery={setQuery} query={query} />
        <Search user={"110177814948114251935"} query={query} credentials={credentials} />

        <div className="googleAuth">
          <GoogleOAuthProvider clientId="396157439888-1skjn5ivt7l8u0dpenl02kf3s17nn2tv.apps.googleusercontent.com">
            <GoogleLogin onSuccess={responseGoogle}></GoogleLogin>
          </GoogleOAuthProvider>
        </div>

        <main>
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
                Photos
              </Typography>
              <Typography variant="h5" align="center" color="text.secondary" paragraph>
                This is our photo gallery. Sign in above using google to see your photos.
                From there you can upload new photos, view your photo gallery, and search
                for your desired photos.
              </Typography>
              
              <UploadFormDialog credentials={credentials}></UploadFormDialog>
            </Container>
          </Box>
          <Container sx={{ py: 8 }} maxWidth="md">



            <Grid container spacing={4}>
              {cards.map((card) => (
                <Grid item key={card} xs={12} sm={6} md={4}>
                  <Card
                    sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                  >
                    <CardMedia
                      component="img"
                      sx={{
                        pt: '0%',
                      }}
                      image="https://source.unsplash.com/random"
                      alt="random"
                    />
                    <CardContent sx={{ flexGrow: 1 }}>
                      <Typography gutterBottom variant="h5" component="h2">
                        Heading
                      </Typography>
                      <Typography>
                        This is a media card. You can use this section to describe the
                        content.
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>



          </Container>
        </main>
      </ThemeProvider>
    </div>
    
  );

  
}









// Create Photo - POST
// https://create-photo-prod-xa25gjzsgq-uc.a.run.app/

// Get Photo - GET
// https://get-photo-prod-xa25gjzsgq-uc.a.run.app/IMAGE_ID_HERE

// Search - GET
// https://search-photo-prod-xa25gjzsgq-uc.a.run.app/
// Add a url parameter q to specify the search term





export default App;
