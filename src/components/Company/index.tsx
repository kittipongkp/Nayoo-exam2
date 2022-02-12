import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Dialog from '@material-ui/core/Dialog';
import Swal from "sweetalert2";
import { useGetCompany, useDeleteCompany } from "../../hooks/useCompany";

import FormCompany from './FormCompany'
import Avatar from "@material-ui/core/Avatar";
import axios from "axios";
import FormCompanyEdit from "./FormCompanyEdit";
import FormCompanyView from "./FormCompanyView";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    display: "flex",
    padding: "10px",
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

  const { } = useGetCompany(); // บัค React Query ไม่ยอม Refetch ข้อมูล
  const { mutate: deleteItem } = useDeleteCompany();

  const [company, setCompany] = useState<any>([]);
  const [openCreate, setOpenCreate] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);
  const [openView, setOpenView] = useState(false);
  const [item, setItem] = useState<any>({});

  useEffect(() => {
    fecthData();
  }, []);

  const fecthData = () => {
    axios.get("https://test-frontend-api.nayoo.co/api/Nayoo/1701/index",{}).then((res) => setCompany(res.data.data));
  }


  const handleOpen = () => {
    setOpenCreate(true);
  };

  const handleClose = () => {
    setOpenCreate(false);
  };

  const handleOpenEdit = (item: any) => {
    setItem(item);
    setOpenEdit(true);
  };

  const handleCloseEdit = () => {
    setOpenEdit(false);
  };

  const handleOpenView = (item: any) => {
    setItem(item);
    setOpenView(true);
  };

  const handleCloseView = () => {
    setOpenView(false);
  };

  const handleDelete = (id: number) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to Delete this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {

        deleteItem(id, {
          onSuccess: () => {  
            fecthData();
           // window.location.reload(false);
            Swal.fire("Deleted!", "Your file has been deleted.", "success");
          }
        })
      }
    });
  };


  return (
    <div className={classes.root}>
      <Container className={classes.container} maxWidth="lg" >
        <Paper className={classes.paper}>
          <Box>
            <Box flexGrow={1}>
              <Typography
                component="h2"
                variant="h6"
                color="primary"
                gutterBottom
              >
                Company Information
               
              </Typography>
            </Box>
            <Box flexGrow={1} style={{padding: 5, marginBottom: 5}} >
              <Button variant="contained" color="primary"   onClick={() => { handleOpen(); }} >
                CREATE
              </Button>
            </Box>
            
          </Box>
          <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell align="center">Avatar</TableCell>
                  <TableCell  width={150}  align="center">Name</TableCell>
                  <TableCell align="center">Organization</TableCell>
                  <TableCell align="center">Mobilenumber</TableCell>
                  <TableCell align="center">Homephone</TableCell>
                  <TableCell align="center">Officenumber</TableCell>
                  <TableCell align="center">Email</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {company.map((item: any) => (
                  <TableRow key={item.id}>
                     <TableCell align="center">
                    <Box display="flex" justifyContent="center">
                      <Avatar src={`https://test-frontend-api.nayoo.co/images/avatars/${item.image}`} />
                    </Box>
                  </TableCell>
                    <TableCell align="center">{item.name}</TableCell>
                    <TableCell align="center">{item.organization}</TableCell>
                    <TableCell align="center">{item.mobilenumber}</TableCell>
                    <TableCell align="center">{item.homephone}</TableCell>
                    <TableCell align="center">{item.officenumber}</TableCell>
                    <TableCell align="center">{item.email}</TableCell>
                    <TableCell align="center">
                      <ButtonGroup
                        color="primary"
                        aria-label="outlined primary button group"
                      >
                        <Button
                          style={{ backgroundColor: "#3085d6" }}
                          onClick={() => { handleOpenView(item)}}
                        >
                          View
                        </Button>
                        <Button
                          onClick={() => handleOpenEdit(item)} 
                        >
                          Edit
                        </Button>
                        <Button
                          style={{ backgroundColor: "#d33" }}
                          onClick={() => handleDelete(item.id)}
                        >
                          Del
                        </Button>
                      </ButtonGroup>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
      </Container>
      <Dialog
        open={openCreate}
        onClose={handleClose}
        aria-labelledby="draggable-dialog-title"
      >
      <FormCompany handleClose={handleClose} fecthData={fecthData} />
      </Dialog>
      <Dialog
        open={openEdit}
        onClose={handleCloseEdit}
        aria-labelledby="draggable-dialog-title"
      >
      <FormCompanyEdit handleClose={handleCloseEdit} fecthData={fecthData} item={item} />
      </Dialog>
      <Dialog
        open={openView}
        onClose={handleCloseView}
        aria-labelledby="draggable-dialog-title"
      >
      <FormCompanyView handleClose={handleCloseView} item={item} />
      </Dialog>
    </div>
  );
}
