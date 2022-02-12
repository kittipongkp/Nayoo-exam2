import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import CardMedia from '@material-ui/core/CardMedia';

import { useUpdateCompany } from '../../hooks/useCompany';
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


export default function FormCompany({handleClose, fecthData, item }) {
  const classes = useStyles();

  const { mutate } = useUpdateCompany(item.id);


  const handleSubmit = (event: any) => {
    event.preventDefault();
    var data = {
        name: name,
        organization: organization,
        mobilenumber: mobilenumber,
        homephone: homephone,
        officenumber: officenumber,
        email: email,
    }

   
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

  const [name, setName] = useState(item.name);
  const [organization, setOrganization] = useState(item.organization);
  const [mobilenumber, setMobilenumber] = useState(item.mobilenumber);
  const [homephone, setHomephone] = useState( item.homephone);
  const [email, setEmail] = useState(item.email);
  const [officenumber, setOfficenumber] = useState(item.officenumber);


  return (
    <Container maxWidth="xs">
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          Company Information
        </Typography>
        <form className={classes.form} onSubmit={handleSubmit}>
          <Grid container spacing={2}>
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
                value={name}
                contentEditable={true}
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
                value={organization}
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
                value={mobilenumber}
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
                value={homephone}
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
                value={officenumber}
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
                value={email}
                type="email"
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
            Save
          </Button>
          <Button
           // type="submit"
           onClick={() => handleClose(false)}
            fullWidth
            variant="contained"
            color="default"
            className={classes.submit}
          >
            Cancel
          </Button>
        </form>
      </div>
    </Container>
  );
}
