import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

interface ButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  className?: string;
}

export default function Button({ 
  href, 
  children, 
  variant = 'primary',
  className 
}: ButtonProps) {
  return (
    <a
      href={href}
      className={clsx(
        styles.button,
        variant === 'primary' && styles.primary,
        className
      )}
    >
      {children}
    </a>
  );
} 