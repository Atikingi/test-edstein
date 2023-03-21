import React, { useContext, useEffect, useState } from 'react';

import SearchField from '../SearchField';
import SelectItem from '../SelectItem';

import { activeSelectContext } from '../../context/selectContext';
import { languagesValuesArray } from '../../constants/languages';

import styles from './style.module.css';

const SelectedItemsField = () => {
  const { isActive } = useContext(activeSelectContext);

  const [languagesArr, setLanguagesArr] = useState(languagesValuesArray);
  const [value, setValue] = useState('');

  useEffect(() => {
    setLanguagesArr(languagesArr);
  }, [value]);

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <div className={isActive ? styles.itemsWrapperActive : styles.itemsWrapper}>
      <SearchField onChange={onChangeHandler} />
      {languagesArr
        .filter(({ fullName }) => fullName.toLowerCase().startsWith(value.toLowerCase()))
        .map(({ abbreviation, fullName }) => (
          <SelectItem key={abbreviation} name={fullName} abbr={abbreviation} />
        ))}
    </div>
  );
};

export default SelectedItemsField;
