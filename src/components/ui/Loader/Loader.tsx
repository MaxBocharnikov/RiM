import portalImg from '../../../assets/images/loading_image.png';

import './Loader.css';

type Props = {
  show: boolean;
  size?: 'small' | 'large';
  label?: string;
};

export const Loader = (props: Props) => {
  const { show, label, size = 'large' } = props;

  if (!show) return null;

  return (
    <div className='loader'>
      <img
        className={`loader__portal loader__portal--${size}`}
        src={portalImg}
        alt='loader'
        aria-hidden='true'
      />
      {label && <p className='loader__label'>{label}</p>}
    </div>
  );
};
