import { useRef } from 'react';

import { classNames } from '../../lib';
import { CloseIcon } from '../CloseIcon';

import './Input.scss';

type Props = {
  value: string;
  onChange: (value: string) => void;
  onClear?: () => void;
  label?: string;
  variant?: 'underline' | 'outline';
  leftIcon?: React.ReactNode;
  disabled?: boolean;
  fullWidth?: boolean;
};

export const Input = (props: Props) => {
  const { value, onChange, onClear, label, variant = 'outline', leftIcon, disabled = false, fullWidth = false } = props;

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
      className={classNames('input', `input--${variant}`, {
        'input--full-width': fullWidth,
        'input--disabled': disabled
      })}
      onClick={handleContainerClick}
    >
      {leftIcon && <span className='input__left-icon'>{leftIcon}</span>}

      <input
        ref={inputRef}
        className='input__field'
        value={value}
        placeholder={label}
        onChange={handleChange}
        disabled={disabled}
      />

      {hasClear && (
        <button
          type='button'
          className={classNames('input__clear', { 'input__clear--hidden': clearHidden })}
          onClick={handleClear}
          disabled={disabled}
        >
          <CloseIcon size={variant === 'underline' ? 10 : 12} />
        </button>
      )}
    </div>
  );
};
