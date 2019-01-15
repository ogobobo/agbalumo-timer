/* eslint-disable no-console */
import React, { useState, useEffect } from 'react';
// import PropTypes from 'prop-types';
// import queryString from 'query-string';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import RemoveRedEye from '@material-ui/icons/RemoveRedEye';
import { loadState } from '../../tools/localStorage';
// import { Carousel } from 'react-responsive-carousel';

function Favorites() {
  const [truck, setTruck] = useState([]);
  const handleDeleteFavorite = () => {
    console.log('delete button clicked');
  };
  const handleViewFavorite = () => {
    console.log('view button clicked');
  };
  // const [truck] = useState([]);
  // const values = queryString.parse(props.location.search);
  // Load trucks from cache
  useEffect(() => {
    // Load trucks from Session Storage if available
    const trucksFromMemory = loadState();
    // eslint-disable-next-line radix
    // const findTruck = trucksFromMemory.find(element => element.favorite === false);
    const favoriteTrucks = trucksFromMemory.filter(elements => elements.favorite === true);
    // eslint-disable-next-line no-console
    // console.log(favoriteTrucks);
    setTruck(favoriteTrucks);
  }, []);
  return (
    <div>
      {truck.map((element, index) => <p key={index}>{element.name} <RemoveRedEye
      onClick={handleViewFavorite}/><DeleteOutline
      onClick={handleDeleteFavorite}
      />
      </p>)}
    </div>
  );
}


// Favorites.propTypes = {
//   location: PropTypes.object.isRequired,
// };
export default Favorites;
