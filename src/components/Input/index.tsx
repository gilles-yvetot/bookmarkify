import React, { ForwardedRef, InputHTMLAttributes } from 'react';
import styles from './Input.module.css';

export default React.forwardRef(function Input(
  { className, ...rest }: InputHTMLAttributes<HTMLInputElement>,
  ref: ForwardedRef<HTMLInputElement>,
) {
  return (
    <input
      ref={ref}
      className={`${styles.input} ${className || ``}`}
      {...rest}
    />
  );
});
