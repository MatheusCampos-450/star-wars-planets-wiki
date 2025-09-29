'use client';

import { forwardRef, useImperativeHandle, useRef } from 'react';
import { inputStyles } from './styles';
import { InputProps } from './types';

const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
  { className, classNameInputContainer, ...props }: InputProps,
  ref,
) {
  const internalInputRef = useRef<HTMLInputElement>(null);

  useImperativeHandle(ref, () => internalInputRef.current as HTMLInputElement);

  const handleClickContainer = () => {
    internalInputRef.current?.focus();
  };

  const { input, inputContainer } = inputStyles();

  return (
    <div
      className={inputContainer({ className: classNameInputContainer })}
      onClick={handleClickContainer}
    >
      <input
        className={input({ className })}
        ref={internalInputRef}
        {...props}
      />
    </div>
  );
});

export default Input;
