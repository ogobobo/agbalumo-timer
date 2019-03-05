import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
// import Card from '@material-ui/core/Card';
// import CardActions from '@material-ui/core/CardActions';
// import CardContent from '@material-ui/core/CardContent';
// import Avatar from '@material-ui/core/Avatar';
// import Button from '@material-ui/core/Button';
// import Fade from '@material-ui/core/Fade';
// import Tooltip from '@material-ui/core/Tooltip';
// import WorkOutline from '@material-ui/icons/WorkOutline';
// import Typography from '@material-ui/core/Typography';
// import PersonAdd from '@material-ui/icons/PersonAdd';
// import PlayCircleFilled from '@material-ui/icons/PlayCircleFilled';
// import PauseCircleFilled from '@material-ui/icons/PauseCircleFilled';
// import Refresh from '@material-ui/icons/Refresh';

import TimerCard from '../../components/TimerCard/TimerCard';
// import trucksData from '../../data.json';

const styles = {
  card: {
    flexGrow: 1,
    marginTop: 30,
  },
};

function Timer(props) {
  const { classes } = props;
  // const name = 'hey hey hey';
  return (
    <div className={classes.card}>
    <Grid
  container
  spacing={0}
  direction="column"alignItems="center"
  justify="center"
  style={{ minHeight: '100vh' }}
> <Grid item xm={8} className={classes.card}>
  <TimerCard />
  </Grid>  </Grid>
  {/* <Grid
  container
  spacing={0}
  direction="column"
  alignItems="center"
  justify="center"
  style={{ minHeight: '100vh' }}
> <Grid item xs={6}>
  </Grid> <Grid className={classes.grid}>
  <Card className={classes.card}>
      <CardContent>
      <Avatar alt="rest" src="https://cdn-images-1.medium.com/max/2600/1*lp3SpW1hb1gV_sCV1mfsMg.jpeg" className={classes.avatar} /> <Typography className={classes.name} color="textSecondary" gutterBottom>
      {name}
        </Typography>
      </CardContent>
      </Card>
      <Card className={classes.card}>
      <CardContent>
      <Avatar alt="rest" src="https://cdn-images-1.medium.com/max/2600/1*lp3SpW1hb1gV_sCV1mfsMg.jpeg" className={classes.avatar} /> <Typography className={classes.name} color="textSecondary" gutterBottom>
      {name}
        </Typography>
      </CardContent>
      </Card>
      <Card className={classes.card}>
      <CardContent>
      <Avatar alt="rest" src="https://cdn-images-1.medium.com/max/2600/1*lp3SpW1hb1gV_sCV1mfsMg.jpeg" className={classes.avatar} /> <Typography className={classes.name} color="textSecondary" gutterBottom>
      {name}
        </Typography>
      </CardContent>
      </Card>
     </Grid>
     </Grid> */}
  </div>
  );
}

Timer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Timer);
