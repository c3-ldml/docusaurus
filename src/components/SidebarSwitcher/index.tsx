import React from 'react';
import { useLocation, useHistory } from '@docusaurus/router';
import styles from './styles.module.css';

const SidebarSwitcher: React.FC = () => {
  const location = useLocation();
  const history = useHistory();

  const handleSidebarChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedSidebar = event.target.value;
    // Navigate to the first item in the selected sidebar
    switch (selectedSidebar) {
      case 'tutorialSidebar':
        history.push('/docs/intro');
        break;
      case 'apiSidebar':
        history.push('/docs/api/getting-started');
        break;
      case 'guidesSidebar':
        history.push('/docs/guides/installation');
        break;
      default:
        break;
    }
  };

  return (
    <select
      onChange={handleSidebarChange}
      className={styles.dropdown}
      value={location.pathname.includes('/api/') ? 'apiSidebar' : 
             location.pathname.includes('/guides/') ? 'guidesSidebar' : 'tutorialSidebar'}
    >
      <option value="tutorialSidebar">Tutorial</option>
      <option value="apiSidebar">API Reference</option>
      <option value="guidesSidebar">Guides</option>
    </select>
  );
};

export default SidebarSwitcher; 