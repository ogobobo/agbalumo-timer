import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import Grid from '@material-ui/core/Grid';
import Header from './Header/Header';

const ContextType = {
  routes: PropTypes.array.isRequired,
};

class App extends React.PureComponent {
  static propTypes = {
    context: PropTypes.shape(ContextType).isRequired,
  };

  static childContextTypes = ContextType;

  getChildContext() {
    return this.props.context;
  }

  render() {
    // NOTE: If you need to add or modify header, footer etc. of the app,
    // please do that inside the Layout component.
    return React.Children.only(
      <Router>
        <div>
        <Header/>
        <Grid container>
          {renderRoutes(this.props.context.routes[0].routes)}
        </Grid>
        </div>
      </Router>,
    );
  }
}

export default App;
