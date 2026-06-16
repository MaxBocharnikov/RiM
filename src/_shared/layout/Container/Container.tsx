import React from 'react';

import './Container.css';

interface Props {
  children: React.ReactNode;
}

export const Container = (props: Props) => {
  const { children } = props;
  return <div className='container'>{children}</div>;
};
