import { useRef } from 'react';

import { CloseIcon } from '../../../assets';
import { classNames } from '../../lib';

import styles from './Input.module.scss';

type Props = {
  value: string;
  onChange: (value: string) => void;
  onClear?: () => void;
  label?: string;
  variant?: 'underline' | 'outline';
  leftIcon?: React.ReactNode;
  disabled?: boolean;
  fullWidth?: boolean;
  autoWidth?: boolean;
};

export const Input = (props: Props) => {
  const {
    value,
    onChange,
    onClear,
    label,
    variant = 'outline',
    leftIcon,
    disabled = false,
    fullWidth = false,
    autoWidth = false
  } = props;

  const inputRef = useRef<HTMLInputElement>(null);

  const hasClear = !!onClear;
  const clearHidden = value === '';

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };

  const handleClear = () => {
    onClear?.();
  };

  const handleContainerClick = () => {
    if (disabled) return;
    inputRef.current?.focus();
  };

  return (
    <div
      className={classNames(styles.input, styles[`input_${variant}`], {
        [styles.input_full_width]: fullWidth,
        [styles.input_auto_width]: autoWidth,
        [styles.input_disabled]: disabled
      })}
      onClick={handleContainerClick}
    >
      {leftIcon && <span className={styles.input_left_icon}>{leftIcon}</span>}

      <input
        ref={inputRef}
        className={styles.input_field}
        value={value}
        placeholder={label}
        size={autoWidth ? Math.max(value.length, label?.length ?? 0, 1) : undefined}
        onChange={handleChange}
        disabled={disabled}
      />

      {hasClear && (
        <button
          type='button'
          className={classNames(styles.input_clear, { [styles.input_clear_hidden]: clearHidden })}
          onClick={handleClear}
          disabled={disabled}
        >
          <CloseIcon className={styles.input_clear_icon} />
        </button>
      )}
    </div>
  );
};
