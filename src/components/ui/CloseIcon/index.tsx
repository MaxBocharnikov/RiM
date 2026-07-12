import Close from '../../../assets/icons/close_icon.svg?react';

type Props = {
  size?: number;
};

export const CloseIcon = ({ size = 12 }: Props) => (
  <Close
    width={size}
    style={{ height: 'auto' }}
    aria-hidden='true'
  />
);
