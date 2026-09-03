import { Dot } from '@/shared';

import { STATUS_TONE } from '../../model/constants';
import type { TCharacterStatus } from '../../model/types';

type Props = {
  status: TCharacterStatus;
};

export const CharacterStatusDot = ({ status }: Props) => <Dot tone={STATUS_TONE[status]} />;
