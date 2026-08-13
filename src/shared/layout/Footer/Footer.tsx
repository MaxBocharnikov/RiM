import styles from './Footer.module.scss';

const AUTHOR = 'Max Bocharnikov';

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer_content}>
        <h3 className={styles.author}>Made with love by {AUTHOR}</h3>
      </div>
    </footer>
  );
};
