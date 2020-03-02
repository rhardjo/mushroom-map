import './App.css';
// import 'leaflet/dist/leaflet.css';

import React, { useEffect, useState } from 'react';

import getMushroomData from './api';
import MushroomMap from './components/MushroomMap';

const App = () => {
  const [mushrooms, setMushrooms] = useState();

  useEffect(() => {
    getMushroomData().then((mushrooms) => setMushrooms(mushrooms));
  }, []);

  console.log('mushrooms');
  console.log(mushrooms);

  return <div className="App">{mushrooms ? <MushroomMap mushrooms={mushrooms} /> : <div>Loading...</div>}</div>;
};

export default App;
