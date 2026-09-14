import { useEffect, useState } from 'react';

import { useToast } from '@/shared';
import axios from 'axios';

import { characterApi } from '../api';
import type { ICharacterListParams } from '../api';
import type { ICharacter } from './types';

export const useLoadCharacters = (params?: ICharacterListParams) => {
  const { notifyError } = useToast();
  const [characters, setCharacters] = useState<ICharacter[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const paramsKey = JSON.stringify(params ?? {});

  useEffect(() => {
    const controller = new AbortController();

    const loadCharacters = async () => {
      try {
        setIsLoading(true);
        const data = await characterApi.getCharacters(params, controller.signal);
        setCharacters(data);
        setIsLoading(false);
      } catch (error) {
        if (axios.isCancel(error)) {
          return;
        }
        notifyError('Не удалось загрузить персонажей');
        setIsLoading(false);
      }
    };

    loadCharacters();

    return () => {
      controller.abort();
    };
  }, [paramsKey, notifyError]);

  return { characters, isLoading };
};
