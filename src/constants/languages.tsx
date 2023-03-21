import RussianIcon from '../UI/Icons/RussianIcon';
import EnglandIcon from '../UI/Icons/EnglandIcon';
import SpainIcon from '../UI/Icons/SpainIcon';
import GermanyIcon from '../UI/Icons/GermanyIcon';
import ItalyIcon from '../UI/Icons/ItalyIcon';
import PolandIcon from '../UI/Icons/PolandIcon';
import React from 'react';

export type languagesValuesProps = {
  [key: string]: string;
};

export type languagesIconsProps = {
  [key: string]: React.ReactElement;
};

export const languages: languagesValuesProps = {
  ru: 'Русский',
  en: 'Английский',
  spa: 'Испанский',
  de: 'Немецкий',
  ita: 'Итальянский',
  pol: 'Польский'
};

export const languagesIcons: languagesIconsProps = {
  ru: <RussianIcon />,
  en: <EnglandIcon />,
  spa: <SpainIcon />,
  de: <GermanyIcon />,
  ita: <ItalyIcon />,
  pol: <PolandIcon />
};

export const languagesNameArray = ['ru', 'en', 'spa', 'de', 'ita', 'pol'];

export const languagesValuesArray: languagesValuesProps[] = [
  {
    abbreviation: 'ru',
    fullName: 'Русский'
  },
  {
    abbreviation: 'en',
    fullName: 'Английский'
  },
  {
    abbreviation: 'spa',
    fullName: 'Испанский'
  },
  {
    abbreviation: 'de',
    fullName: 'Немецкий'
  },
  {
    abbreviation: 'ita',
    fullName: 'Итальянский'
  },
  {
    abbreviation: 'pol',
    fullName: 'Польский'
  }
];
