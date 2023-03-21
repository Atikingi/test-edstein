import React from 'react';

import SearchIcon from '../../UI/Icons/SearchIcon';

import styles from './style.module.css';

type Props = {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const SearchField = ({ onChange }: Props) => {
  return (
    <div className={styles.container}>
      <div className={styles.iconWrapper}>
        <SearchIcon />
      </div>
      <input className={styles.field} placeholder="Поиск" onChange={onChange} />
    </div>
  );
};

export default SearchField;
