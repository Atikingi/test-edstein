import React, { useState } from 'react';

type UIContextProps = {
  iconShow: boolean;
  handleChangeVisible: () => void;
};

type Props = {
  children: React.ReactElement;
};

export const UIContext = React.createContext<UIContextProps>({
  iconShow: true,
  handleChangeVisible: () => undefined
});

export const UIProvider = ({ children }: Props) => {
  const [iconShow, setIconShow] = useState(true);

  const handleChangeVisible = () => {
    setIconShow(!iconShow);
  };

  const value = {
    iconShow,
    handleChangeVisible
  };

  return <UIContext.Provider value={value}>{children}</UIContext.Provider>;
};
