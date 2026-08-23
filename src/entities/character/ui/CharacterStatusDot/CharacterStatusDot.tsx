import { Dot, type TDotTone } from '../../../../shared';
import type { TCharacterStatus } from '../../model/types';

const STATUS_TONE: Record<TCharacterStatus, TDotTone> = {
  Alive: 'success',
  Dead: 'danger',
  unknown: 'warning'
};

type Props = {
  status: TCharacterStatus;
};

export const CharacterStatusDot = ({ status }: Props) => <Dot tone={STATUS_TONE[status]} />;
