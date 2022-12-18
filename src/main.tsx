import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { createRootElement } from './utils';

const root = createRoot(createRootElement());

root.render(
  <StrictMode>
    <App />
  </StrictMode>,
);
