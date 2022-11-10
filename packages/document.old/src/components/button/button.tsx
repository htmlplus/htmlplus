import NextLink from 'next/link';

import { Spinner } from '@app/components';
import * as Utils from '@app/utils';

import { ButtonProps } from './button.types';

const Link = ({ children, to, ...attributes }: any) => {
  if (attributes.target === '_blank' && !attributes.rel) {
    attributes.rel = 'noopener noreferrer';
  }
  return (
    <NextLink href={to} {...attributes}>
      {children}
    </NextLink>
  );
};

export const Button = ({
  block,
  children,
  color,
  disabled,
  icon,
  link,
  loading,
  outlined,
  size = 'md',
  text,
  ...args
}: ButtonProps) => {
  const classes = Utils.classes('button', { block, color, disabled, icon, link, loading, outlined, size, text });
  const Tag = args.to ? Link : ('button' as any);
  return (
    <Tag className={classes} disabled={disabled} {...args}>
      {!loading && children}
      {loading && (
        <>
          <span>{children}</span>
          <Spinner className="loading" type="dual-ring" size="sm" />
        </>
      )}
    </Tag>
  );
};
