import React from 'react';

import './Container.scss';

interface Props {
  children: React.ReactNode;
}

export const Container = (props: Props) => {
  const { children } = props;
  return <div className='container'>{children}</div>;
};
