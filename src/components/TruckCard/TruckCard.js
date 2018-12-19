import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

function TruckCard() {
  return (
  <Card>
      <CardActionArea>
        <CardMedia
          src="https://via.placeholder.com/150"
          title="Truck"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Super Truck
          </Typography>
          <Typography component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          View Details
        </Button>
        <Button size="small" color="primary">
         Add To Wishlist
        </Button>
      </CardActions>
    </Card>
  );
}

export default TruckCard;
