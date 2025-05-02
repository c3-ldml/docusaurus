import * as React from 'react';
import OriginalAdmonition from '@theme-original/Admonition';
import styles from './styles.module.css';

type Props = {
  type: string;
  title?: string;
  children: React.ReactNode;
};

function Admonition(props: Props): React.ReactElement {
  if (props.type === 'coll-section') {
    return (
      <details className={`${styles.admonition} ${styles.collSection}`}>
        <summary className={styles.admonitionTitle}>
          {props.title}
        </summary>
        <div className={styles.admonitionContent}>
          {props.children}
        </div>
      </details>
    );
  }
  return <OriginalAdmonition {...props} />;
}

export default Admonition;
