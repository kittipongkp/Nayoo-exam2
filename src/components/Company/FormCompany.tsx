import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import CardMedia from '@material-ui/core/CardMedia';

import { useAddCompany } from '../../hooks/useCompany';
import Swal from "sweetalert2";


const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(1),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  cover: {
    width: 151,
    height: 151,
    margin: "auto",
  },
}));


export default function FormCompany({handleClose, fecthData, }) {
  const classes = useStyles();

  const { mutate } = useAddCompany();


  const handleSubmit = (event: any) => {
    event.preventDefault();
    var data = new FormData();
    data.append('name', name);
    data.append('organization', organization);
    data.append('mobilenumber', mobilenumber);
    data.append('homephone', homephone);
    data.append('officenumber', officenumber);
    data.append('email', email);
    data.append('image', image);

    mutate(data, {
      onSuccess: () => {
        handleClose(false);
        fecthData()
        //window.location.reload(false);
        Swal.fire({
          title: 'Success',
          text: 'Company Added Successfully',
          icon: 'success',
          confirmButtonText: 'OK'
        })
      },
      onError: (error: any) => {
        handleClose(false);
        Swal.fire({
          title: 'Error',
          text: 'Error Adding Company ' + error.message ,
          icon: 'error',
          confirmButtonText: 'OK'
        })
      }
    });

    
  };

  const [name, setName] = useState("");
  const [organization, setOrganization] = useState("");
  const [mobilenumber, setMobilenumber] = useState("");
  const [homephone, setHomephone] = useState("");
  const [email, setEmail] = useState("");
  const [officenumber, setOfficenumber] = useState("");
  const [image, setImage] = useState("");
  const [createObjectURL, setCreateObjectURL] = useState(null);

  const uploadToClient = (event: any) => {
    if (event.target.files && event.target.files[0]) {
      const i = event.target.files[0];
      setImage(i);
      setCreateObjectURL(URL.createObjectURL(i));
    }
  };



  return (
    <Container maxWidth="xs">
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          Company Information
        </Typography>
        <form className={classes.form} onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <CardMedia  className={classes.cover} component="img" alt="Avata" height="100"  image={ createObjectURL == null?  "./images/No-image.jpeg" : createObjectURL } />
              <input type="file" name="myImage" onChange={uploadToClient} />
            </Grid>
            <Grid item xs={12}>
              <TextField
                autoComplete="name"
                name="name"
                variant="outlined"
                required
                fullWidth
                id="name"
                label="Company Name"
                onChange={(e) => setName(e.target.value)}
                autoFocus
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="organization"
                label="Organization"
                onChange={(e) => setOrganization(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="mobilenumber"
                label="Mobilenumber"
                onChange={(e) => setMobilenumber(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="homephone"
                label="Homephone"
                onChange={(e) => setHomephone(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="officenumber"
                label="Officenumber"
                onChange={(e) => setOfficenumber(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Create
          </Button>
        </form>
      </div>
    </Container>
  );
}
