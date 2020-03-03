import React from 'react';

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
    <div className="SelectBox">
      <select className="SelectBox" name={name} onChange={handleFilter} value={mushroomFilter[name]}>
        {renderSelectBoxList(enumObject)}
      </select>
      <button onClick={handleFilter} name={name} value="no-selection">
        Clear filter
      </button>
    </div>
  );
};

export default SelectBox;
