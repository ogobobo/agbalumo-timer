import React from 'react';
import Grid from '@material-ui/core/Grid';
import TruckCard from '../../components/TruckCard/TruckCard';

function Trucks() {
  return (
    <div>
      <h1>Hello Trucks</h1>
      <Grid container spacing={16}>
        <Grid item xs={4}>
          <TruckCard />
        </Grid>
        <Grid item xs={4}>
          <TruckCard />
        </Grid>
        <Grid item xs={4}>
          <TruckCard />
        </Grid>
      </Grid>
    </div>
  );
}

export default Trucks;
