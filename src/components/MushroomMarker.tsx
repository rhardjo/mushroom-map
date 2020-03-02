import React from 'react';
import { Marker, Popup } from 'react-leaflet';

import { Mushroom } from '../api';

const MushroomMarker = ({ latlng, ...mushroomProps }: Mushroom) => {
  console.log(mushroomProps);
  return (
    <Marker position={latlng}>
      <Popup>{mushroomProps.name}</Popup>
    </Marker>
  );
};

export default MushroomMarker;
