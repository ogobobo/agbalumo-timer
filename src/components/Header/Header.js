import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Tooltip from '@material-ui/core/Tooltip';
import Fade from '@material-ui/core/Fade';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Timer from '@material-ui/icons/Timer';
import HelpOutline from '@material-ui/icons/HelpOutline';

const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
    color: '#000',
  },
  link: {
    color: '#000',
    '&:focus, &:hover, &:visited, &:link, &:active': {
      textDecoration: 'none',
    },
  },
  awesome: {
    marginLeft: 3,
    color: 'black',
  },
};

function Header(props) {
  const { classes } = props;
  // if (window.location.pathname === '/') return null;
  return (
    <div className={classes.root}>
      <AppBar position="fixed" color="default">
        <Toolbar>
          <Tooltip title="Developed by INKYROO INC." TransitionComponent={Fade} TransitionProps={{ timeout: 2000 }}>
          <IconButton className={classes.menuButton} >
          <Link to="/" className={classes.link} >
           <Typography>AGBALUMO TIMER <Timer /></Typography>
            </Link>
          </IconButton>
          </Tooltip>
              <Tooltip title="learn more about the philosophy behind agbalumo timer"
          TransitionComponent={Fade} TransitionProps={{ timeout: 2000 }}
          >
          <Button color="inherit"
          onClick={() => window.open('https://en.wikipedia.org/wiki/Pomodoro_Technique', '_blank')}>
              LEARN MORE <HelpOutline
              className={classes.awesome}/></Button></Tooltip>
        </Toolbar>
      </AppBar>
    </div>
  );
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Header);
