import React, {useState, useRef, useEffect, ComponentType, SVGProps} from 'react';
import {useLocation} from '@docusaurus/router';
import {useThemeConfig} from '@docusaurus/theme-common';
import type {Props} from '@theme/DocSidebar';
import type {PropSidebarItem, PropSidebarItemCategory, PropSidebarItemLink} from '@docusaurus/plugin-content-docs';
import styles from './styles.module.css';
import cognigyIcon from '@site/static/img/_assets/icons/cognigy-ai.svg';
import voiceGatewayIcon from '@site/static/img/_assets/icons/voice-gateway.svg';
import webchatIcon from '@site/static/img/_assets/icons/webchat.svg';
import xappsIcon from '@site/static/img/_assets/icons/xapps-logo.svg';
import liveAgentIcon from '@site/static/img/_assets/icons/live-agent-icon.svg';
import insightsIcon from '@site/static/img/_assets/icons/insights-icon.svg';

interface CustomDropdownProps {
  options: {
    label: string;
    value: string;
    description: string;
    icon?: ComponentType<SVGProps<SVGSVGElement> & { title?: string }>;
  }[];
  value: string;
  onChange: (value: string) => void;
}

function CustomDropdown({options, value, onChange}: CustomDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className={styles.customDropdown} ref={dropdownRef}>
      <button
        className={styles.dropdownButton}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className={styles.dropdownButtonContent}>
          {options.find(opt => opt.value === value)?.icon && (
            <div className={styles.dropdownIcon}>
              {React.createElement(options.find(opt => opt.value === value)?.icon!)}
            </div>
          )}
          <div className={styles.dropdownButtonText}>
            <div className={styles.dropdownButtonTitle}>
              {options.find(opt => opt.value === value)?.label || 'Select a product'}
            </div>
            <div className={styles.dropdownButtonDescription}>
              {options.find(opt => opt.value === value)?.description || ''}
            </div>
          </div>
        </div>
        <svg
          width="8"
          height="24"
          viewBox="0 -9 3 24"
          className={`${styles.dropdownArrow} ${isOpen ? styles.arrowUp : styles.arrowDown}`}
        >
          <path
            d="M0 0L3 3L0 6"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      </button>
      {isOpen && (
        <div className={styles.dropdownMenu}>
          {options.map(option => (
            <button
              key={option.value}
              className={styles.dropdownItem}
              onClick={() => {
                onChange(option.value);
                setIsOpen(false);
              }}
            >
              <div className={styles.dropdownItemContent}>
                {option.icon && (
                  <div className={styles.dropdownIcon}>
                    {React.createElement(option.icon)}
                  </div>
                )}
                <div className={styles.dropdownItemText}>
                  <div className={styles.dropdownItemTitle}>{option.label}</div>
                  <div className={styles.dropdownItemDescription}>{option.description}</div>
                </div>
              </div>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default function DocSidebar(props: Props): React.ReactElement | null {
  const {sidebar} = props;
  const {pathname} = useLocation();
  const {
    navbar: {items},
  } = useThemeConfig();

  // Initialize selectedSidebar based on the current pathname
  const [selectedSidebar, setSelectedSidebar] = useState(() => {
    return pathname.startsWith('/voice/') ? 'voice' : 'cognigy';
  });

  const [expandedCategories, setExpandedCategories] = useState<string[]>([]);

  const sidebarOptions = [
    {
      label: 'Cognigy.AI',
      value: 'cognigy',
      description: 'Build and deploy AI-powered conversational agents',
      icon: cognigyIcon
    },
    {
      label: 'Voice Gateway',
      value: 'voice',
      description: 'Connect voice applications to telephony networks',
      icon: voiceGatewayIcon
    },
    {
      label: 'Webchat',
      value: 'webchat',
      description: 'Embed and customize chat widgets for your website',
      icon: webchatIcon
    },
    {
      label: 'Live Agent',
      value: 'live-agent',
      description: 'Seamlessly hand over conversations to human agents',
      icon: liveAgentIcon
    },
    {
      label: 'Insights',
      value: 'insights',
      description: 'Analyze and optimize your conversational agents',
      icon: insightsIcon
    },
    {
      label: 'xApps',
      value: 'xapps',
      description: 'Build and deploy micro-web applications',
      icon: xappsIcon
    }
  ];

  // Update selectedSidebar when pathname changes
  useEffect(() => {
    setSelectedSidebar(
      pathname.startsWith('/voice-gateway/') ? 'voice' : 
      pathname.startsWith('/webchat/') ? 'webchat' : 
      pathname.startsWith('/live-agent/') ? 'live-agent' :
      pathname.startsWith('/insights/') ? 'insights' :
      pathname.startsWith('/xapps/') ? 'xapps' :
      'cognigy'
    );
  }, [pathname]);

  const handleSidebarChange = (value: string) => {
    setSelectedSidebar(value);
    // Navigate to the intro page of the selected product
    const introPath = 
      value === 'cognigy' ? '/ai/about-cognigy-ai' : 
      value === 'voice' ? '/voice-gateway/overview' : 
      value === 'webchat' ? '/webchat/cognigy-webchat-overview' :
      value === 'live-agent' ? '/live-agent/overview' :
      value === 'insights' ? '/insights/overview' :
      value === 'xapps' ? '/xapps/cognigy-xapps' :
      '/ai/about-cognigy-ai';
    window.location.href = introPath;
  };

  const toggleCategory = (categoryLabel: string) => {
    setExpandedCategories(prev =>
      prev.includes(categoryLabel)
        ? prev.filter(cat => cat !== categoryLabel)
        : [...prev, categoryLabel]
    );
  };

  if (!sidebar) {
    return null;
  }

  const renderSidebarItem = (item: PropSidebarItem) => {
    if (item.type === 'category') {
      const categoryItem = item as PropSidebarItemCategory;
      const isExpanded = expandedCategories.includes(categoryItem.label);

      return (
        <div className={styles.category}>
          <button
            className={`${styles.categoryLabel} ${isExpanded ? styles.expanded : ''}`}
            onClick={() => toggleCategory(categoryItem.label)}
          >
            <svg
              width="8"
              height="24"
              viewBox="0 -9 3 24"
              className={styles.categoryArrow}
            >
              <path
                d="M0 0L3 3L0 6"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
            {categoryItem.label}
          </button>
          {isExpanded && (
            <div className={styles.categoryItems}>
              {categoryItem.items.map((subItem, index) => (
                <div key={index}>{renderSidebarItem(subItem)}</div>
              ))}
            </div>
          )}
        </div>
      );
    } else if (item.type === 'link') {
      const linkItem = item as PropSidebarItemLink;
      return (
        <a href={linkItem.href} className={styles.categoryItem}>
          {linkItem.label}
        </a>
      );
    } else if (typeof item === 'string') {
      // Handle string items (doc references)
      return (
        <a href={`/docs/${item}`} className={styles.categoryItem}>
          {item}
        </a>
      );
    }
    return null;
  };

  return (
    <div className={styles.sidebarWrapper}>
      <div className={styles.sidebarSwitcher}>
        <CustomDropdown
          options={sidebarOptions}
          value={selectedSidebar}
          onChange={handleSidebarChange}
        />
      </div>
      <div className={styles.sidebarContent}>
        {sidebar.map((item, index) => (
          <div key={index} className={styles.sidebarItem}>
            {renderSidebarItem(item)}
          </div>
        ))}
      </div>
    </div>
  );
} 