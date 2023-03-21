import { useContext } from 'react';

import { UIContext } from '../../context/UIContext';
import { languageContext } from '../../context/languageContext';

import styles from './style.module.css';

const FunctionalToggles = () => {
  const { iconShow, handleChangeVisible } = useContext(UIContext);
  const { isMultiselect, handleChangeMultiselect } = useContext(languageContext);

  const onIconVisibleChangeHandler = () => {
    handleChangeVisible();
  };

  const onMultiselectChangeHandler = () => {
    handleChangeMultiselect();
  };

  return (
    <div className={styles.container}>
      <label htmlFor="multiselect">Мультиселект</label>
      <input
        type="checkbox"
        id="multiselect"
        name="mode"
        onChange={onMultiselectChangeHandler}
        checked={isMultiselect}
      />
      <label htmlFor="icons">Иконки</label>
      <input
        type="checkbox"
        id="icons"
        name="mode"
        checked={iconShow}
        onChange={onIconVisibleChangeHandler}
      />
    </div>
  );
};

export default FunctionalToggles;
