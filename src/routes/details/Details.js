import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import queryString from 'query-string';
import { loadState } from '../../tools/localStorage';
// import { Carousel } from 'react-responsive-carousel';

function Details(props) {
  const [truck, setTruck] = useState([]);
  // const [truck] = useState([]);
  const values = queryString.parse(props.location.search);
  // Load trucks from cache
  useEffect(() => {
    // Load trucks from Session Storage if available
    const trucksFromMemory = loadState();
    // eslint-disable-next-line radix
    const findTruck = trucksFromMemory.find(element => element.id === parseInt(values.id));
    setTruck(findTruck);
  }, []);
  return (
    <div>
      { truck.description }
    </div>
  );
}


Details.propTypes = {
  location: PropTypes.object.isRequired,
};
export default Details;
