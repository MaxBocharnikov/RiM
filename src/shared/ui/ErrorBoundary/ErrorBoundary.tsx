import styles from './ErrorBoundary.module.scss';

export const ErrorBoundary = () => {
  const handleGoHome = () => {
    window.location.replace('/');
  };

  return (
    <div className={styles.error}>
      <p className={styles.error_text}>Что-то пошло не так</p>
      <button
        className={styles.error_button}
        type='button'
        onClick={handleGoHome}
      >
        На главную
      </button>
    </div>
  );
};
