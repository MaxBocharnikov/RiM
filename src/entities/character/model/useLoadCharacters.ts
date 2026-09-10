import { useEffect, useState } from 'react';

import { useToast } from '@/shared';

import { characterApi } from '../api';
import type { ICharacterListParams } from '../api';
import type { ICharacter } from './types';

export const useLoadCharacters = (params?: ICharacterListParams) => {
  const { notifyError } = useToast();
  const [characters, setCharacters] = useState<ICharacter[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const paramsKey = JSON.stringify(params ?? {});

  useEffect(() => {
    const loadCharacters = async () => {
      try {
        setIsLoading(true);
        const data = await characterApi.getCharacters(params);
        setCharacters(data);
      } catch {
        notifyError('Не удалось загрузить персонажей');
      } finally {
        setIsLoading(false);
      }
    };

    loadCharacters();
  }, [paramsKey, notifyError]);

  return { characters, isLoading };
};
