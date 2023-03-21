import React, { useContext } from 'react';

import DeleteIcon from '../../UI/Icons/DeleteIcon';

import { languageContext } from '../../context/languageContext';

import styles from './style.module.css';

type Props = {
  text: string;
  id: string;
};

const SelectedItem = ({ text, id }: Props) => {
  const { handleDeleteActiveLanguages } = useContext(languageContext);

  const onClickHandler = (e: React.MouseEvent<HTMLDivElement>) => {
    handleDeleteActiveLanguages((e.currentTarget as HTMLDivElement).id);
  };

  return (
    <div className={styles.container}>
      <p className={styles.text}>{text}</p>
      <div className={styles.iconWrapper} id={id} onClick={onClickHandler}>
        <DeleteIcon />
      </div>
    </div>
  );
};

export default SelectedItem;
