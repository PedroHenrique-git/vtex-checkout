import React, { useEffect, useState } from 'react';
import { css } from '../../../stitches.config';
import { CreatePortal } from '../../lib/CreatePortal/CreatePortal';
import { useMasterData } from '../../lib/hooks/useMasterData';

const masterDataInfo = css({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

export function MasterDatInfo() {
  const { searchDocuments } = useMasterData('CL', {
    'REST-Range': 'resources=0-300',
  });

  const [clients, setClients] = useState<
    Array<{
      email: string;
    }>
  >([]);

  useEffect(() => {
    searchDocuments<
      Array<{
        email: string;
      }>
    >('_where=firstName is not null').then((data) => {
      setClients(data.slice(0, 10));
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <CreatePortal portalIdentifier={'.headerCheckout'}>
      <div className={masterDataInfo()}>
        <ul>
          {clients.map((client) => (
            <li key={client.email}>{client.email}</li>
          ))}
        </ul>
      </div>
    </CreatePortal>
  );
}
