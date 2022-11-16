import Grid from "@mui/material/Grid";
import React from "react";
import SearchCard from "./SearchCard";
import Container from '@mui/material/Container';


const Search = ({ user, query, credentials }) => {
  const [searchResults, setSearchResults] = React.useState(null);
//   const [credentials, setCredentials] = React.useState(null);

  React.useEffect(() => {

    console.log('searching')
    const searchPhoto = async () => {
        if (credentials === null) return;
        const headers = {'Authorization': `Bearer ${credentials.credential}`};
    
        const response = await fetch(`https://search-photo-prod-xa25gjzsgq-uc.a.run.app/?q=${encodeURI(query) || "*"}`, {headers}).then(response => response.json());
        console.log(response);
        setSearchResults(response.data);
    }
    searchPhoto();

  }, [query, credentials]);

  if (!searchResults) return null;

  return (
    <Container sx={{ py: 8 }} maxWidth="md">
    <Grid container spacing={4} >
      {searchResults.map((result) => (
        <Grid item key={result.id} xs={12} md={6} lg={4}>
          <SearchCard
            data={result}
          />
        </Grid>
      ))}
    </Grid>
    </Container>
  );
};

export default Search;
