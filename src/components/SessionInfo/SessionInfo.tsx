import { gql } from 'graphql-request';
import React, { useEffect, useState } from 'react';
import { css } from '../../../stitches.config';
import { CreatePortal } from '../../lib/CreatePortal/CreatePortal';
import { graphqlClient } from '../../lib/graphql/client';

const query = gql`
  query {
    getSession {
      id
    }
  }
`;

const title = css({
  textAlign: 'center',
  color: '$black',
  fontSize: 'medium',
});

export function SessionInfo() {
  const [sessionId, setSessionID] = useState('');

  useEffect(() => {
    graphqlClient
      .request<{ getSession: { id: string } }>(query)
      .then((data) => {
        setSessionID(data.getSession.id);
      });
  }, []);

  return (
    <CreatePortal portalIdentifier={'.headerCheckout'}>
      <h1 className={title()}>session id by graphql: {sessionId}</h1>
    </CreatePortal>
  );
}
