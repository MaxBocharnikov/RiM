import { classNames } from '../../lib';

import './StatusDot.scss';

type Status = 'alive' | 'dead' | 'unknown';

type Props = {
  status: Status;
};

export const StatusDot = ({ status }: Props) => <span className={classNames('status-dot', `status-dot--${status}`)} />;
