import ArrowDown from '../../../assets/icons/arrow_down_icon.svg?react';

type Props = {
  size?: number;
};

export const ArrowDownIcon = ({ size = 12 }: Props) => (
  <ArrowDown
    width={size}
    style={{ height: 'auto' }}
    aria-hidden='true'
  />
);
