import styles from './ErrorBoundary.module.scss';

export const ErrorBoundary = () => {
  const handleReload = () => {
    window.location.reload();
  };

  return (
    <div className={styles.error}>
      <p className={styles.error_text}>Что-то пошло не так</p>
      <button
        className={styles.error_button}
        type='button'
        onClick={handleReload}
      >
        Перезагрузить
      </button>
    </div>
  );
};
