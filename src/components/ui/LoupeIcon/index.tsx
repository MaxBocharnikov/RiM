import Loupe from '../../../assets/icons/loupe.svg?react';

type Props = {
  size?: number;
};

export const LoupeIcon = (props: Props) => {
  const { size = 24 } = props;
  return (
    <Loupe
      width={size}
      style={{ height: 'auto' }}
    />
  );
};
