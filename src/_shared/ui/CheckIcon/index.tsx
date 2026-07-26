import Check from '../../../assets/icons/check_icon.svg?react';

type Props = {
  size?: number;
};

export const CheckIcon = ({ size = 24 }: Props) => (
  <Check
    width={size}
    style={{ height: 'auto' }}
    aria-hidden='true'
  />
);
