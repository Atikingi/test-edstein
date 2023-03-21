import React, { useEffect, useState } from 'react';

type languageContextProps = {
  activeLanguages: string[];
  handleAddActiveLanguages: (name: string) => void;
  handleDeleteActiveLanguages: (name: string) => void;
  isMultiselect: boolean;
  handleChangeMultiselect: () => void;
};

type Props = {
  children: React.ReactElement;
};

export const languageContext = React.createContext<languageContextProps>({
  activeLanguages: [],
  handleAddActiveLanguages: () => undefined,
  handleDeleteActiveLanguages: () => undefined,
  isMultiselect: true,
  handleChangeMultiselect: () => undefined
});

export const LanguageProvider = ({ children }: Props) => {
  const [activeLanguages, setActiveLanguages] = useState<string[]>([]);
  const [isMultiselect, setIsMultiselect] = useState<boolean>(true);

  useEffect(() => {
    setActiveLanguages([]);
  }, [isMultiselect]);

  const handleAddActiveLanguages = (name: string) => {
    if (isMultiselect) {
      setActiveLanguages((prevState) => prevState.concat(name));
    }

    if (!isMultiselect) {
      setActiveLanguages([name]);
    }
  };

  const handleDeleteActiveLanguages = (name: string) => {
    setActiveLanguages((prevState) => prevState.filter((languageName) => languageName !== name));
  };

  const handleChangeMultiselect = () => {
    setIsMultiselect(!isMultiselect);
  };

  const value = {
    activeLanguages,
    handleAddActiveLanguages,
    handleDeleteActiveLanguages,
    isMultiselect,
    handleChangeMultiselect
  };

  return <languageContext.Provider value={value}>{children}</languageContext.Provider>;
};
