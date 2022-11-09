import { PropsWithChildren } from 'react';
import { Router } from 'next/router';
import NextLink, { LinkProps as NextLinkProps } from 'next/link';

import {
  Link as LinkBase,
  LinkProps as MuiLinkProps,
  ButtonProps
} from '@mui/material';

export interface LinkProps {
  href: string;
  mui?: MuiLinkProps | ButtonProps;
  next?: NextLinkProps;
  component?: React.ElementType;
}

export const Link: React.FC<PropsWithChildren<LinkProps>> = ({
  href,
  children,
  next,
  component: Component = LinkBase,
  mui = { variant: 'contained' },
  ...rest
}) => {
  const isNextEnv = Boolean(Router.name);
  return isNextEnv ? (
    <NextLink {...next} href={href}>
      <Component component="span" {...mui} {...rest}>
        {children}
      </Component>
    </NextLink>
  ) : (
    <Component {...mui} {...rest} href={href}>
      {children}
    </Component>
  );
};
