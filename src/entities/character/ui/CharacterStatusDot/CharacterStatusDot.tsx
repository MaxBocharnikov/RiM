import { Dot } from '@/shared';

import { STATUS_TONE } from '../../config/constants';
import type { TCharacterStatus } from '../../model/types';

type Props = {
  status: TCharacterStatus;
};

export const CharacterStatusDot = ({ status }: Props) => <Dot tone={STATUS_TONE[status]} />;
