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
import Search from "./SearchResults";

const theme = createTheme();

function App() {
  const [query, setQuery] = React.useState("");
  const [credentials, setCredentials] = React.useState(null);
  const responseGoogle = (response) => {
    console.log(response);
    setCredentials(response);
  };

  async function uploadPhoto() {

    console.log(credentials)
    if (credentials == null) return;

    const requestOptions = {
      headers: {
        'Authorization': `Bearer ${credentials.credential}`,
        'Content-Type': "application/json"
      },
      method: 'POST',
      body: JSON.stringify({ 
        content: elephant,
        type: "image/jpeg",
        title: 'Title',
        description: 'this is the description'})
    }

    console.log(requestOptions);

    await fetch('https://create-photo-prod-xa25gjzsgq-uc.a.run.app/', requestOptions)
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(e => {
        console.error(e)
      });
  }

console.log(credentials != null);

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AppBar changeQuery={setQuery} query={query} />
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
              <Button onClick={uploadPhoto} variant="contained">Upload photo</Button>
            </Container>
          </Box>
          
        </main>
      </ThemeProvider>
        <Search user={"110177814948114251935"} query={query} credentials={credentials} />
    </div>
  );
}

  const elephant = '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'


// Create Photo - POST
// https://create-photo-prod-xa25gjzsgq-uc.a.run.app/

// Get Photo - GET
// https://get-photo-prod-xa25gjzsgq-uc.a.run.app/IMAGE_ID_HERE

// Search - GET
// https://search-photo-prod-xa25gjzsgq-uc.a.run.app/
// Add a url parameter q to specify the search term


export default App;
