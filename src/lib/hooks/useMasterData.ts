import { KyHeadersInit } from 'ky/distribution/types/options';
import { useCallback } from 'react';
import { api } from '../api';

export function useMasterData(entity: string, headers?: KyHeadersInit) {
  const baseUrlDocuments = `/api/dataentities/${entity}/documents`;
  const baseUrlSearch = `/api/dataentities/${entity}/search`;

  const getDocument = useCallback(
    <T = unknown>(documentId: string, queryString?: string) => {
      return api
        .get(`${baseUrlDocuments}/${documentId}?${queryString ?? ''}`, {
          headers,
        })
        .json<T>();
    },
    [baseUrlDocuments, headers],
  );

  const createNewDocument = useCallback(
    <T = unknown, U = unknown>(data: U, queryString?: string) => {
      return api
        .post(`${baseUrlDocuments}?${queryString ?? ''}`, {
          headers,
          json: data,
        })
        .json<T>();
    },
    [baseUrlDocuments, headers],
  );

  const createPartialDocument = useCallback(
    <T = unknown, U = unknown>(data: U, queryString?: string) => {
      return api
        .patch(`${baseUrlDocuments}?${queryString ?? ''}`, {
          headers,
          json: data,
        })
        .json<T>();
    },
    [baseUrlDocuments, headers],
  );

  const updateEntireDocument = useCallback(
    <T = unknown, U = unknown>(
      documentId: string,
      data: U,
      queryString?: string,
    ) => {
      return api
        .put(`${baseUrlDocuments}/${documentId}?${queryString ?? ''}`, {
          headers,
          json: data,
        })
        .json<T>();
    },
    [baseUrlDocuments, headers],
  );

  const updatePartialDocument = useCallback(
    <T = unknown, U = unknown>(
      documentId: string,
      data: U,
      queryString?: string,
    ) => {
      return api
        .patch(`${baseUrlDocuments}/${documentId}?${queryString ?? ''}`, {
          headers,
          json: data,
        })
        .json<T>();
    },
    [baseUrlDocuments, headers],
  );

  const deleteDocument = useCallback(
    <T = unknown>(documentId: string) => {
      return api
        .delete(`${baseUrlDocuments}/${documentId}`, {
          headers,
        })
        .json<T>();
    },
    [baseUrlDocuments, headers],
  );

  const searchDocuments = useCallback(
    <T = unknown>(queryString: string) => {
      return api
        .get(`${baseUrlSearch}?${queryString ?? ''}`, { headers })
        .json<T>();
    },
    [baseUrlSearch, headers],
  );

  return {
    getDocument,
    createNewDocument,
    createPartialDocument,
    updateEntireDocument,
    updatePartialDocument,
    deleteDocument,
    searchDocuments,
  };
}
