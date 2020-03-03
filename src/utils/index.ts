export const getArrayValuesFromEnumObject = (enumObject: Object, possibleOptions: Array<Number>) => {
  const objectToArray = Object.values(enumObject);
  const filterKeys = objectToArray.filter((item) => !isNaN(Number(item)) && possibleOptions.includes(item));
  return filterKeys;
};

export const getUniqueValues = (array: Array<Object>) => array.filter((v, i) => array.indexOf(v) === i);
