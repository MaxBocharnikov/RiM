import React from 'react';

type Props = {
  when: boolean;
  children: React.ReactNode;
};

export const Show = (props: Props) => {
  const { when, children } = props;

  if (!when) {
    return null;
  }

  return children;
};
