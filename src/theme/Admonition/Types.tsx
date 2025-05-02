import React from 'react';
import DefaultAdmonitionTypes from '@theme-original/Admonition/Types';
import styles from './styles.module.css';

function CollSectionAdmonition(props) {
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

const AdmonitionTypes = {
  ...DefaultAdmonitionTypes,
  'coll-section': CollSectionAdmonition,
};

export default AdmonitionTypes; 