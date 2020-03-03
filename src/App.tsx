import React, { useEffect, useState } from 'react';
import styled, { createGlobalStyle } from 'styled-components';

import getMushroomData, { Spots, Color } from './api';
import MushroomMap from './components/MushroomMap';
import SelectBox from './components/SelectBox';

const GlobalStyle = createGlobalStyle`
 body {
   margin: 0;
   padding: 0;
   font-family: sans-serif;
 }`;

const MapContainer = styled.div``;
const MapFilter = styled.form`
  padding: 0.5em;
`;

const Loading = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`;

interface objectKeyType {
  [key: string]: boolean;
}

const App = () => {
  const [mushroomData, setMushroomData] = useState(); // Keep the full list so we can always reset.
  const [mushroomList, updateMushroomList] = useState(); // Array of markers to be rendered on the map
  const [mushroomFilter, setMushroomFilter] = useState<any>({ spots: 'no-selection', color: 'no-selection' });

  const handleFilterSelection: any = (evt: React.ChangeEvent<HTMLSelectElement>) => {
    evt.preventDefault();
    const {
      target: { name, value },
    } = evt;
    const filterValue = value === 'no-selection' ? value : Number.parseInt(value);

    switch (name) {
      case 'spots':
        setMushroomFilter({ ...mushroomFilter, spots: filterValue });
        break;
      case 'color':
        setMushroomFilter({ ...mushroomFilter, color: filterValue });
        break;
      default:
        return;
    }
  };

  // onMount
  useEffect(() => {
    getMushroomData().then((mushrooms) => {
      setMushroomData(mushrooms);
      updateMushroomList(mushrooms);
    });
  }, []);

  // Iterates through the filters, will return true for a match.
  useEffect(() => {
    if (mushroomData !== undefined) {
      const filteredMushrooms = mushroomData.filter((mushItem: objectKeyType) => {
        if (mushItem)
          for (let key in mushroomFilter) {
            if (
              mushItem[key] === undefined ||
              (mushItem[key] !== mushroomFilter[key] && mushroomFilter[key] !== 'no-selection')
            )
              return false;
          }

        return true;
      });

      updateMushroomList(filteredMushrooms);
    }
  }, [mushroomData, mushroomFilter]);

  return (
    <>
      <GlobalStyle />
      <div className="App">
        {mushroomList ? (
          <MapContainer>
            <MapFilter action="">
              <SelectBox
                name="spots"
                enumObject={Spots}
                handleFilter={handleFilterSelection}
                mushroomFilter={mushroomFilter}
              />
              <SelectBox
                name="color"
                enumObject={Color}
                handleFilter={handleFilterSelection}
                mushroomFilter={mushroomFilter}
              />
            </MapFilter>
            <MushroomMap mushrooms={mushroomList} />
          </MapContainer>
        ) : (
          <Loading>Loading...</Loading>
        )}
      </div>
    </>
  );
};

export default App;
