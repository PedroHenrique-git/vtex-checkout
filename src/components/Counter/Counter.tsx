import React, { useState } from 'react';
import { CreatePortal } from '../../lib/CreatePortal/CreatePortal';
import * as S from './styles';

export function Counter() {
  const [count, setCount] = useState(0);

  return (
    <CreatePortal portalIdentifier={'.headerCheckout'}>
      <S.Container>
        <S.Button onClick={() => setCount((prev) => prev + 1)}>add</S.Button>
        <S.Visor>{count}</S.Visor>
        <S.Button onClick={() => setCount((prev) => prev - 1)}>remove</S.Button>
      </S.Container>
    </CreatePortal>
  );
}
