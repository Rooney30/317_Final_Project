import React from "react";
import "./App.css";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import AppBar from "./AppBar";
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Search from "./SearchResults";
import UploadFormDialog from "./UploadFormDialog";

const theme = createTheme();


// google sign in button
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
