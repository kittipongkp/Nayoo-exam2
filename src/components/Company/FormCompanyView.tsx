import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import CardMedia from '@material-ui/core/CardMedia';
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";


const useStyles = makeStyles({
    root: {
      maxWidth: 500,
    },
    media: {
      height: 140,
      width: 151,
      height: 151,
      margin: "auto",
    },
    
  });


export default function FormCompany({handleClose, item }) {
  const classes = useStyles();

  

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={`https://test-frontend-api.nayoo.co/images/avatars/${item.image}`}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {item.name}
          </Typography>
          <Typography variant="body1" color="textPrimary" component="body"  >
                  <div>Organization :  {item.organization} </div>
                  <div>Mobilenumber :  {item.mobilenumber} </div>
                  <div>Homephone :     {item.homephone} </div>
                  <div>Officenumber :  {item.officenumber} </div>
                  <div>Email :         {item.email} </div>
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" onClick={()=> handleClose(false) } >
          Close
        </Button>
      </CardActions>
    </Card>
  );
}
