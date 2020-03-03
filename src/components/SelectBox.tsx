import React from 'react';
import styled from 'styled-components';

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
const getArrayValuesFromEnumObject = (enumObject: Object) => {
  const objectToArray = Object.values(enumObject);
  const filterKeys = objectToArray.filter((item) => !isNaN(Number(item)));
  return filterKeys;
};

const renderSelectBoxList = (mushroomProperty: any) => {
  const iterableList = getArrayValuesFromEnumObject(mushroomProperty);

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

interface SelectBoxProps {
  name: string;
  enumObject: Object;
  handleFilter: any;
  mushroomFilter: any;
}

const SelectBox: React.SFC<SelectBoxProps> = ({ name, enumObject, handleFilter, mushroomFilter }) => {
  return (
    <StyledSelectBox>
      <StyledLabel htmlFor={name}>{name}</StyledLabel>
      <StyledSelect name={name} id={name} onChange={handleFilter} value={mushroomFilter[name]}>
        {renderSelectBoxList(enumObject)}
      </StyledSelect>
      <ClearButton onClick={handleFilter} name={name} value="no-selection">
        Clear filter
      </ClearButton>
    </StyledSelectBox>
  );
};

export default SelectBox;
