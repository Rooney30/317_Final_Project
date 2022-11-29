import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import Stack from '@mui/material/Stack';



 function UploadFormDialog() {
    const [open, setOpen] = React.useState(false);
  
    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };

    const titleRef = React.useRef(null);
    const descriptionRef = React.useRef(null);
    


    async function uploadPhoto() {

        // console.log(credentials)
        console.log(titleRef.current.value)
        console.log(descriptionRef.current.value)
        // if (credentials == null) return;


        
    
        // const requestOptions = {
        //   headers: {
        //     'Authorization': `Bearer ${credentials.credential}`,
        //     'Content-Type': "application/json"
        //   },
        //   method: 'POST',
        //   body: JSON.stringify({ 
        //     content: elephant,
        //     type: "image/jpeg",
        //     title: 'React POST Request Example' })
        // }
    
        // console.log(requestOptions);
    
        // await fetch('https://create-photo-prod-xa25gjzsgq-uc.a.run.app/', requestOptions)
        //   .then(response => response.json())
        //   .then(data => console.log(data))
        //   .catch(e => {
        //     console.error(e)
        //   });
      }
  
    return (
      <div>
        <Button variant="outlined" onClick={handleClickOpen}>
          Upload Photo
        </Button>
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>Upload Photo</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Select photo file to upload, title, and description for the photo.
            </DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              id="title"
              label="Photo Title"
              type="text"
              fullWidth
              variant="standard"
              inputRef={titleRef}
            />
            <TextField
              autoFocus
              margin="dense"
              id="description"
              label="Photo Description"
              type="text"
              fullWidth
              variant="standard"
              inputRef={descriptionRef}
            />
            
    <Stack direction="row" alignItems="center" spacing={2}>
      <Button variant="contained" component="label">
        Upload Photo
        <input hidden accept="image/*" multiple type="file" />
      </Button>
      <IconButton color="primary" aria-label="upload picture" component="label">
        <input hidden accept="image/*" type="file" />
        <PhotoCamera />
      </IconButton>
    </Stack>


          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button onClick={uploadPhoto}>Upload</Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
  
  export default UploadFormDialog