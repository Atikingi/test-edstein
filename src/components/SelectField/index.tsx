import ArrowIcon from '../../UI/Icons/ArrowIcon';
import SelectedItem from '../SelectedItem';

import { useContext } from 'react';

import { activeSelectContext } from '../../context/selectContext';
import { languageContext } from '../../context/languageContext';
import { languages } from '../../constants/languages';

import styles from './style.module.css';

const SelectField = () => {
  const { isActive, handleChangeActive } = useContext(activeSelectContext);
  const { activeLanguages } = useContext(languageContext);

  const onToggleSelectHandler = () => {
    handleChangeActive();
  };

  return (
    <div className={styles.container}>
      <div className={styles.itemsWrapper}>
        {activeLanguages.length
          ? activeLanguages.map((name) => (
              <SelectedItem
                key={`selected_${name}`}
                text={languages[name as keyof typeof languages]}
                id={name}
              />
            ))
          : 'Выберите язык...'}
      </div>
      <div
        className={isActive ? styles.iconWrapperActive : styles.iconWrapper}
        onClick={onToggleSelectHandler}
      >
        <ArrowIcon />
      </div>
    </div>
  );
};

export default SelectField;
