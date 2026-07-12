import { useEffect, useRef, useState } from 'react';

import classNames from 'classnames';

import { ArrowDownIcon } from '../ArrowDownIcon';
import { CloseIcon } from '../CloseIcon';

import './Select.css';

interface ISelectOption<T> {
  label: string;
  value: T;
  decorationSlot?: React.ReactNode;
}

type Props<T> = {
  options: ISelectOption<T>[];
  value: T | null;
  onChange: (value: T | null) => void;
  placeholder?: string;
  size?: 'small' | 'medium';
  clearable?: boolean;
  disabled?: boolean;
  fullWidth?: boolean;
};

export const Select = <T,>(props: Props<T>) => {
  const {
    options,
    value,
    onChange,
    placeholder = '',
    size = 'medium',
    clearable = false,
    disabled = false,
    fullWidth = false
  } = props;

  const [isOpen, setIsOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  const selectedOption = options.find((option) => option.value === value) ?? null;
  const showClear = clearable && value !== null;

  useEffect(() => {
    if (!isOpen) return;

    const handleClickOutside = (event: MouseEvent) => {
      if (rootRef.current && !rootRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  const close = () => {
    setIsOpen(false);
  };

  const toggleOpen = () => {
    if (disabled) return;
    setIsOpen((prev) => !prev);
  };

  const handleSelect = (option: ISelectOption<T>) => {
    onChange(option.value);
    close();
  };

  const handleClear = (event: React.MouseEvent) => {
    event.stopPropagation();
    onChange(null);
  };

  const handleTriggerKeyDown = (event: React.KeyboardEvent) => {
    if (disabled) return;

    switch (event.key) {
      case 'Escape':
        if (isOpen) {
          event.preventDefault();
          close();
        }
        break;
    }
  };

  return (
    <div
      ref={rootRef}
      className={classNames('select', `select--${size}`, {
        'select--open': isOpen,
        'select--full-width': fullWidth
      })}
    >
      <button
        ref={triggerRef}
        type='button'
        className='select__trigger'
        onClick={toggleOpen}
        onKeyDown={handleTriggerKeyDown}
        disabled={disabled}
        aria-haspopup='listbox'
        aria-expanded={isOpen}
      >
        {selectedOption?.decorationSlot && <span className='select__decoration'>{selectedOption.decorationSlot}</span>}

        {selectedOption ? (
          <span className='select__value'>{selectedOption.label}</span>
        ) : (
          <span className='select__placeholder'>{placeholder}</span>
        )}

        {showClear && (
          <span
            className='select__clear'
            role='button'
            tabIndex={-1}
            aria-label='Clear selection'
            onClick={handleClear}
          >
            <CloseIcon size={8} />
          </span>
        )}
        <span
          className='select__arrow'
          aria-hidden='true'
        >
          <ArrowDownIcon size={size === 'small' ? 3 : 10} />
        </span>
      </button>

      {isOpen && (
        <ul
          className='select__dropdown'
          role='listbox'
        >
          {options.map((option) => {
            const isSelected = option.value === value;
            return (
              <li
                key={option.label}
                role='option'
                aria-selected={isSelected}
                className={classNames('select__option', {
                  'select__option--selected': isSelected
                })}
                onClick={() => handleSelect(option)}
              >
                {option.decorationSlot && <span className='select__decoration'>{option.decorationSlot}</span>}
                <span className='select__option-label'>{option.label}</span>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};
