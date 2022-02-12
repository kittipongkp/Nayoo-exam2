import React, { useEffect, useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import CircularProgress from '@material-ui/core/CircularProgress';
import Link from 'next/link'
import Swal from 'sweetalert2'
import { useAddCompany } from "../../hooks/useCompany";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  container: {
    marginTop: theme.spacing(2),
  },
  paper: {
    padding: theme.spacing(2),
    color: theme.palette.text.secondary,
  },
}));

export default function UserList() {
  const classes = useStyles();

  const { data , isSuccess} = useAddCompany()


  const [company, setCompany] = useState<any>([]);
  useEffect(() => {
      if(data){
        setCompany(data.data)
      }
  }, [isSuccess])

  const handleDelete = (id: number) => {
    Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire(
            'Deleted!',
            'Your file has been deleted.',
            'success'
          )
        }
      })
  }


  return (
    <div className={classes.root}>
      <Container className={classes.container} maxWidth="lg">    
        <Paper className={classes.paper}>
          <Box display="flex">
            <Box flexGrow={1}>
              <Typography component="h2" variant="h6" color="primary" gutterBottom>
                Company Information
              </Typography>
            </Box>
            <Box>

                <Button variant="contained" color="primary">
                  CREATE
                </Button>
            
            </Box>
          </Box>
          <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="left">Name</TableCell>
                <TableCell align="left">Organization</TableCell>
                <TableCell align="left">Mobilenumber</TableCell>
                <TableCell align="center">Homephone</TableCell>
                <TableCell align="center">Officenumber</TableCell>
                <TableCell align="center">Email</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {company.map((item: any) => (
                <TableRow key={item.id}>
                  <TableCell align="right">{item.name}</TableCell>
                  <TableCell align="left">{item.organization}</TableCell>
                  <TableCell align="left">{item.mobilenumber}</TableCell>
                  <TableCell align="left">{item.homephone}</TableCell>
                  <TableCell align="left">{item.officenumber}</TableCell>
                  <TableCell align="left">{item.email}</TableCell>
                  <TableCell align="center">
                    <ButtonGroup color="primary" aria-label="outlined primary button group">
                      <Button onClick={() => {{}}}>View</Button>
                      <Button onClick={() => {{}}}>Edit</Button>
                      <Button onClick={() => handleDelete(item.id)}>Del</Button>
                    </ButtonGroup>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        </Paper>
      </Container>
    </div>
    
  );
}