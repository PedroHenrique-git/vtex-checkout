import { useState } from 'react';
import { CreatePortal } from '../../lib/CreatePortal/CreatePortal';

export function Counter() {
  const [count, setCount] = useState(0);

  return (
    <CreatePortal portalIdentifier={'.cart-template.full-cart'}>
      <div>
        <div>{count}</div>
        <div>
          <button onClick={() => setCount((prev) => prev + 1)}>add</button>
          <button onClick={() => setCount((prev) => prev - 1)}>remove</button>
        </div>
      </div>
    </CreatePortal>
  );
}
