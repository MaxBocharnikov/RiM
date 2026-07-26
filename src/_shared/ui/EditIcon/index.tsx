import Edit from '../../../assets/icons/edit_icon.svg?react';

type Props = {
  size?: number;
};

export const EditIcon = ({ size = 17 }: Props) => (
  <Edit
    width={size}
    style={{ height: 'auto' }}
    aria-hidden='true'
  />
);
