import './App.css';

import React, { useEffect, useState } from 'react';

import Api from './api';

const App = () => {
  const [mushrooms, setMushrooms] = useState();

  useEffect(() => {
    Api().then((mushrooms) => setMushrooms(mushrooms));
  }, []);

  return <div className="App"></div>;
};

export default App;
