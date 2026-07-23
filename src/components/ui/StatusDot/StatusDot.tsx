import { classNames } from '../../../_shared';

import './StatusDot.css';

type Status = 'alive' | 'dead' | 'unknown';

type Props = {
  status: Status;
};

export const StatusDot = ({ status }: Props) => <span className={classNames('status_dot', `status_dot--${status}`)} />;
