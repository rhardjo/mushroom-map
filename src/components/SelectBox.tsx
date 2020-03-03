import React from 'react';
import styled from 'styled-components';

import { getArrayValuesFromEnumObject, getUniqueValues } from '../utils';
import { Mushroom } from '../api';

interface SelectBoxProps {
  name: string;
  enumObject: Object;
  handleFilter: any;
  mushroomFilter: any;
  mushroomList: Array<Mushroom>;
}

const StyledSelectBox = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 128px;
  margin-bottom: 1em;
`;
const StyledLabel = styled.label`
  color: #222;
  text-transform: capitalize;
  font-weight: bold;
  padding: 0.5em 0;
`;
const StyledSelect = styled.select`
  font-size: 14px;
`;
const ClearButton = styled.button`
  background: none;
  border: none;
  padding: 0.25em 0;
  text-decoration: underline;
  color: #222;
  cursor: pointer;
  font-size: 14px;
  text-align: left;
`;

/**
 * Casts object to an array and filter the values
 * @returns {Array} Returns an array of the key index.
 */

const getPossibleOptions = (name: String, list: Array<Mushroom>) => {
  return name === 'spots'
    ? getUniqueValues(list.map(({ spots }) => spots))
    : getUniqueValues(list.map(({ color }) => color));
};

const renderSelectBoxList = (mushroomProperty: any, possibleOptions: Array<any>) => {
  const iterableList = getArrayValuesFromEnumObject(mushroomProperty, possibleOptions);
  return (
    <>
      <option value="no-selection" disabled>
        Select an option
      </option>
      {iterableList.map((value: string) => (
        <option value={value} key={value}>
          {mushroomProperty[value]}
        </option>
      ))}
    </>
  );
};

const SelectBox: React.SFC<SelectBoxProps> = ({ name, enumObject, handleFilter, mushroomFilter, mushroomList }) => {
  const possibleOptions = getPossibleOptions(name, mushroomList);
  return (
    <StyledSelectBox>
      <StyledLabel htmlFor={name}>{name}</StyledLabel>
      <StyledSelect name={name} id={name} onChange={handleFilter} value={mushroomFilter[name]}>
        {renderSelectBoxList(enumObject, possibleOptions)}
      </StyledSelect>
      <ClearButton onClick={handleFilter} name={name} value="no-selection">
        Clear filter
      </ClearButton>
    </StyledSelectBox>
  );
};

export default SelectBox;
