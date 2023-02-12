import React, { ButtonHTMLAttributes, ForwardedRef } from 'react';
import styles from './Button.module.css';

type Props = ButtonHTMLAttributes<HTMLButtonElement>;

export default React.forwardRef(function Button(
  { children, className, ...rest }: Props,
  ref: ForwardedRef<HTMLButtonElement>,
) {
  return (
    <button
      ref={ref}
      className={`${styles.button} ${className || ``}`}
      {...rest}
    >
      {children}
    </button>
  );
});
