import { useCallback, useEffect, useRef, useState } from 'react';

import { useToast } from '@/shared';
import axios from 'axios';

import { characterApi } from '../api';
import type { ICharacterListParams } from '../api';
import type { ICharacter } from './types';

type TInsertingMode = 'replace' | 'append';

export const useLoadCharacters = (params?: ICharacterListParams) => {
  const { notifyError } = useToast();
  const [characters, setCharacters] = useState<ICharacter[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  const [hasNext, setHasNext] = useState(false);

  const pageRef = useRef(1);
  const controllerRef = useRef<AbortController | null>(null);

  const paramsKey = JSON.stringify(params ?? {});

  const fetchPage = useCallback(
    async (page: number, mode: TInsertingMode) => {
      controllerRef.current?.abort();
      controllerRef.current = new AbortController();

      const setLoader = mode === 'replace' ? setIsLoading : setIsLoadingMore;

      try {
        setLoader(true);
        const { characters, hasNext } = await characterApi.getCharacters(
          { ...(params ?? {}), page },
          controllerRef.current?.signal
        );

        pageRef.current = page;
        setHasNext(hasNext);
        setCharacters((prev) => {
          if (mode === 'replace') {
            return characters;
          }
          return [...prev, ...characters];
        });
        setLoader(false);
      } catch (error) {
        if (axios.isCancel(error)) {
          return;
        }
        notifyError('Не удалось загрузить персонажей');
        setLoader(false);
      }
    },
    [paramsKey, notifyError] // eslint-disable-line react-hooks/exhaustive-deps
  );

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    fetchPage(1, 'replace');

    return () => {
      controllerRef.current?.abort();
    };
  }, [fetchPage]);

  const loadMore = useCallback(() => {
    if (isLoading || isLoadingMore || !hasNext) {
      return;
    }
    fetchPage(pageRef.current + 1, 'append');
  }, [fetchPage, isLoading, isLoadingMore, hasNext]);

  return { characters, isLoading, isLoadingMore, hasNext, loadMore };
};
