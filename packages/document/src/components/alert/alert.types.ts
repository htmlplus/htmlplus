import { ReactNode } from 'react';

export interface AlertProps {
  children?: ReactNode;
  type?: 'error' | 'info' | 'success' | 'warning';
}
