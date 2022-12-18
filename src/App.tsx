import React from 'react';
import { Counter } from './components/Counter/Counter';
import { MasterDatInfo } from './components/MasterDataInfo/MasterDataInfo';
import { ProductInfo } from './components/ProductInfo/ProductInfo';
import { SessionInfo } from './components/SessionInfo/SessionInfo';
import { DOMProvider } from './lib/DOMProvider/DOMProvider';
import { WindowProvider } from './lib/WindowProvider/WindowProvider';
import { globalStyles } from './styles';

globalStyles();

function App() {
  return (
    <WindowProvider>
      <DOMProvider>
        <Counter />
        <SessionInfo />
        <MasterDatInfo />
        <ProductInfo />
      </DOMProvider>
    </WindowProvider>
  );
}

export default App;
