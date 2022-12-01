import React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Alert } from '@mui/material';


// function for the upload button. Creates dialog that allows user to upload a new photo with a title, description, and file.
 function UploadFormDialog(props) {
    const [open, setOpen] = React.useState(false);
    const [imageContent, setImageContent] = React.useState(null);
    const [errorMsg, setErrorMsg] = React.useState("");
  
    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
      setErrorMsg("");
      setImageContent(null);
    };

    const titleRef = React.useRef(null);
    const descriptionRef = React.useRef(null);
    const photoRef = React.useRef(null);

    
    const handleFileRead = async (event) => {
        const file = event.target.files[0]
        const base64 = await convertBase64(file)
        setImageContent({content: base64, type: event.target.files[0].type})
      }

    const convertBase64 = (file) => {
        return new Promise((resolve, reject) => {
          const fileReader = new FileReader();
          console.log(file)
          fileReader.readAsDataURL(file)
          fileReader.onload = () => {
            resolve(fileReader.result);
          }
          fileReader.onerror = (error) => {
            reject(error);
          }
        })
      }
    async function uploadPhoto() {
        if (props.credentials === null) {
            setErrorMsg("You must be signed in.");
            return;
        }
        if (imageContent == null) {
            setErrorMsg("You must select an image.");
            return;
        }
        if (!titleRef?.current.value) {
            setErrorMsg("You must specify a title.");
            return;
        }
        if (!descriptionRef?.current.value) {
            setErrorMsg("You must specify a description.");
            return;
        }
        

        const requestOptions = {
          headers: {
            'Authorization': `Bearer ${props.credentials.credential}`,
            'Content-Type': "application/json"
          },
          method: 'POST',
          body: JSON.stringify({ 
            content: imageContent.content.split(';base64,')[1],
            type: imageContent.type,
            title: titleRef.current.value, 
            description: descriptionRef.current.value})
        }
    
    
        await fetch('https://create-photo-prod-xa25gjzsgq-uc.a.run.app/', requestOptions)
          .then(response => response.json())
          .then(data => {
            if (data.success)
            {
                console.log(data);
                handleClose();
            }
            else{
            setErrorMsg(data.reason);
        }
        })
          .catch(e => {
            console.error(e);
            setErrorMsg("An error occured.");
          });
      }
  
    return (
      <div>
        <Button variant="outlined" onClick={handleClickOpen}>
          Upload Photo
        </Button>
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>Upload Photo</DialogTitle>
          <DialogContent>
            {errorMsg ? <Alert severity='error'>{errorMsg}</Alert> : null}
            <DialogContentText data-testid="description">
              Select photo file to upload, title, and description for the photo.
            </DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              required
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
              required
              fullWidth
              variant="standard"
              inputRef={descriptionRef}
            />
        <TextField
                id="originalFileName"
                type="file"
                inputProps={{ accept: 'image/*, .xlsx, .xls, .csv, .pdf, .pptx, .pptm, .ppt' }}
                required
                label="Document"
                name="originalFileName"
                onChange={handleFileRead}
                size="small"
                variant="standard"
                inputRef={photoRef}
              />
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