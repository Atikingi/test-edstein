import React, { useState } from 'react';

type activeSelectContextProps = {
  isActive: boolean;
  handleChangeActive: () => void;
};

type Props = {
  children: React.ReactElement;
};

export const activeSelectContext = React.createContext<activeSelectContextProps>({
  isActive: false,
  handleChangeActive: () => undefined
});

export const ActiveSelectProvider = ({ children }: Props) => {
  const [isActive, setIsActive] = useState(false);

  const handleChangeActive = () => {
    setIsActive(!isActive);
  };

  const value = {
    isActive,
    handleChangeActive
  };

  return <activeSelectContext.Provider value={value}>{children}</activeSelectContext.Provider>;
};
