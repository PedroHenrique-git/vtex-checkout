import { createPortal } from 'react-dom';
import { useDOMContext } from '../DOMProvider/DOMProvider';

interface ICreatePortal {
  children: React.ReactNode;
  portalIdentifier: string;
}

export function CreatePortal({ children, portalIdentifier }: ICreatePortal) {
  const { findNode } = useDOMContext();
  const element = findNode?.(portalIdentifier);

  if (!element) return null;

  return createPortal(children, element);
}
