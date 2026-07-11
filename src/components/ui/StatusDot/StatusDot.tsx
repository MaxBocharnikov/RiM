import './StatusDot.css';

type Status = 'alive' | 'dead' | 'unknown';

type Props = {
  status: Status;
};

export const StatusDot = ({ status }: Props) => <span className={`status_dot status_dot--${status}`} />;
