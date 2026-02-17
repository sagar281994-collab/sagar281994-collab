// Added React import to resolve the 'Cannot find namespace React' error.
import React from 'react';

export interface SuccessStory {
  role: string;
  clientProfile: string;
  challenge: string;
  result: string;
  icon: React.ReactNode;
}

export interface PortfolioProject {
  title: string;
  description: string;
  link: string;
  tags: string[];
}

export type Theme = 'light' | 'dark';