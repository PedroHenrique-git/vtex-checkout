import React from 'react';
import { Counter } from './components/Counter/Counter';
import { ProductInfo } from './components/ProductInfo/ProductInfo';
import { DOMProvider } from './lib/DOMProvider/DOMProvider';
import { WindowProvider } from './lib/WindowProvider/WindowProvider';
import { globalStyles } from './styles';

globalStyles();

function App() {
  return (
    <WindowProvider>
      <DOMProvider>
        <Counter />
        <ProductInfo />
      </DOMProvider>
    </WindowProvider>
  );
}

export default App;
