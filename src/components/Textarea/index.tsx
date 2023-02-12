import React, {
  ForwardedRef,
  InputHTMLAttributes,
  TextareaHTMLAttributes,
} from 'react';
import styles from './Textarea.module.css';

export default React.forwardRef(function Textarea(
  { className, ...rest }: InputHTMLAttributes<HTMLTextAreaElement>,
  ref: ForwardedRef<HTMLTextAreaElement>,
) {
  return (
    <textarea
      ref={ref}
      className={`${styles.input} ${className || ``}`}
      {...rest}
    />
  );
});
