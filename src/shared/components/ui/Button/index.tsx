'use client';

import { buttonStyles } from './styles';
import { ButtonProps } from './types';

function Button({ children, className, icon, ...props }: ButtonProps) {
  const styles = buttonStyles({ className });

  return (
    <button className={styles} {...props}>
      {icon && (
        <div className="pr-xxxs flex h-fit w-fit items-center justify-center">
          {icon}
        </div>
      )}

      {children}
    </button>
  );
}

export default Button;
