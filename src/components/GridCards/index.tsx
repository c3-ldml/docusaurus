/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/* eslint-disable global-require */

import * as React from 'react';
import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

interface GridItem {
  icon: string;
  title: string;
  description: string;
  links: {
    text: string;
    href: string;
  }[];
  key?: number;
}

interface Props {
  items: GridItem[];
}

function ArrowIcon() {
  return (
    <svg
      className={styles.arrowIcon}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <path d="M13.22 19.03a.75.75 0 0 1 0-1.06L18.19 13H3.75a.75.75 0 0 1 0-1.5h14.44l-4.97-4.97a.749.749 0 0 1 .326-1.275.749.749 0 0 1 .734.215l6.25 6.25a.75.75 0 0 1 0 1.06l-6.25 6.25a.75.75 0 0 1-1.06 0Z" />
    </svg>
  );
}

function GridCard({icon, title, description, links}: GridItem) {
  // Extract the image path from the markdown string
  const imagePath = icon.match(/!\[.*?\]\((.*?)\)/)?.[1] || '';
  
  // Only try to load SVG files
  const isSvg = imagePath.toLowerCase().endsWith('.svg');
  
  return (
    <div className="col col--6" style={{ padding: '0 1rem', marginBottom: '3rem' }}>
      <div className={styles.gridCard}>
        <div className={styles.cardTitle}>
          {isSvg ? (
            <img src={require('@site/static' + imagePath.replace('../../../../static', '')).default} alt={title} style={{ width: '24px', height: '24px', marginRight: '8px' }} />
          ) : (
            <span>{icon}</span>
          )}
          <strong>{title}</strong>
        </div>
        <hr className={styles.divider} />
        <p className={styles.cardDescription}>{description}</p>
        <div className={styles.linkList}>
          {links.map((link, index) => (
            <Link key={index} className={styles.linkItem} to={link.href}>
              <ArrowIcon />
              {link.text}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export function GridCards({items}: Props): ReactNode {
  return (
    <div className="row" style={{ margin: '0 0' }}>
      {items.map((item, index) => (
        <GridCard key={index} {...item} />
      ))}
    </div>
  );
} 