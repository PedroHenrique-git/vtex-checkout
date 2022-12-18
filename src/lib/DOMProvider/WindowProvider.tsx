import React, { createContext, useContext, useEffect, useState } from 'react';

type Hash = '#/cart' | '#/payment' | '#/email' | '#/shipping';

interface WindowData {
  vtexjs: Vtexjs | null;
  hash: Hash;
}

interface IWindowContext {
  vtexjs: Vtexjs | null;
  hash: Hash;
}

const WindowContext = createContext<IWindowContext>({
  vtexjs: null,
  hash: window.location.hash as Hash,
});

export const useWindowContext = () => {
  const windowContext = useContext(WindowContext);

  if (windowContext === undefined) {
    throw new Error('WindowContext must be used within WindowProvider');
  }

  return windowContext;
};

export function WindowProvider({ children }: { children: React.ReactNode }) {
  const [windowData, setWindowData] = useState<WindowData>({
    vtexjs: null,
    hash: window.location.hash as Hash,
  });

  useEffect(() => {
    const updateVtexJs = () => {
      setWindowData((prev) => ({
        ...prev,
        vtexjs: window.vtexjs,
      }));
    };

    const updateHash = () => {
      setWindowData((prev) => ({
        ...prev,
        hash: window.location.hash as Hash,
      }));
    };

    window.addEventListener('load', updateVtexJs);
    window.addEventListener('hashchange', updateHash);

    return () => {
      window.removeEventListener('load', updateVtexJs);
      window.addEventListener('hashchange', updateHash);
    };
  }, []);

  return (
    <WindowContext.Provider value={windowData}>
      {children}
    </WindowContext.Provider>
  );
}
