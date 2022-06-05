import { forwardRef, useMemo } from 'react';

import NextLink from 'next/link';

import { Spinner } from '@app/components';
import { useRouter } from '@app/hooks';
import * as Utils from '@app/utils';

import { ButtonProps } from './button.types';

const Anchor = forwardRef(({ children, ...args }: any, ref) => {
  return (
    <a ref={ref} {...args}>
      {children}
    </a>
  );
});

const Link = ({ children, params, to, ...attributes }: any) => {
  const router = useRouter();
  const path = useMemo(() => router.path(to, params), [to, params]);
  if (attributes.target === '_blank' && !attributes.rel) {
    attributes.rel = 'noopener noreferrer';
  }
  if (!path)
    return (
      <Anchor href={to} {...attributes}>
        {children}
      </Anchor>
    );
  return (
    <NextLink href={path} passHref>
      <Anchor {...attributes}>{children}</Anchor>
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
