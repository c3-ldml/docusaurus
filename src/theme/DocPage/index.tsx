import React from 'react';
import Layout from '@theme/Layout';
import DocSidebar from '@theme/DocSidebar';
import styles from './styles.module.css';

export default function DocPage(props) {
  const { children, sidebar, path, onCollapse, isHidden } = props;

  return (
    <Layout>
      <div className={styles.docPage}>
        <div className={styles.sidebarContainer}>
          <DocSidebar 
            sidebar={sidebar} 
            path={path} 
            onCollapse={onCollapse} 
            isHidden={isHidden} 
          />
        </div>
        <main className={styles.docMainContainer}>
          <div className={styles.docMainContent}>
            {children}
          </div>
        </main>
      </div>
    </Layout>
  );
} 