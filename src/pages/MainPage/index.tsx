import styles from './style.module.css';
import SelectForm from '../../components/SelectForm';

const MainPage = () => {
  return (
    <div className={styles.container}>
      <SelectForm />
    </div>
  );
};

export default MainPage;
