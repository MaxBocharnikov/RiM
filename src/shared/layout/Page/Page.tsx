import styles from './Page.module.scss';

type Props = {
  children: React.ReactNode;
};

export const Page = (props: Props) => {
  const { children } = props;
  return <main className={styles.page}>{children}</main>;
};
