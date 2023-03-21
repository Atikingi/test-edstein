import React, { useContext, useEffect, useState } from 'react';

import CheckedIcon from '../../UI/Icons/checkedIcon';

import { languages, languagesIcons } from '../../constants/languages';
import { languageContext } from '../../context/languageContext';
import { UIContext } from '../../context/UIContext';

import styles from './style.module.css';

type Props = {
  abbr: string;
  name: string;
};

const SelectItem = ({ name, abbr }: Props) => {
  const { activeLanguages, handleAddActiveLanguages, handleDeleteActiveLanguages } =
    useContext(languageContext);
  const { iconShow } = useContext(UIContext);

  const [checked, setChecked] = useState(activeLanguages.includes(abbr));

  useEffect(() => {
    setChecked(activeLanguages.includes(abbr));
  }, [activeLanguages]);

  const onCheckedChangeHandler = (e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation();

    if (!activeLanguages.includes(abbr)) {
      handleAddActiveLanguages(abbr);
    } else {
      handleDeleteActiveLanguages(abbr);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.itemWrapper} onClick={onCheckedChangeHandler}>
        <div className={iconShow ? styles.iconWrapperActive : styles.iconWrapperHidden}>
          {languagesIcons[abbr as keyof typeof languages]}
        </div>
        <div className={styles.checkboxWrapper} onClick={onCheckedChangeHandler}>
          <label className={styles.text} onClick={onCheckedChangeHandler}>
            {name}
          </label>
          <div className={styles.inputWrapper} onClick={onCheckedChangeHandler}>
            <input
              className={checked ? styles.checkboxChecked : styles.checkboxUnchecked}
              type="checkbox"
              id={abbr}
              name="language"
              onClick={onCheckedChangeHandler}
            />
            <div
              className={checked ? styles.checkedIconWrapperShow : styles.checkedIconWrapperHidden}
              onClick={onCheckedChangeHandler}
            >
              <CheckedIcon />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectItem;
