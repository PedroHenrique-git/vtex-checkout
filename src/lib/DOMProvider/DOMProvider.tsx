import React, { createContext, useContext, useState } from 'react';
import { useMutationObserver } from '../hooks/useMutationObserver';

interface IDOMContext {
  findNode: ((_identifier: string) => Element | null) | null;
}

const DEFAULT_VALUES: IDOMContext = {
  findNode(identifier) {
    return document.querySelector(identifier);
  },
};

const DOMContext = createContext<IDOMContext>(DEFAULT_VALUES);

export const useDOMContext = () => {
  const domContext = useContext(DOMContext);

  if (domContext === undefined) {
    throw new Error('DOMContext must be used within DOMProvider');
  }

  return domContext;
};

export function DOMProvider({ children }: { children: React.ReactNode }) {
  const [findNode, setFindNode] = useState<
    ((_identifier: string) => Element | null) | null
  >(null);

  useMutationObserver(
    document,
    () => {
      setFindNode(
        () => (identifier: string) => document.querySelector(identifier),
      );
    },
    {
      childList: true,
      subtree: true,
      attributes: true,
    },
    100,
  );

  return (
    <DOMContext.Provider value={{ findNode }}>{children}</DOMContext.Provider>
  );
}
