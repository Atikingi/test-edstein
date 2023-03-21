import React from 'react';
import MainPage from './pages/MainPage';
import { ActiveSelectProvider } from './context/selectContext';
import { LanguageProvider } from './context/languageContext';
import { UIProvider } from './context/UIContext';

function App() {
  return (
    <UIProvider>
      <LanguageProvider>
        <ActiveSelectProvider>
          <MainPage />
        </ActiveSelectProvider>
      </LanguageProvider>
    </UIProvider>
  );
}

export default App;
