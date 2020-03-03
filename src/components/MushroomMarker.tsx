import React from 'react';
import styled from 'styled-components';
import { Marker, Popup } from 'react-leaflet';

import { Mushroom, Spots, Color } from '../api';

interface IMushroomPopup {
  borderStyle: string;
  borderColor: string;
}

const MushroomName = styled.h2`
  text-transform: capitalize;
`;
const MushroomStyle = styled.div`
  margin: 0;
`;
const MushroomColor = styled.div`
  text-transform: capitalize;
`;
const MushroomPopup = styled(Popup)<IMushroomPopup>`
  .leaflet-popup-content-wrapper {
    border: 3px ${(props) => props.borderStyle} ${(props) => props.borderColor};
  }
`;

const MushroomMarker = ({ latlng, name, spots, color }: Mushroom) => {
  const mushroomColor = Color[color];
  const mushroomStyle = Spots[spots];
  return (
    <Marker position={latlng}>
      <MushroomPopup borderColor={mushroomColor} borderStyle={mushroomStyle}>
        <MushroomName>{name}</MushroomName>
        <MushroomStyle>{`Style: ${mushroomStyle}`}</MushroomStyle>
        <MushroomColor>{`Color: ${mushroomColor}`}</MushroomColor>
      </MushroomPopup>
    </Marker>
  );
};

export default MushroomMarker;
