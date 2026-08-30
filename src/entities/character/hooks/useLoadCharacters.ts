import { useEffect, useState } from 'react';

import { useToast } from '@/shared';

import { characterApi } from '../api';
import type { ICharacter } from '../model/types';

export const useLoadCharacters = () => {
  const { notifyError } = useToast();
  const [characters, setCharacters] = useState<ICharacter[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadCharacters = async () => {
      try {
        setIsLoading(true);
        const data = await characterApi.getCharacters();
        setCharacters(data);
      } catch {
        notifyError('Не удалось загрузить персонажей');
      } finally {
        setIsLoading(false);
      }
    };

    loadCharacters();
  }, [notifyError]);

  return { characters, isLoading };
};
