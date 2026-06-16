import './Page.css';

type Props = {
  children: React.ReactNode;
};

export const Page = (props: Props) => {
  const { children } = props;
  return <main className='page'>{children}</main>;
};
