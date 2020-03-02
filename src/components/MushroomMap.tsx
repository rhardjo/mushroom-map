import './MushroomMap.css';

import React from 'react';
import { Map, TileLayer } from 'react-leaflet';

import MushroomMarkerList from './MushroomMarkerList';

const MushroomMap = ({ mushrooms }: any) => (
  <Map className="MushroomMap" center={[52.080861, 5.235876]} zoom={18}>
    <TileLayer
      attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    <MushroomMarkerList mushrooms={mushrooms} />
  </Map>
);

export default MushroomMap;
