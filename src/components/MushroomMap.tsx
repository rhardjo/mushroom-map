import React from 'react';
import styled from 'styled-components';
import { Map, TileLayer } from 'react-leaflet';

import MushroomMarkerList from './MushroomMarkerList';

const StyledMap = styled(Map)`
  width: 100%;
  height: 100vh;
`;

const MushroomMap = ({ mushrooms }: any) => (
  <StyledMap className="MushroomMap" center={[52.080861, 5.235876]} zoom={18}>
    <TileLayer
      attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    <MushroomMarkerList mushrooms={mushrooms} />
  </StyledMap>
);

export default MushroomMap;
