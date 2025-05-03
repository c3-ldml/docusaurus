import React, { useState } from 'react';
import { useLocation } from '@docusaurus/router';
import DocSidebar from '@theme-original/DocSidebar';
import styles from './styles.module.css';

interface CustomSidebarProps {
  sidebar: any;
  path: string;
}

const CustomSidebar: React.FC<CustomSidebarProps> = ({ sidebar, path }) => {
  const [selectedSidebar, setSelectedSidebar] = useState('tutorialSidebar');
  const location = useLocation();

  const handleSidebarChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedSidebar(event.target.value);
  };

  return (
    <div className={styles.customSidebar}>
      <div className={styles.sidebarSelector}>
        <select
          value={selectedSidebar}
          onChange={handleSidebarChange}
          className={styles.dropdown}
        >
          <option value="tutorialSidebar">Tutorial</option>
          <option value="apiSidebar">API Reference</option>
        </select>
      </div>
      <div className={styles.sidebarContent}>
        <DocSidebar sidebar={sidebar[selectedSidebar]} path={path} />
      </div>
    </div>
  );
};

export default CustomSidebar; 