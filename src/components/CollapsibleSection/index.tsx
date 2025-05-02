import * as React from 'react';
import styles from './styles.module.css';

interface CollapsibleSectionProps {
  title: string;
  children: React.ReactNode;
}

export default function CollapsibleSection({ title, children }: CollapsibleSectionProps): React.ReactElement {
  return (
    <details className={styles.collSection}>
      <summary className={styles.title}>
        {title}
      </summary>
      <div className={styles.content}>
        {children}
      </div>
    </details>
  );
} 