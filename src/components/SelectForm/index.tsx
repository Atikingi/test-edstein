import SelectField from '../SelectField';
import SelectedItemsField from '../SelectedItemsField';
import FunctionalToggles from '../FunctionalToggles';

import styles from './style.module.css';

const SelectForm = () => {
  return (
    <div className={styles.container}>
      <h4 className={styles.title}>Язык</h4>
      <SelectField />
      <SelectedItemsField />
      <FunctionalToggles />
    </div>
  );
};

export default SelectForm;
