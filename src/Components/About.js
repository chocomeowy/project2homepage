import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});

const About = () => {
  const classes = useStyles();
  return (
    <>
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            component="img"
            alt="Cats picture"
            height="140"
            img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Felis_silvestris_catus_lying_on_rice_straw.jpg/440px-Felis_silvestris_catus_lying_on_rice_straw.jpg"
            title="Cats picture"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Cat
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              The cat (Felis catus) is a domestic species of small carnivorous
              mammal.
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            component="img"
            alt="Cats picture"
            height="140"
            img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Felis_silvestris_catus_lying_on_rice_straw.jpg/440px-Felis_silvestris_catus_lying_on_rice_straw.jpg"
            title="Cats picture"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Cat
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              The cat (Felis catus) is a domestic species of small carnivorous
              mammal.
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </>
  );
};

export default About;
