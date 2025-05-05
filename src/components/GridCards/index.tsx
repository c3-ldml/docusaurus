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
import {MDXProvider} from '@mdx-js/react';
import {useMDXComponents} from '@mdx-js/react';

interface GridItem {
  icon: string;
  title: string;
  description: string;
  links: {
    text: string;
    href: string;
  }[];
}

interface Props {
  items: GridItem[];
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
        <div className={styles.cardDescription} dangerouslySetInnerHTML={{ __html: description }} />
        <div className={styles.linkList}>
          {links.map((link, index) => (
            <Link key={index} className={styles.linkItem} to={link.href}>
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
    <MDXProvider>
      <div className="row" style={{ margin: '0 0' }}>
        {items.map((item, index) => (
          <GridCard key={index} {...item} />
        ))}
      </div>
    </MDXProvider>
  );
} 