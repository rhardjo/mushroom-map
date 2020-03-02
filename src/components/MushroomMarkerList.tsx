import React from 'react';

import { Mushroom as IMushroom } from '../api';
import MushroomMarker from './MushroomMarker';

const MushroomMarkerList = ({ mushrooms }: { mushrooms: Array<IMushroom> }) => {
  const markers = mushrooms.map((mushroom) => <MushroomMarker key={mushroom.name} {...mushroom} />);
  return <>{markers}</>;
};

export default MushroomMarkerList;
